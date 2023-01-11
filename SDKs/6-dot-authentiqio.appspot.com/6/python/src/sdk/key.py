import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Key:
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

    
    def head_key_pk_(self, request: operations.HeadKeyPkRequest) -> operations.HeadKeyPkResponse:
        r"""HEAD info on Authentiq ID
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/key/{PK}", request.path_params)
        
        
        client = self._client
        
        r = client.request("HEAD", url)
        content_type = r.headers.get("Content-Type")

        res = operations.HeadKeyPkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 410:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
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

    
    def key_register(self, request: operations.KeyRegisterRequest) -> operations.KeyRegisterResponse:
        r"""Register a new ID `JWT(sub, devtoken)`
        
        v5: `JWT(sub, pk, devtoken, ...)`
        
        See: https://github.com/skion/authentiq/wiki/JWT-Examples
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/key"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.KeyRegisterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.KeyRegister201ApplicationJSON])
                res.key_register_201_application_json_object = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def key_retrieve(self, request: operations.KeyRetrieveRequest) -> operations.KeyRetrieveResponse:
        r"""Get public details of an Authentiq ID.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/key/{PK}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.KeyRetrieveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.KeyRetrieveJwt])
                res.jwt = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out
        elif r.status_code == 410:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def key_revoke(self, request: operations.KeyRevokeRequest) -> operations.KeyRevokeResponse:
        r"""Revoke an Identity (Key) with a revocation secret
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/key/{PK}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.KeyRevokeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.KeyRevoke200ApplicationJSON])
                res.key_revoke_200_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def key_revoke_nosecret(self, request: operations.KeyRevokeNosecretRequest) -> operations.KeyRevokeNosecretResponse:
        r"""Revoke an Authentiq ID using email & phone.
        
        If called with `email` and `phone` only, a verification code 
        will be sent by email. Do a second call adding `code` to 
        complete the revocation.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/key"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.KeyRevokeNosecretResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.KeyRevokeNosecret200ApplicationJSON])
                res.key_revoke_nosecret_200_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out
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

    
    def key_update(self, request: operations.KeyUpdateRequest) -> operations.KeyUpdateResponse:
        r"""update properties of an Authentiq ID.
        (not operational in v4; use PUT for now)
        
        v5: POST issuer-signed email & phone scopes in
        a self-signed JWT
        
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
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.KeyUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.KeyUpdate200ApplicationJSON])
                res.key_update_200_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    