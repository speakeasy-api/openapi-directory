package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Sling {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Sling(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    public openapisdk.models.operations.DeleteAgentResponse deleteAgent(openapisdk.models.operations.DeleteAgentRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/etc/replication/agents.{runmode}/{name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteAgentResponse res = new openapisdk.models.operations.DeleteAgentResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteNodeResponse deleteNode(openapisdk.models.operations.DeleteNodeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{path}/{name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteNodeResponse res = new openapisdk.models.operations.DeleteNodeResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.GetAgentResponse getAgent(openapisdk.models.operations.GetAgentRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/etc/replication/agents.{runmode}/{name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetAgentResponse res = new openapisdk.models.operations.GetAgentResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.GetAgentsResponse getAgents(openapisdk.models.operations.GetAgentsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/etc/replication/agents.{runmode}.-1.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetAgentsResponse res = new openapisdk.models.operations.GetAgentsResponse() {{
            getAgentsDefaultApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.getAgentsDefaultApplicationJSONString = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.GetAuthorizableKeystoreResponse getAuthorizableKeystore(openapisdk.models.operations.GetAuthorizableKeystoreRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{intermediatePath}/{authorizableId}.ks.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetAuthorizableKeystoreResponse res = new openapisdk.models.operations.GetAuthorizableKeystoreResponse() {{
            keystoreInfo = null;
            getAuthorizableKeystoreDefaultTextPlainString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/plain")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.keystoreInfo = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/plain")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.getAuthorizableKeystoreDefaultTextPlainString = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.GetKeystoreResponse getKeystore(openapisdk.models.operations.GetKeystoreRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{intermediatePath}/{authorizableId}/keystore/store.p12", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetKeystoreResponse res = new openapisdk.models.operations.GetKeystoreResponse() {{
            getKeystoreDefaultApplicationOctetStreamBinaryString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/octet-stream")) {
                byte[] out = httpRes.body();
                res.getKeystoreDefaultApplicationOctetStreamBinaryString = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.GetNodeResponse getNode(openapisdk.models.operations.GetNodeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{path}/{name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNodeResponse res = new openapisdk.models.operations.GetNodeResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.GetPackageResponse getPackage(openapisdk.models.operations.GetPackageRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/etc/packages/{group}/{name}-{version}.zip", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetPackageResponse res = new openapisdk.models.operations.GetPackageResponse() {{
            getPackageDefaultApplicationOctetStreamBinaryString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/octet-stream")) {
                byte[] out = httpRes.body();
                res.getPackageDefaultApplicationOctetStreamBinaryString = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.GetPackageFilterResponse getPackageFilter(openapisdk.models.operations.GetPackageFilterRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/etc/packages/{group}/{name}-{version}.zip/jcr:content/vlt:definition/filter.tidy.2.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetPackageFilterResponse res = new openapisdk.models.operations.GetPackageFilterResponse() {{
            getPackageFilterDefaultApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.getPackageFilterDefaultApplicationJSONString = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.GetQueryResponse getQuery(openapisdk.models.operations.GetQueryRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bin/querybuilder.json");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetQueryResponse res = new openapisdk.models.operations.GetQueryResponse() {{
            getQueryDefaultApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.getQueryDefaultApplicationJSONString = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.GetTruststoreResponse getTruststore() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/etc/truststore/truststore.p12");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTruststoreResponse res = new openapisdk.models.operations.GetTruststoreResponse() {{
            getTruststoreDefaultApplicationOctetStreamBinaryString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/octet-stream")) {
                byte[] out = httpRes.body();
                res.getTruststoreDefaultApplicationOctetStreamBinaryString = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.GetTruststoreInfoResponse getTruststoreInfo() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/libs/granite/security/truststore.json");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTruststoreInfoResponse res = new openapisdk.models.operations.GetTruststoreInfoResponse() {{
            truststoreInfo = null;
            getTruststoreInfoDefaultApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TruststoreInfo out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TruststoreInfo.class);
                res.truststoreInfo = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.getTruststoreInfoDefaultApplicationJSONString = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.PostAgentResponse postAgent(openapisdk.models.operations.PostAgentRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/etc/replication/agents.{runmode}/{name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostAgentResponse res = new openapisdk.models.operations.PostAgentResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.PostAuthorizableKeystoreResponse postAuthorizableKeystore(openapisdk.models.operations.PostAuthorizableKeystoreRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{intermediatePath}/{authorizableId}.ks.html", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostAuthorizableKeystoreResponse res = new openapisdk.models.operations.PostAuthorizableKeystoreResponse() {{
            keystoreInfo = null;
            postAuthorizableKeystoreDefaultTextPlainString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/plain")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.keystoreInfo = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/plain")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.postAuthorizableKeystoreDefaultTextPlainString = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.PostAuthorizablesResponse postAuthorizables(openapisdk.models.operations.PostAuthorizablesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/libs/granite/security/post/authorizables");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostAuthorizablesResponse res = new openapisdk.models.operations.PostAuthorizablesResponse() {{
            postAuthorizablesDefaultTextHTMLString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/html")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.postAuthorizablesDefaultTextHTMLString = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.PostConfigAdobeGraniteSamlAuthenticationHandlerResponse postConfigAdobeGraniteSamlAuthenticationHandler(openapisdk.models.operations.PostConfigAdobeGraniteSamlAuthenticationHandlerRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/apps/system/config/com.adobe.granite.auth.saml.SamlAuthenticationHandler.config");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostConfigAdobeGraniteSamlAuthenticationHandlerResponse res = new openapisdk.models.operations.PostConfigAdobeGraniteSamlAuthenticationHandlerResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.PostConfigApacheFelixJettyBasedHttpServiceResponse postConfigApacheFelixJettyBasedHttpService(openapisdk.models.operations.PostConfigApacheFelixJettyBasedHttpServiceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/apps/system/config/org.apache.felix.http");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostConfigApacheFelixJettyBasedHttpServiceResponse res = new openapisdk.models.operations.PostConfigApacheFelixJettyBasedHttpServiceResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.PostConfigApacheHttpComponentsProxyConfigurationResponse postConfigApacheHttpComponentsProxyConfiguration(openapisdk.models.operations.PostConfigApacheHttpComponentsProxyConfigurationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/apps/system/config/org.apache.http.proxyconfigurator.config");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostConfigApacheHttpComponentsProxyConfigurationResponse res = new openapisdk.models.operations.PostConfigApacheHttpComponentsProxyConfigurationResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.PostConfigApacheSlingDavExServletResponse postConfigApacheSlingDavExServlet(openapisdk.models.operations.PostConfigApacheSlingDavExServletRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/apps/system/config/org.apache.sling.jcr.davex.impl.servlets.SlingDavExServlet");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostConfigApacheSlingDavExServletResponse res = new openapisdk.models.operations.PostConfigApacheSlingDavExServletResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.PostConfigApacheSlingGetServletResponse postConfigApacheSlingGetServlet(openapisdk.models.operations.PostConfigApacheSlingGetServletRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/apps/system/config/org.apache.sling.servlets.get.DefaultGetServlet");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostConfigApacheSlingGetServletResponse res = new openapisdk.models.operations.PostConfigApacheSlingGetServletResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.PostConfigApacheSlingReferrerFilterResponse postConfigApacheSlingReferrerFilter(openapisdk.models.operations.PostConfigApacheSlingReferrerFilterRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/apps/system/config/org.apache.sling.security.impl.ReferrerFilter");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostConfigApacheSlingReferrerFilterResponse res = new openapisdk.models.operations.PostConfigApacheSlingReferrerFilterResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.PostConfigPropertyResponse postConfigProperty(openapisdk.models.operations.PostConfigPropertyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/apps/system/config/{configNodeName}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostConfigPropertyResponse res = new openapisdk.models.operations.PostConfigPropertyResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.PostNodeResponse postNode(openapisdk.models.operations.PostNodeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{path}/{name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostNodeResponse res = new openapisdk.models.operations.PostNodeResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.PostNodeRwResponse postNodeRw(openapisdk.models.operations.PostNodeRwRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{path}/{name}.rw.html", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostNodeRwResponse res = new openapisdk.models.operations.PostNodeRwResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.PostPathResponse postPath(openapisdk.models.operations.PostPathRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{path}/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostPathResponse res = new openapisdk.models.operations.PostPathResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.PostQueryResponse postQuery(openapisdk.models.operations.PostQueryRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bin/querybuilder.json");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostQueryResponse res = new openapisdk.models.operations.PostQueryResponse() {{
            postQueryDefaultApplicationJSONString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.postQueryDefaultApplicationJSONString = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.PostTreeActivationResponse postTreeActivation(openapisdk.models.operations.PostTreeActivationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/etc/replication/treeactivation.html");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostTreeActivationResponse res = new openapisdk.models.operations.PostTreeActivationResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.PostTruststoreResponse postTruststore(openapisdk.models.operations.PostTruststoreRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/libs/granite/security/post/truststore");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostTruststoreResponse res = new openapisdk.models.operations.PostTruststoreResponse() {{
            postTruststoreDefaultTextPlainString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/plain")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.postTruststoreDefaultTextPlainString = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.PostTruststorePkcs12Response postTruststorePkcs12(openapisdk.models.operations.PostTruststorePkcs12Request request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/etc/truststore");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostTruststorePkcs12Response res = new openapisdk.models.operations.PostTruststorePkcs12Response() {{
            postTruststorePkcs12DefaultTextPlainString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/plain")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.postTruststorePkcs12DefaultTextPlainString = out;
            }
        }

        return res;
    }
	
}