import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Configurations:
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

    
    def get_configuration(self, request: operations.GetConfigurationRequest) -> operations.GetConfigurationResponse:
        r"""Get one Configuration data
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/configurations/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_configurations(self, request: operations.GetConfigurationsRequest) -> operations.GetConfigurationsResponse:
        r"""Get Configurations data
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/configurations"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConfigurationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_configurations(self, request: operations.PostConfigurationsRequest) -> operations.PostConfigurationsResponse:
        r"""Create connector with parameters
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/configurations"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostConfigurationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostConfigurations201ApplicationJSON])
                res.post_configurations_201_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    