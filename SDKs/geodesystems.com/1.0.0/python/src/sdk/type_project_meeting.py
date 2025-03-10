"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

import requests as requests_http
from . import utils
from sdk.models import operations

class TypeProjectMeeting:
    r"""Search API for 'Meeting' entry type"""
    _client: requests_http.Session
    _security_client: requests_http.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests_http.Session, security_client: requests_http.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version
        
    def search_project_meeting(self, request: operations.SearchProjectMeetingRequest) -> operations.SearchProjectMeetingResponse:
        r"""Search API for 'Meeting' entry type
        API to search for entries of type Meeting
        """
        base_url = self._server_url
        
        url = base_url.removesuffix('/') + '/repository/search/type/project_meeting'
        
        query_params = utils.get_query_params(operations.SearchProjectMeetingRequest, request)
        
        client = self._client
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.SearchProjectMeetingResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        

        return res

    