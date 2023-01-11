import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Stats:
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

    
    def get_stats(self, request: operations.GetStatsRequest) -> operations.GetStatsResponse:
        r"""Retrieve usage statistics for an application
        The Ably system can be queried to obtain usage statistics for a given application, and results are provided aggregated across all channels in use in the application in the specified period. Stats may be used to track usage against account quotas.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/stats"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_stats_2_xx_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
            if utils.match_content_type(content_type, "application/x-msgpack"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content

        return res

    
    def get_time(self, request: operations.GetTimeRequest) -> operations.GetTimeResponse:
        r"""Get the service time
        This returns the service time in milliseconds since the epoch.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/time"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTimeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code >= 200 and r.status_code < 300:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[int]])
                res.get_time_2_xx_application_json_integers = out
            if utils.match_content_type(content_type, "application/x-msgpack"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.get_time_2_xx_text_html_string = r.content
        else:
            if utils.match_content_type(content_type, "application/x-msgpack"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    