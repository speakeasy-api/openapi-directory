"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

import requests as requests_http
from . import utils
from sdk.models import operations

class Translation:
    r"""Translate to Shakespeare English
    http://fungenerators.com/api/shakespeare/ - Find out more
    """
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
        
    def get_shakespeare_translate(self, request: operations.GetShakespeareTranslateRequest, security: operations.GetShakespeareTranslateSecurity) -> operations.GetShakespeareTranslateResponse:
        r"""Translate from English to Shakespeare English."""
        base_url = self._server_url
        
        url = base_url.removesuffix('/') + '/shakespeare/translate'
        
        query_params = utils.get_query_params(operations.GetShakespeareTranslateRequest, request)
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetShakespeareTranslateResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        

        return res

    