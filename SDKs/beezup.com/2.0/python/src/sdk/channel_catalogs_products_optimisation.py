import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class ChannelCatalogsProductsOptimisation:
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

    
    def disable_channel_catalog_product(self, request: operations.DisableChannelCatalogProductRequest) -> operations.DisableChannelCatalogProductResponse:
        r"""Disable channel catalog product
        By default a all your catalog products are exposed to the channel.
        You can disable a product by using this operation.
        /!\ In case of massive optimisation we recommand you to use the analytics api
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/user/channelCatalogs/{channelCatalogId}/products/{productId}/disable", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DisableChannelCatalogProductResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BeezUpCommonErrorResponseMessage])
                res.beez_up_common_error_response_message = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BeezUpCommonErrorResponseMessage])
                res.beez_up_common_error_response_message = out

        return res

    
    def reenable_channel_catalog_product(self, request: operations.ReenableChannelCatalogProductRequest) -> operations.ReenableChannelCatalogProductResponse:
        r"""Reenable channel catalog product
        By default a all your catalog products are exposed to the channel.
        You can reenable a product by using this operation.
        /!\ In case of massive optimisation we recommand you to use the analytics api
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/user/channelCatalogs/{channelCatalogId}/products/{productId}/reenable", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReenableChannelCatalogProductResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BeezUpCommonErrorResponseMessage])
                res.beez_up_common_error_response_message = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BeezUpCommonErrorResponseMessage])
                res.beez_up_common_error_response_message = out

        return res

    