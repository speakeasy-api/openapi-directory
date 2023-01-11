import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class SDKKeys:
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

    
    def get_sdk_keys(self, request: operations.GetSDKKeysRequest) -> operations.GetSDKKeysResponse:
        r"""Get SDK Key
        This endpoint returns the SDK Key for your Config in a specified Environment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/configs/{configId}/environments/{environmentId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSDKKeysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SDKKeysModel])
                res.sdk_keys_model = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SDKKeysModel])
                res.sdk_keys_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    