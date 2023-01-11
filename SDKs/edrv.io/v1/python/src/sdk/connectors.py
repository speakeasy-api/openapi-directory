import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Connectors:
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

    
    def delete_connector(self, request: operations.DeleteConnectorRequest) -> operations.DeleteConnectorResponse:
        r"""Delete a connector
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/connectors/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteConnectorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_connector(self, request: operations.GetConnectorRequest) -> operations.GetConnectorResponse:
        r"""Get a connector
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/connectors/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConnectorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_connectors(self, request: operations.GetConnectorsRequest) -> operations.GetConnectorsResponse:
        r"""List connectors
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/connectors"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConnectorsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def patch_connector(self, request: operations.PatchConnectorRequest) -> operations.PatchConnectorResponse:
        r"""Update a connector's data
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/connectors/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchConnectorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchConnector201ApplicationJSON])
                res.patch_connector_201_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def post_connectors(self, request: operations.PostConnectorsRequest) -> operations.PostConnectorsResponse:
        r"""Create a new connector
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/connectors"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostConnectorsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostConnectors200ApplicationJSON])
                res.post_connectors_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    