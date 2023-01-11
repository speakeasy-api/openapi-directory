import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Product:
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

    
    def get_product(self, request: operations.GetProductRequest) -> operations.GetProductResponse:
        r"""This call retrieves details of the catalog product identified by the eBay product identifier (ePID) specified in the request. These details include the product's title and description, aspects and their values, associated images, applicable category IDs, and any recognized identifiers that apply to the product. For a new listing, you can use the search call to identify candidate products on which to base the listing, then use the getProduct call to present the full details of those candidate products to the seller to make a a final selection.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/product/{epid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Product])
                res.product = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    