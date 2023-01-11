import requests
from sdk.models import operations
from . import utils

class Cq:
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

    
    def get_login_page(self) -> operations.GetLoginPageResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/libs/granite/core/content/login.html"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLoginPageResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "text/html"):
                res.get_login_page_default_text_html_string = r.content

        return res

    
    def post_cq_actions(self, request: operations.PostCqActionsRequest) -> operations.PostCqActionsResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/.cqactions.html"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCqActionsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    