import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Console:
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

    
    def get_aem_product_info(self) -> operations.GetAemProductInfoResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/system/console/status-productinfo.json"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAemProductInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.get_aem_product_info_default_application_json_strings = out

        return res

    
    def get_config_mgr(self) -> operations.GetConfigMgrResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/system/console/configMgr"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConfigMgrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/xml"):
                res.get_config_mgr_200_text_xml_string = r.content
        elif r.status_code >= 500 and r.status_code < 600:
            pass

        return res

    
    def post_bundle(self, request: operations.PostBundleRequest) -> operations.PostBundleResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/system/console/bundles/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostBundleResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_jmx_repository(self, request: operations.PostJmxRepositoryRequest) -> operations.PostJmxRepositoryResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/system/console/jmx/com.adobe.granite:type=Repository/op/{action}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostJmxRepositoryResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_saml_configuration(self, request: operations.PostSamlConfigurationRequest) -> operations.PostSamlConfigurationResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/system/console/configMgr/com.adobe.granite.auth.saml.SamlAuthenticationHandler"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSamlConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.saml_configuration_info = r.content
        elif r.status_code == 302:
            if utils.match_content_type(content_type, "text/plain"):
                res.post_saml_configuration_302_text_plain_string = r.content
        else:
            if utils.match_content_type(content_type, "text/plain"):
                res.post_saml_configuration_default_text_plain_string = r.content

        return res

    