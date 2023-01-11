import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Drivers:
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

    
    def delete_driver(self, request: operations.DeleteDriverRequest) -> operations.DeleteDriverResponse:
        r"""Delete a driver
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/drivers/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDriverResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_driver(self, request: operations.GetDriverRequest) -> operations.GetDriverResponse:
        r"""Get a driver's data
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/drivers/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDriverResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_drivers(self, request: operations.GetDriversRequest) -> operations.GetDriversResponse:
        r"""List all drivers
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/drivers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDriversResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDrivers200ApplicationJSON])
                res.get_drivers_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def patch_driver(self, request: operations.PatchDriverRequest) -> operations.PatchDriverResponse:
        r"""Update a driver's data
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/drivers/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchDriverResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchDriver200ApplicationJSON])
                res.patch_driver_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def post_drivers(self, request: operations.PostDriversRequest) -> operations.PostDriversResponse:
        r"""Create a new driver
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/drivers"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDriversResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostDrivers200ApplicationJSON])
                res.post_drivers_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    