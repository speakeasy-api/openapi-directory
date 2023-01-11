import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Project:
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

    
    def get_project_analyses(self, request: operations.GetProjectAnalysesRequest) -> operations.GetProjectAnalysesResponse:
        r"""List all analyses for a project
        List all analyses for a project
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/analyses/{username}/{project_slug}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProjectAnalysesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetProjectAnalyses200ApplicationJSON])
                res.get_project_analyses_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultPayload])
                res.default_payload = out

        return res

    
    def get_project_urls_aggs(self, request: operations.GetProjectUrlsAggsRequest) -> operations.GetProjectUrlsAggsResponse:
        r"""Project Query aggregator
        Project Query aggregator. It accepts multiple queries that will be executed on all completed analyses in the project
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{username}/{project_slug}/urls/aggs", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProjectUrlsAggsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.default = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultPayload])
                res.default_payload = out

        return res

    
    def get_saved_filter(self, request: operations.GetSavedFilterRequest) -> operations.GetSavedFilterResponse:
        r"""Retrieves a specific saved filter's name, ID and filter value
        Retrieves a specific saved filter's name, ID and filter value
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{username}/{project_slug}/filters/{identifier}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSavedFilterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProjectSavedFilter])
                res.project_saved_filter = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultPayload])
                res.default_payload = out

        return res

    
    def get_saved_filters(self, request: operations.GetSavedFiltersRequest) -> operations.GetSavedFiltersResponse:
        r"""List all the project's saved filters (each filter's name, ID and filter value)
        List all the project's saved filters (each filter's name, ID and filter value)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{username}/{project_slug}/filters", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSavedFiltersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSavedFilters200ApplicationJSON])
                res.get_saved_filters_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultPayload])
                res.default_payload = out

        return res

    
    def test_url_rewriting_rules(self, request: operations.TestURLRewritingRulesRequest) -> operations.TestURLRewritingRulesResponse:
        r"""Match and replace parts of a URL based on rules passed in POST data
        Match and replace parts of a URL based on rules passed in POST data.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{username}/{project_slug}/features/url_rewriting/rules_validator", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TestURLRewritingRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.URLRewritingRulesSerializer])
                res.url_rewriting_rules_serializer = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultPayload])
                res.default_payload = out

        return res

    