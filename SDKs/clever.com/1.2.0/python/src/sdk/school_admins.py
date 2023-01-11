import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class SchoolAdmins:
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

    
    def get_school_admin(self, request: operations.GetSchoolAdminRequest) -> operations.GetSchoolAdminResponse:
        r"""Returns a specific school admin
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/school_admins/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchoolAdminResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SchoolAdminResponse])
                res.school_admin_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_school_admins(self, request: operations.GetSchoolAdminsRequest) -> operations.GetSchoolAdminsResponse:
        r"""Returns a list of school admins
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/school_admins"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchoolAdminsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SchoolAdminsResponse])
                res.school_admins_response = out

        return res

    
    def get_schools_for_school_admin(self, request: operations.GetSchoolsForSchoolAdminRequest) -> operations.GetSchoolsForSchoolAdminResponse:
        r"""Returns the schools for a school admin
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/school_admins/{id}/schools", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchoolsForSchoolAdminResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SchoolsResponse])
                res.schools_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    