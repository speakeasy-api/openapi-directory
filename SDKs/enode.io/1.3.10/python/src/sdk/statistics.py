import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Statistics:
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

    
    def get_statistics_charging(self, request: operations.GetStatisticsChargingRequest) -> operations.GetStatisticsChargingResponse:
        r"""Get User Charging Statistics
        Returns a normalized timeseries of statistics about power consumption and price for the User.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/statistics/charging"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStatisticsChargingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[operations.GetStatisticsCharging200ApplicationJSON]])
                res.get_statistics_charging_200_application_json_objects = out

        return res

    