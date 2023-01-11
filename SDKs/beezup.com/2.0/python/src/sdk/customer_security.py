import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class CustomerSecurity:
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

    
    def logout(self) -> operations.LogoutResponse:
        r"""Log out the current user from go2
        Log out the current user from go2
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/user/customer/security/logout"
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LogoutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BeezUpCommonErrorResponseMessage])
                res.beez_up_common_error_response_message = out

        return res

    
    def zendesk_token(self) -> operations.ZendeskTokenResponse:
        r"""Zendesk token
        Zendesk token - Generates a JWT token to access BeezUP restricted Help Center in SSO as described here: https://support.zendesk.com/hc/en-us/articles/222874768-Using-restricted-Help-Center-content-with-the-Web-Widget
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/user/customer/zendeskToken"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ZendeskTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ZendeskToken])
                res.zendesk_token = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BeezUpCommonErrorResponseMessage])
                res.beez_up_common_error_response_message = out

        return res

    