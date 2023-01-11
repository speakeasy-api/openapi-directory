import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Purchases:
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

    
    def get_v3_purchased_assets(self, request: operations.GetV3PurchasedAssetsRequest) -> operations.GetV3PurchasedAssetsResponse:
        r"""Get Previously Purchased Images and Video
        This endpoint returns a list of all assets purchased on gettyimages.com by the username used for authentication. 
        Use of this endpoint requires configuration changes to your API key. Please contact your sales representative
        to learn more.
        
        You'll need an API key and access token to use this resource.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/purchased-assets"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3PurchasedAssetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PreviousAssetPurchases])
                res.previous_asset_purchases = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass

        return res

    