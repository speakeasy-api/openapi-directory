import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Sling:
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

    
    def delete_agent(self, request: operations.DeleteAgentRequest) -> operations.DeleteAgentResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/etc/replication/agents.{runmode}/{name}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAgentResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def delete_node(self, request: operations.DeleteNodeRequest) -> operations.DeleteNodeResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{path}/{name}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNodeResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_agent(self, request: operations.GetAgentRequest) -> operations.GetAgentResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/etc/replication/agents.{runmode}/{name}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAgentResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_agents(self, request: operations.GetAgentsRequest) -> operations.GetAgentsResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/etc/replication/agents.{runmode}.-1.json", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAgentsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                res.get_agents_default_application_json_string = r.content

        return res

    
    def get_authorizable_keystore(self, request: operations.GetAuthorizableKeystoreRequest) -> operations.GetAuthorizableKeystoreResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{intermediatePath}/{authorizableId}.ks.json", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAuthorizableKeystoreResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.keystore_info = r.content
        else:
            if utils.match_content_type(content_type, "text/plain"):
                res.get_authorizable_keystore_default_text_plain_string = r.content

        return res

    
    def get_keystore(self, request: operations.GetKeystoreRequest) -> operations.GetKeystoreResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{intermediatePath}/{authorizableId}/keystore/store.p12", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetKeystoreResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.get_keystore_default_application_octet_stream_binary_string = r.content

        return res

    
    def get_node(self, request: operations.GetNodeRequest) -> operations.GetNodeResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{path}/{name}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNodeResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_package(self, request: operations.GetPackageRequest) -> operations.GetPackageResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/etc/packages/{group}/{name}-{version}.zip", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPackageResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.get_package_default_application_octet_stream_binary_string = r.content

        return res

    
    def get_package_filter(self, request: operations.GetPackageFilterRequest) -> operations.GetPackageFilterResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/etc/packages/{group}/{name}-{version}.zip/jcr:content/vlt:definition/filter.tidy.2.json", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPackageFilterResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                res.get_package_filter_default_application_json_string = r.content

        return res

    
    def get_query(self, request: operations.GetQueryRequest) -> operations.GetQueryResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/bin/querybuilder.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQueryResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                res.get_query_default_application_json_string = r.content

        return res

    
    def get_truststore(self) -> operations.GetTruststoreResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/etc/truststore/truststore.p12"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTruststoreResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.get_truststore_default_application_octet_stream_binary_string = r.content

        return res

    
    def get_truststore_info(self) -> operations.GetTruststoreInfoResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/libs/granite/security/truststore.json"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTruststoreInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TruststoreInfo])
                res.truststore_info = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                res.get_truststore_info_default_application_json_string = r.content

        return res

    
    def post_agent(self, request: operations.PostAgentRequest) -> operations.PostAgentResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/etc/replication/agents.{runmode}/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAgentResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_authorizable_keystore(self, request: operations.PostAuthorizableKeystoreRequest) -> operations.PostAuthorizableKeystoreResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{intermediatePath}/{authorizableId}.ks.html", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAuthorizableKeystoreResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.keystore_info = r.content
        else:
            if utils.match_content_type(content_type, "text/plain"):
                res.post_authorizable_keystore_default_text_plain_string = r.content

        return res

    
    def post_authorizables(self, request: operations.PostAuthorizablesRequest) -> operations.PostAuthorizablesResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/libs/granite/security/post/authorizables"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAuthorizablesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "text/html"):
                res.post_authorizables_default_text_html_string = r.content

        return res

    
    def post_config_adobe_granite_saml_authentication_handler(self, request: operations.PostConfigAdobeGraniteSamlAuthenticationHandlerRequest) -> operations.PostConfigAdobeGraniteSamlAuthenticationHandlerResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/apps/system/config/com.adobe.granite.auth.saml.SamlAuthenticationHandler.config"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostConfigAdobeGraniteSamlAuthenticationHandlerResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_config_apache_felix_jetty_based_http_service(self, request: operations.PostConfigApacheFelixJettyBasedHTTPServiceRequest) -> operations.PostConfigApacheFelixJettyBasedHTTPServiceResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/apps/system/config/org.apache.felix.http"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostConfigApacheFelixJettyBasedHTTPServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_config_apache_http_components_proxy_configuration(self, request: operations.PostConfigApacheHTTPComponentsProxyConfigurationRequest) -> operations.PostConfigApacheHTTPComponentsProxyConfigurationResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/apps/system/config/org.apache.http.proxyconfigurator.config"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostConfigApacheHTTPComponentsProxyConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_config_apache_sling_dav_ex_servlet(self, request: operations.PostConfigApacheSlingDavExServletRequest) -> operations.PostConfigApacheSlingDavExServletResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/apps/system/config/org.apache.sling.jcr.davex.impl.servlets.SlingDavExServlet"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostConfigApacheSlingDavExServletResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_config_apache_sling_get_servlet(self, request: operations.PostConfigApacheSlingGetServletRequest) -> operations.PostConfigApacheSlingGetServletResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/apps/system/config/org.apache.sling.servlets.get.DefaultGetServlet"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostConfigApacheSlingGetServletResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_config_apache_sling_referrer_filter(self, request: operations.PostConfigApacheSlingReferrerFilterRequest) -> operations.PostConfigApacheSlingReferrerFilterResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/apps/system/config/org.apache.sling.security.impl.ReferrerFilter"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostConfigApacheSlingReferrerFilterResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_config_property(self, request: operations.PostConfigPropertyRequest) -> operations.PostConfigPropertyResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apps/system/config/{configNodeName}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostConfigPropertyResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_node(self, request: operations.PostNodeRequest) -> operations.PostNodeResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{path}/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostNodeResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_node_rw(self, request: operations.PostNodeRwRequest) -> operations.PostNodeRwResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{path}/{name}.rw.html", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostNodeRwResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_path(self, request: operations.PostPathRequest) -> operations.PostPathResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{path}/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPathResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_query(self, request: operations.PostQueryRequest) -> operations.PostQueryResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/bin/querybuilder.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostQueryResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                res.post_query_default_application_json_string = r.content

        return res

    
    def post_tree_activation(self, request: operations.PostTreeActivationRequest) -> operations.PostTreeActivationResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/etc/replication/treeactivation.html"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTreeActivationResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def post_truststore(self, request: operations.PostTruststoreRequest) -> operations.PostTruststoreResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/libs/granite/security/post/truststore"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTruststoreResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "text/plain"):
                res.post_truststore_default_text_plain_string = r.content

        return res

    
    def post_truststore_pkcs12(self, request: operations.PostTruststorePkcs12Request) -> operations.PostTruststorePkcs12Response:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/etc/truststore"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTruststorePkcs12Response(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "text/plain"):
                res.post_truststore_pkcs12_default_text_plain_string = r.content

        return res

    