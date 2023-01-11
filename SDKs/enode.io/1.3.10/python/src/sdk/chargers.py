import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Chargers:
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

    
    def control_charger_charging(self, request: operations.ControlChargerChargingRequest) -> operations.ControlChargerChargingResponse:
        r"""Control Charging
        Instruct the charger to start or stop charging
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/chargers/{chargerId}/charging", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ControlChargerChargingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_charger(self, request: operations.GetChargerRequest) -> operations.GetChargerResponse:
        r"""Get Charger
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/chargers/{chargerId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChargerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCharger200ApplicationJSON])
                res.get_charger_200_application_json_object = out

        return res

    
    def get_chargers(self, request: operations.GetChargersRequest) -> operations.GetChargersResponse:
        r"""List Chargers
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/chargers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChargersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Onechargers1Percent7BchargerIDPercent7DGetResponses200ContentApplication1jsonSchema]])
                res.onechargers_1_percent_7_bcharger_id_percent_7_d_get_responses_200_content_application_1json_schemas = out

        return res

    