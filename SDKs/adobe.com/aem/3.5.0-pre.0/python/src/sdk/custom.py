import requests
from sdk.models import operations
from . import utils

class Custom:
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

    
    def get_aem_health_check(self, request: operations.GetAemHealthCheckRequest) -> operations.GetAemHealthCheckResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/system/health"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAemHealthCheckResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                res.get_aem_health_check_default_application_json_string = r.content

        return res

    
    def post_config_aem_health_check_servlet(self, request: operations.PostConfigAemHealthCheckServletRequest) -> operations.PostConfigAemHealthCheckServletResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/apps/system/config/com.shinesolutions.healthcheck.hc.impl.ActiveBundleHealthCheck"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostConfigAemHealthCheckServletResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_config_aem_password_reset(self, request: operations.PostConfigAemPasswordResetRequest) -> operations.PostConfigAemPasswordResetResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/apps/system/config/com.shinesolutions.aem.passwordreset.Activator"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostConfigAemPasswordResetResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    