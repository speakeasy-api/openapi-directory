import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class ChannelCatalogsLegacyTrackingGlobal:
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

    
    def get_legacy_tracking_channel_catalog(self, request: operations.GetLegacyTrackingChannelCatalogRequest) -> operations.GetLegacyTrackingChannelCatalogResponse:
        r"""Get the channel catalog configured to use legacy tracking format information
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/user/legacyTracking/channelCatalogs/{channelCatalogId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLegacyTrackingChannelCatalogResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyTrackingChannelCatalog])
                res.legacy_tracking_channel_catalog = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BeezUpCommonErrorResponseMessage])
                res.beez_up_common_error_response_message = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BeezUpCommonErrorResponseMessage])
                res.beez_up_common_error_response_message = out

        return res

    
    def get_legacy_tracking_channel_catalogs(self, request: operations.GetLegacyTrackingChannelCatalogsRequest) -> operations.GetLegacyTrackingChannelCatalogsResponse:
        r"""List all your current channel catalogs configured to use legacy tracking format
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/user/legacyTracking/channelCatalogs/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLegacyTrackingChannelCatalogsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LegacyTrackingChannelCatalogList])
                res.legacy_tracking_channel_catalog_list = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BeezUpCommonErrorResponseMessage])
                res.beez_up_common_error_response_message = out

        return res

    
    def migrate_legacy_tracking_channel_catalog(self, request: operations.MigrateLegacyTrackingChannelCatalogRequest) -> operations.MigrateLegacyTrackingChannelCatalogResponse:
        r"""Migrate a channel catalog to current tracking format
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/user/legacyTracking/channelCatalogs/{channelCatalogId}/migrate", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MigrateLegacyTrackingChannelCatalogResponse(status_code=r.status_code, content_type=content_type)
        
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

    