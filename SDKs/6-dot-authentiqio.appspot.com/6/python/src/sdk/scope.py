import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Scope:
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

    
    def sign_confirm(self, request: operations.SignConfirmRequest) -> operations.SignConfirmResponse:
        r"""this is a scope confirmation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scope/{job}", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SignConfirmResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SignConfirm202ApplicationJSON])
                res.sign_confirm_202_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out
        elif r.status_code == 405:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def sign_delete(self, request: operations.SignDeleteRequest) -> operations.SignDeleteResponse:
        r"""delete a verification job
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scope/{job}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SignDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SignDelete200ApplicationJSON])
                res.sign_delete_200_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def sign_request(self, request: operations.SignRequestRequest) -> operations.SignRequestResponse:
        r"""scope verification request
        See: https://github.com/skion/authentiq/wiki/JWT-Examples
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/scope"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SignRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SignRequest201ApplicationJSON])
                res.sign_request_201_application_json_object = out
        elif r.status_code == 429:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def sign_retrieve(self, request: operations.SignRetrieveRequest) -> operations.SignRetrieveResponse:
        r"""get the status / current content of a verification job
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scope/{job}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SignRetrieveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SignRetrieveJwt])
                res.jwt = out
            if utils.match_content_type(content_type, "application/jwt"):
                res.body = r.content
        elif r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/jwt"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def sign_retrieve_head(self, request: operations.SignRetrieveHeadRequest) -> operations.SignRetrieveHeadResponse:
        r"""HEAD to get the status of a verification job
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scope/{job}", request.path_params)
        
        
        client = self._client
        
        r = client.request("HEAD", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SignRetrieveHeadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def sign_update(self, request: operations.SignUpdateRequest) -> operations.SignUpdateResponse:
        r"""authority updates a JWT with its signature
        See: https://github.com/skion/authentiq/wiki/JWT-Examples
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scope/{job}", request.path_params)
        
        
        client = self._client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SignUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/jwt"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/jwt"):
                res.body = r.content
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/jwt"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    