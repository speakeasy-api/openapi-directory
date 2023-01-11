import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Districts:
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

    
    def get_admins_for_district(self, request: operations.GetAdminsForDistrictRequest) -> operations.GetAdminsForDistrictResponse:
        r"""Returns the admins for a district
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/districts/{id}/admins", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAdminsForDistrictResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DistrictAdminsResponse])
                res.district_admins_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_district(self, request: operations.GetDistrictRequest) -> operations.GetDistrictResponse:
        r"""Returns a specific district
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/districts/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDistrictResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DistrictResponse])
                res.district_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_district_status(self, request: operations.GetDistrictStatusRequest) -> operations.GetDistrictStatusResponse:
        r"""Returns the status of the district
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/districts/{id}/status", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDistrictStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DistrictStatusResponses])
                res.district_status_responses = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_districts(self) -> operations.GetDistrictsResponse:
        r"""Returns a list of districts
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/districts"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDistrictsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DistrictsResponse])
                res.districts_response = out

        return res

    
    def get_schools_for_district(self, request: operations.GetSchoolsForDistrictRequest) -> operations.GetSchoolsForDistrictResponse:
        r"""Returns the schools for a district
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/districts/{id}/schools", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSchoolsForDistrictResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SchoolsResponse])
                res.schools_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_sections_for_district(self, request: operations.GetSectionsForDistrictRequest) -> operations.GetSectionsForDistrictResponse:
        r"""Returns the sections for a district
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/districts/{id}/sections", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSectionsForDistrictResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SectionsResponse])
                res.sections_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_students_for_district(self, request: operations.GetStudentsForDistrictRequest) -> operations.GetStudentsForDistrictResponse:
        r"""Returns the students for a district
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/districts/{id}/students", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStudentsForDistrictResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StudentsResponse])
                res.students_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    
    def get_teachers_for_district(self, request: operations.GetTeachersForDistrictRequest) -> operations.GetTeachersForDistrictResponse:
        r"""Returns the teachers for a district
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/districts/{id}/teachers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeachersForDistrictResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeachersResponse])
                res.teachers_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFound])
                res.not_found = out

        return res

    