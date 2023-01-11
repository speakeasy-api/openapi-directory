import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Verse:
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

    
    def get_api_v1_chapters_chapter_number_verses(self, request: operations.GetAPIV1ChaptersChapterNumberVersesRequest) -> operations.GetAPIV1ChaptersChapterNumberVersesResponse:
        r"""Get all the Verses from a Chapter.
        Get a list of all Verses from a particular Chapter.<br/>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/chapters/{chapter_number}/verses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1ChaptersChapterNumberVersesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerseSchema])
                res.verse_schema = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_api_v1_chapters_chapter_number_verses_verse_number_(self, request: operations.GetAPIV1ChaptersChapterNumberVersesVerseNumberRequest) -> operations.GetAPIV1ChaptersChapterNumberVersesVerseNumberResponse:
        r"""Get a particular verse from a chapter.
        Get a specific verse from a specific chapter.<br/>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/chapters/{chapter_number}/verses/{verse_number}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1ChaptersChapterNumberVersesVerseNumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerseSchema])
                res.verse_schema = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_api_v1_verses(self, request: operations.GetAPIV1VersesRequest) -> operations.GetAPIV1VersesResponse:
        r"""Get all the Verses.
        Get a list of all Verses.<br/>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/verses"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV1VersesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerseSchema])
                res.verse_schema = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 500:
            pass

        return res

    