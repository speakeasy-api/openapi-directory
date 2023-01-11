import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class ChannelCatalogsExportations:
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

    
    def clear_channel_catalog_exportation_cache(self, request: operations.ClearChannelCatalogExportationCacheRequest) -> operations.ClearChannelCatalogExportationCacheResponse:
        r"""Clear the exportation cache
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/user/channelCatalogs/{channelCatalogId}/exportations/cache/clear", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ClearChannelCatalogExportationCacheResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_channel_catalog_exportation_cache_info(self, request: operations.GetChannelCatalogExportationCacheInfoRequest) -> operations.GetChannelCatalogExportationCacheInfoResponse:
        r"""Get the exportation cache information
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/user/channelCatalogs/{channelCatalogId}/exportations/cache", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChannelCatalogExportationCacheInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ChannelCatalogExportCacheInfoResponse])
                res.channel_catalog_export_cache_info_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BeezUpCommonErrorResponseMessage])
                res.beez_up_common_error_response_message = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BeezUpCommonErrorResponseMessage])
                res.beez_up_common_error_response_message = out

        return res

    
    def get_channel_catalog_exportation_history(self, request: operations.GetChannelCatalogExportationHistoryRequest) -> operations.GetChannelCatalogExportationHistoryResponse:
        r"""Get the exportation history
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/user/channelCatalogs/{channelCatalogId}/exportations/history", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChannelCatalogExportationHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ChannelCatalogExportationHistory])
                res.channel_catalog_exportation_history = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BeezUpCommonErrorResponseMessage])
                res.beez_up_common_error_response_message = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BeezUpCommonErrorResponseMessage])
                res.beez_up_common_error_response_message = out

        return res

    