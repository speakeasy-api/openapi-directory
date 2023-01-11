import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Me:
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

    
    def disconnect_vendor(self, request: operations.DisconnectVendorRequest) -> operations.DisconnectVendorResponse:
        r"""Disconnect Vendor
        Disconnect a single Vendor from the User's account.
        
        All stored data about their Vendor account will be deleted, and any vehicles that were provided by that Vendor will disappear from the system.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/me/vendors/{vendor}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DisconnectVendorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_me(self, request: operations.GetMeRequest) -> operations.GetMeResponse:
        r"""Get My User
        Returns metadata about the authenticated User, including a list of vendors for which the user has provided credentials.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/me"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetMe200ApplicationJSON])
                res.get_me_200_application_json_object = out

        return res

    