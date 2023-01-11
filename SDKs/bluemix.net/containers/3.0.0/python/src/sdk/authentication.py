import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Authentication:
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

    
    def get_tlskey(self, request: operations.GetTlskeyRequest) -> operations.GetTlskeyResponse:
        r"""Retrieve the TLS Certificate
        This endpoint returns the TLS (Transport Layer Security) certificate to the user (corresponding IBM Containers command: `cf ic login`). The TLS certificate is a SSL certificate that is used to authenticate the user's CLI with the IBM Containers service and to establish a secure communication between the user's local machine and the container in Bluemix.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tlskey"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTlskeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Certificate])
                res.certificate = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def put_tlskey_refresh(self, request: operations.PutTlskeyRefreshRequest) -> operations.PutTlskeyRefreshResponse:
        r"""Refresh the TLS Certificate
        This endpoint requests to generate a new TLS (Transport Layer Security) certificate on the server and to update the existing user TLS certificate (corresponding IBM Containers command: `cf ic init`).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tlskey/refresh"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("PUT", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutTlskeyRefreshResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.certificate_refresh = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    