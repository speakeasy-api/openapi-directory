import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Configs:
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

    
    def create_config(self, request: operations.CreateConfigRequest) -> operations.CreateConfigResponse:
        r"""Create Config
        This endpoint creates a new Config in a specified Product 
        identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/products/{productId}/configs", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigModelHaljson])
                res.config_model_haljson = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigModel])
                res.config_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def delete_config(self, request: operations.DeleteConfigRequest) -> operations.DeleteConfigResponse:
        r"""Delete Config
        This endpoint removes a Config identified by the `configId` parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/configs/{configId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def get_config(self, request: operations.GetConfigRequest) -> operations.GetConfigResponse:
        r"""Get Config
        This endpoint returns the metadata of a Config
        identified by the `configId`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/configs/{configId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigModelHaljson])
                res.config_model_haljson = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigModel])
                res.config_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def get_configs(self, request: operations.GetConfigsRequest) -> operations.GetConfigsResponse:
        r"""List Configs
        This endpoint returns the list of the Configs that belongs to the given Product identified by the
        `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/products/{productId}/configs", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConfigsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.ConfigModelHaljson]])
                res.config_model_haljsons = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.ConfigModel]])
                res.config_models = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def update_config(self, request: operations.UpdateConfigRequest) -> operations.UpdateConfigResponse:
        r"""Update Config
        This endpoint updates a Config identified by the `configId` parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/configs/{configId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigModelHaljson])
                res.config_model_haljson = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConfigModel])
                res.config_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    