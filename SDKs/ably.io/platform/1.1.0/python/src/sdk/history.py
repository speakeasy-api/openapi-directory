import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class History:
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

    
    def get_messages_by_channel(self, request: operations.GetMessagesByChannelRequest) -> operations.GetMessagesByChannelResponse:
        r"""Get message history for a channel
        Get message history for a channel
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/channels/{channel_id}/messages", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMessagesByChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code >= 200 and r.status_code < 300:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Message]])
                res.messages = out
            if utils.match_content_type(content_type, "application/x-msgpack"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.get_messages_by_channel_2_xx_text_html_string = r.content
        else:
            pass

        return res

    
    def get_presence_history_of_channel(self, request: operations.GetPresenceHistoryOfChannelRequest) -> operations.GetPresenceHistoryOfChannelResponse:
        r"""Get presence history of a channel
        Get presence on a channel
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/channels/{channel_id}/presence/history", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPresenceHistoryOfChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code >= 200 and r.status_code < 300:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.PresenceMessage]])
                res.presence_messages = out
            if utils.match_content_type(content_type, "application/x-msgpack"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.get_presence_history_of_channel_2_xx_text_html_string = r.content
        else:
            if utils.match_content_type(content_type, "application/x-msgpack"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    