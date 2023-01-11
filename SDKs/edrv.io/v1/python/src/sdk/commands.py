import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Commands:
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

    
    def cancelreservation(self, request: operations.CancelreservationRequest) -> operations.CancelreservationResponse:
        r"""Use to request a delete an existing reservation. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/commands/cancelreservation"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CancelreservationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Cancelreservation201ApplicationJSON])
                res.cancelreservation_201_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def get_commands(self, request: operations.GetCommandsRequest) -> operations.GetCommandsResponse:
        r"""Get Commands data
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/commands"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCommandsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_variables(self, request: operations.GetVariablesRequest) -> operations.GetVariablesResponse:
        r"""Get a charge station's config variables
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/commands/{id}/variables", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVariablesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def patch_charge_station_variable(self, request: operations.PatchChargeStationVariableRequest) -> operations.PatchChargeStationVariableResponse:
        r"""Update config variables for a chargestation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/commands/{id}/variables", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchChargeStationVariableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchChargeStationVariable201ApplicationJSON])
                res.patch_charge_station_variable_201_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def remotestart(self, request: operations.RemotestartRequest) -> operations.RemotestartResponse:
        r"""Use to request a remote start command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/commands/remotestart"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RemotestartResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Remotestart201ApplicationJSON])
                res.remotestart_201_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def remotestop(self, request: operations.RemotestopRequest) -> operations.RemotestopResponse:
        r"""Use to request a remote stop command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/commands/remotestop"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RemotestopResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def reserve(self, request: operations.ReserveRequest) -> operations.ReserveResponse:
        r"""Use to request a reserve command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/commands/reserve"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReserveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Reserve201ApplicationJSON])
                res.reserve_201_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def reset(self, request: operations.ResetRequest) -> operations.ResetResponse:
        r"""Use to request a reset command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/commands/reset"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ResetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Reset201ApplicationJSON])
                res.reset_201_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def unlockconnector(self, request: operations.UnlockconnectorRequest) -> operations.UnlockconnectorResponse:
        r"""Use to request an unlock command for a connector. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/commands/unlockconnector"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UnlockconnectorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Unlockconnector201ApplicationJSON])
                res.unlockconnector_201_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    