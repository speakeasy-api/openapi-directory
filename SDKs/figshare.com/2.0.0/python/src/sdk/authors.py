import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Authors:
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

    
    def private_author_details(self, request: operations.PrivateAuthorDetailsRequest) -> operations.PrivateAuthorDetailsResponse:
        r"""Author details
        View author details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/authors/{author_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateAuthorDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuthorComplete])
                res.author_complete = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_authors_search(self, request: operations.PrivateAuthorsSearchRequest) -> operations.PrivateAuthorsSearchResponse:
        r"""Search Authors
        Search for authors
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/authors/search"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateAuthorsSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Author]])
                res.authors = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 500:
            pass

        return res

    