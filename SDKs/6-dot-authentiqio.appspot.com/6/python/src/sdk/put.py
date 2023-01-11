import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Put:
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

    
    def key_bind(self, request: operations.KeyBindRequest) -> operations.KeyBindResponse:
        r"""Update Authentiq ID by replacing the object.
        
        v4: `JWT(sub,email,phone)` to bind email/phone hash; 
        
        v5: POST issuer-signed email & phone scopes
        and PUT to update registration `JWT(sub, pk, devtoken, ...)`
        
        See: https://github.com/skion/authentiq/wiki/JWT-Examples
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/key/{PK}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.KeyBindResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.KeyBind200ApplicationJSON])
                res.key_bind_200_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out
        elif r.status_code == 409:
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

    