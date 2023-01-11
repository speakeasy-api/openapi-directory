import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Crx:
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

    
    def get_crxde_status(self) -> operations.GetCrxdeStatusResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crx/server/crx.default/jcr:root/.1.json"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCrxdeStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "plain/text"):
                res.get_crxde_status_200_plain_text_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "plain/text"):
                res.get_crxde_status_404_plain_text_string = r.content

        return res

    
    def get_install_status(self) -> operations.GetInstallStatusResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crx/packmgr/installstatus.jsp"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInstallStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InstallStatus])
                res.install_status = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                res.get_install_status_default_application_json_string = r.content

        return res

    
    def get_package_manager_servlet(self) -> operations.GetPackageManagerServletResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crx/packmgr/service/script.html"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPackageManagerServletResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 404:
            if utils.match_content_type(content_type, "text/html"):
                res.get_package_manager_servlet_404_text_html_string = r.content
        elif r.status_code == 405:
            if utils.match_content_type(content_type, "text/html"):
                res.get_package_manager_servlet_405_text_html_string = r.content

        return res

    
    def post_package_service(self, request: operations.PostPackageServiceRequest) -> operations.PostPackageServiceResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crx/packmgr/service.jsp"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPackageServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "text/xml"):
                res.post_package_service_default_text_xml_string = r.content

        return res

    
    def post_package_service_json(self, request: operations.PostPackageServiceJSONRequest) -> operations.PostPackageServiceJSONResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/crx/packmgr/service/.json/{path}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPackageServiceJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                res.post_package_service_json_default_application_json_string = r.content

        return res

    
    def post_package_update(self, request: operations.PostPackageUpdateRequest) -> operations.PostPackageUpdateResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crx/packmgr/update.jsp"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPackageUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                res.post_package_update_default_application_json_string = r.content

        return res

    
    def post_set_password(self, request: operations.PostSetPasswordRequest) -> operations.PostSetPasswordResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/crx/explorer/ui/setpassword.jsp"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetPasswordResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "text/plain"):
                res.post_set_password_default_text_plain_string = r.content

        return res

    