import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Products:
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

    
    def get_v3_products(self, request: operations.GetV3ProductsRequest) -> operations.GetV3ProductsResponse:
        r"""Get Products
        This endpoint returns all products available to the username used during authentication. As such, this endpoint requires the use of
        a fully authorized access_token. The product data can then be used as search filters, restricting results to images from a specific product.
        
        You'll need an API key and access token to use this resource.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/products"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV3ProductsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProductsResult])
                res.products_result = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    