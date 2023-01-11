import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class ApplicationAcceleration:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def get_vehicle_seen_vehicle_seen_get(self, request: operations.GetVehicleSeenVehicleSeenGetRequest) -> operations.GetVehicleSeenVehicleSeenGetResponse:
        r"""Checks if a VIN appeared on the market on or after a given date.
        Checks our database to see if we have data on a VIN that appeared on the open market on or after the given date with a True/False response. 
        This endpoint is more cost effective than the /vehicleHistory endpoint if your use case
        requires searching a large list of vehicles with a low individual likelyhood of appearing on the open market. (For example searching for a specific stolen vehicle).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/vehicleSeen"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVehicleSeenVehicleSeenGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BooleanResp])
                res.boolean_resp = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    