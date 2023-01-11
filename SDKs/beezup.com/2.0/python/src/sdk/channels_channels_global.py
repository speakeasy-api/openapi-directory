import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class ChannelsChannelsGlobal:
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

    
    def get_available_channels(self, request: operations.GetAvailableChannelsRequest) -> operations.GetAvailableChannelsResponse:
        r"""List all available channel for this store
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/user/channels/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAvailableChannelsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.ChannelHeader]])
                res.channel_headers = out

        return res

    
    def get_channel_categories(self, request: operations.GetChannelCategoriesRequest) -> operations.GetChannelCategoriesResponse:
        r"""Get channel categories
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/user/channels/{channelId}/categories", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChannelCategoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ChannelRootCategory])
                res.channel_root_category = out

        return res

    
    def get_channel_columns(self, request: operations.GetChannelColumnsRequest) -> operations.GetChannelColumnsResponse:
        r"""Get channel columns
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/user/channels/{channelId}/columns", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChannelColumnsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.ChannelColumn]])
                res.channel_columns = out

        return res

    
    def get_channel_info(self, request: operations.GetChannelInfoRequest) -> operations.GetChannelInfoResponse:
        r"""Get channel information
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/user/channels/{channelId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChannelInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ChannelInfo])
                res.channel_info = out

        return res

    