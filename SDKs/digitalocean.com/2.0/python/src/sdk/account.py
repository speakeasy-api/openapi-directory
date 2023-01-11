import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Account:
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

    
    def get_user_information(self) -> operations.GetUserInformationResponse:
        r"""Get User Information
        To show information about the current user account, send a GET request to `/v2/account`.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/account"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserInformationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_user_information_200_application_json_any = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetUserInformation401ApplicationJSON])
                res.get_user_information_401_application_json_object = out
        elif r.status_code == 429:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out
        else:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out

        return res

    