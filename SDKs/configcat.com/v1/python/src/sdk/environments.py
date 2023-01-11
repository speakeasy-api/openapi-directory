import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Environments:
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

    
    def create_environment(self, request: operations.CreateEnvironmentRequest) -> operations.CreateEnvironmentResponse:
        r"""Create Environment
        This endpoint creates a new Environment in a specified Product 
        identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/products/{productId}/environments", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateEnvironmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EnvironmentModelHaljson])
                res.environment_model_haljson = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EnvironmentModel])
                res.environment_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def delete_environment(self, request: operations.DeleteEnvironmentRequest) -> operations.DeleteEnvironmentResponse:
        r"""Delete Environment
        This endpoint removes an Environment identified by the `environmentId` parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/environments/{environmentId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteEnvironmentResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_environment(self, request: operations.GetEnvironmentRequest) -> operations.GetEnvironmentResponse:
        r"""Get Environment
        This endpoint returns the metadata of an Environment 
        identified by the `environmentId`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/environments/{environmentId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEnvironmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EnvironmentModelHaljson])
                res.environment_model_haljson = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EnvironmentModel])
                res.environment_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def get_environments(self, request: operations.GetEnvironmentsRequest) -> operations.GetEnvironmentsResponse:
        r"""List Environments
        This endpoint returns the list of the Environments that belongs to the given Product identified by the
        `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/products/{productId}/environments", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEnvironmentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.EnvironmentModelHaljson]])
                res.environment_model_haljsons = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.EnvironmentModel]])
                res.environment_models = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def update_environment(self, request: operations.UpdateEnvironmentRequest) -> operations.UpdateEnvironmentResponse:
        r"""Update Environment
        This endpoint updates an Environment identified by the `environmentId` parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/environments/{environmentId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateEnvironmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EnvironmentModelHaljson])
                res.environment_model_haljson = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EnvironmentModel])
                res.environment_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    