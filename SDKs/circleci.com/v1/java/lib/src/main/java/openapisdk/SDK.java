

package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.SpeakeasyHTTPClient;
import java.util.function.Function;
import java.util.stream.Collectors;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;


public class SDK {
	public static final String[] SERVERS = {
		"https://circleci.com/api/v1",
	};
  		

	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private openapisdk.models.shared.Security _security;
	private String _serverUrl;
	private String _language = "java";
	private String _sdkVersion = "0.0.1";
	private String _genVersion = "internal";

	public static class Builder {
		private HTTPClient client;
		private openapisdk.models.shared.Security security;
		private String serverUrl;
		private java.util.Map<String, String> params = new java.util.HashMap<String, String>();

		private Builder() {
		}

		public Builder setClient(HTTPClient client) {
			this.client = client;
			return this;
		}
		
		public Builder setSecurity(openapisdk.models.shared.Security security) {
			this.security = security;
			return this;
		}
		
		public Builder setServerURL(String serverUrl) {
			this.serverUrl = serverUrl;
			return this;
		}
		
		public Builder setServerURL(String serverUrl, java.util.Map<String, String> params) {
			this.serverUrl = serverUrl;
			this.params = params;
			return this;
		}
		
		public SDK build() throws Exception {
			return new SDK(this.client, this.security, this.serverUrl, this.params);
		}
	}

	public static Builder builder() {
		return new Builder();
	}

	private SDK(HTTPClient client, openapisdk.models.shared.Security security, String serverUrl, java.util.Map<String, String> params) throws Exception {
		this._defaultClient = client;
		
		if (this._defaultClient == null) {
			this._defaultClient = new SpeakeasyHTTPClient();
		}
		
		if (security != null) {
			this._security = security;
			this._securityClient = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, this._security);
		}
		
		if (this._securityClient == null) {
			this._securityClient = this._defaultClient;
		}

		if (serverUrl != null && !serverUrl.isBlank()) {
			this._serverUrl = openapisdk.utils.Utils.replaceParameters(serverUrl, params);
		}
		
		if (this._serverUrl == null) {
			this._serverUrl = SERVERS[0];
		}
		
	}
	
	
    /**
     * deleteProjectUsernameProjectBuildCache - Clears the cache for a project.
     * 
    **/
    public openapisdk.models.operations.DeleteProjectUsernameProjectBuildCacheResponse deleteProjectUsernameProjectBuildCache(openapisdk.models.operations.DeleteProjectUsernameProjectBuildCacheRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/project/{username}/{project}/build-cache", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteProjectUsernameProjectBuildCacheResponse res = new openapisdk.models.operations.DeleteProjectUsernameProjectBuildCacheResponse() {{
            deleteProjectUsernameProjectBuildCache200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.DeleteProjectUsernameProjectBuildCache200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.DeleteProjectUsernameProjectBuildCache200ApplicationJson.class);
                res.deleteProjectUsernameProjectBuildCache200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteProjectUsernameProjectCheckoutKeyFingerprint - Delete a checkout key.
     * 
    **/
    public openapisdk.models.operations.DeleteProjectUsernameProjectCheckoutKeyFingerprintResponse deleteProjectUsernameProjectCheckoutKeyFingerprint(openapisdk.models.operations.DeleteProjectUsernameProjectCheckoutKeyFingerprintRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/project/{username}/{project}/checkout-key/{fingerprint}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteProjectUsernameProjectCheckoutKeyFingerprintResponse res = new openapisdk.models.operations.DeleteProjectUsernameProjectCheckoutKeyFingerprintResponse() {{
            deleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJson.class);
                res.deleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteProjectUsernameProjectEnvvarName - Deletes the environment variable named ':name'
     * 
    **/
    public openapisdk.models.operations.DeleteProjectUsernameProjectEnvvarNameResponse deleteProjectUsernameProjectEnvvarName(openapisdk.models.operations.DeleteProjectUsernameProjectEnvvarNameRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/project/{username}/{project}/envvar/{name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteProjectUsernameProjectEnvvarNameResponse res = new openapisdk.models.operations.DeleteProjectUsernameProjectEnvvarNameResponse() {{
            deleteProjectUsernameProjectEnvvarName200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.DeleteProjectUsernameProjectEnvvarName200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.DeleteProjectUsernameProjectEnvvarName200ApplicationJson.class);
                res.deleteProjectUsernameProjectEnvvarName200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getMe - Provides information about the signed in user.
     * 
    **/
    public openapisdk.models.operations.GetMeResponse getMe() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/me");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMeResponse res = new openapisdk.models.operations.GetMeResponse() {{
            user = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.User out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.User.class);
                res.user = out;
            }
        }

        return res;
    }
	
	
    /**
     * getProjectUsernameProject - Build summary for each of the last 30 builds for a single git repo.
     * 
    **/
    public openapisdk.models.operations.GetProjectUsernameProjectResponse getProjectUsernameProject(openapisdk.models.operations.GetProjectUsernameProjectRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/project/{username}/{project}", request.pathParams);
        
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

        openapisdk.models.operations.GetProjectUsernameProjectResponse res = new openapisdk.models.operations.GetProjectUsernameProjectResponse() {{
            builds = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Build[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Build[].class);
                res.builds = out;
            }
        }

        return res;
    }
	
	
    /**
     * getProjectUsernameProjectCheckoutKey - Lists checkout keys.
     * 
    **/
    public openapisdk.models.operations.GetProjectUsernameProjectCheckoutKeyResponse getProjectUsernameProjectCheckoutKey(openapisdk.models.operations.GetProjectUsernameProjectCheckoutKeyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/project/{username}/{project}/checkout-key", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetProjectUsernameProjectCheckoutKeyResponse res = new openapisdk.models.operations.GetProjectUsernameProjectCheckoutKeyResponse() {{
            keys = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Key[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Key[].class);
                res.keys = out;
            }
        }

        return res;
    }
	
	
    /**
     * getProjectUsernameProjectCheckoutKeyFingerprint - Get a checkout key.
     * 
    **/
    public openapisdk.models.operations.GetProjectUsernameProjectCheckoutKeyFingerprintResponse getProjectUsernameProjectCheckoutKeyFingerprint(openapisdk.models.operations.GetProjectUsernameProjectCheckoutKeyFingerprintRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/project/{username}/{project}/checkout-key/{fingerprint}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetProjectUsernameProjectCheckoutKeyFingerprintResponse res = new openapisdk.models.operations.GetProjectUsernameProjectCheckoutKeyFingerprintResponse() {{
            key = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Key out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Key.class);
                res.key = out;
            }
        }

        return res;
    }
	
	
    /**
     * getProjectUsernameProjectEnvvar - Lists the environment variables for :project
     * 
    **/
    public openapisdk.models.operations.GetProjectUsernameProjectEnvvarResponse getProjectUsernameProjectEnvvar(openapisdk.models.operations.GetProjectUsernameProjectEnvvarRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/project/{username}/{project}/envvar", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetProjectUsernameProjectEnvvarResponse res = new openapisdk.models.operations.GetProjectUsernameProjectEnvvarResponse() {{
            envvars = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Envvar[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Envvar[].class);
                res.envvars = out;
            }
        }

        return res;
    }
	
	
    /**
     * getProjectUsernameProjectEnvvarName - Gets the hidden value of environment variable :name
     * 
    **/
    public openapisdk.models.operations.GetProjectUsernameProjectEnvvarNameResponse getProjectUsernameProjectEnvvarName(openapisdk.models.operations.GetProjectUsernameProjectEnvvarNameRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/project/{username}/{project}/envvar/{name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetProjectUsernameProjectEnvvarNameResponse res = new openapisdk.models.operations.GetProjectUsernameProjectEnvvarNameResponse() {{
            envvar = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Envvar out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Envvar.class);
                res.envvar = out;
            }
        }

        return res;
    }
	
	
    /**
     * getProjectUsernameProjectBuildNum - Full details for a single build. The response includes all of the fields from the build summary.
     * This is also the payload for the [notification webhooks](/docs/configuration/#notify), in which case this object is the value to a key named 'payload'.
     * 
    **/
    public openapisdk.models.operations.GetProjectUsernameProjectBuildNumResponse getProjectUsernameProjectBuildNum(openapisdk.models.operations.GetProjectUsernameProjectBuildNumRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/project/{username}/{project}/{build_num}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetProjectUsernameProjectBuildNumResponse res = new openapisdk.models.operations.GetProjectUsernameProjectBuildNumResponse() {{
            buildDetail = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BuildDetail out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BuildDetail.class);
                res.buildDetail = out;
            }
        }

        return res;
    }
	
	
    /**
     * getProjectUsernameProjectBuildNumArtifacts - List the artifacts produced by a given build.
     * 
    **/
    public openapisdk.models.operations.GetProjectUsernameProjectBuildNumArtifactsResponse getProjectUsernameProjectBuildNumArtifacts(openapisdk.models.operations.GetProjectUsernameProjectBuildNumArtifactsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/project/{username}/{project}/{build_num}/artifacts", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetProjectUsernameProjectBuildNumArtifactsResponse res = new openapisdk.models.operations.GetProjectUsernameProjectBuildNumArtifactsResponse() {{
            artifacts = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Artifact[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Artifact[].class);
                res.artifacts = out;
            }
        }

        return res;
    }
	
	
    /**
     * getProjectUsernameProjectBuildNumTests - Provides test metadata for a build
     * Note: [Learn how to set up your builds to collect test metadata](https://circleci.com/docs/test-metadata/)
     * 
    **/
    public openapisdk.models.operations.GetProjectUsernameProjectBuildNumTestsResponse getProjectUsernameProjectBuildNumTests(openapisdk.models.operations.GetProjectUsernameProjectBuildNumTestsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/project/{username}/{project}/{build_num}/tests", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetProjectUsernameProjectBuildNumTestsResponse res = new openapisdk.models.operations.GetProjectUsernameProjectBuildNumTestsResponse() {{
            tests = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Tests out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Tests.class);
                res.tests = out;
            }
        }

        return res;
    }
	
	
    /**
     * getProjects - List of all the projects you're following on CircleCI, with build information organized by branch.
     * 
    **/
    public openapisdk.models.operations.GetProjectsResponse getProjects() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/projects");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetProjectsResponse res = new openapisdk.models.operations.GetProjectsResponse() {{
            projects = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Project[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Project[].class);
                res.projects = out;
            }
        }

        return res;
    }
	
	
    /**
     * getRecentBuilds - Build summary for each of the last 30 recent builds, ordered by build_num.
     * 
    **/
    public openapisdk.models.operations.GetRecentBuildsResponse getRecentBuilds(openapisdk.models.operations.GetRecentBuildsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/recent-builds");
        
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

        openapisdk.models.operations.GetRecentBuildsResponse res = new openapisdk.models.operations.GetRecentBuildsResponse() {{
            builds = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Build[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Build[].class);
                res.builds = out;
            }
        }

        return res;
    }
	
	
    /**
     * postProjectUsernameProject - Triggers a new build, returns a summary of the build.
     * 
    **/
    public openapisdk.models.operations.PostProjectUsernameProjectResponse postProjectUsernameProject(openapisdk.models.operations.PostProjectUsernameProjectRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/project/{username}/{project}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostProjectUsernameProjectResponse res = new openapisdk.models.operations.PostProjectUsernameProjectResponse() {{
            buildSummary = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BuildSummary out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BuildSummary.class);
                res.buildSummary = out;
            }
        }

        return res;
    }
	
	
    /**
     * postProjectUsernameProjectCheckoutKey - Creates a new checkout key.
     * Only usable with a user API token.
     * 
    **/
    public openapisdk.models.operations.PostProjectUsernameProjectCheckoutKeyResponse postProjectUsernameProjectCheckoutKey(openapisdk.models.operations.PostProjectUsernameProjectCheckoutKeyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/project/{username}/{project}/checkout-key", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostProjectUsernameProjectCheckoutKeyResponse res = new openapisdk.models.operations.PostProjectUsernameProjectCheckoutKeyResponse() {{
            key = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Key out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Key.class);
                res.key = out;
            }
        }

        return res;
    }
	
	
    /**
     * postProjectUsernameProjectEnvvar - Creates a new environment variable
     * 
    **/
    public openapisdk.models.operations.PostProjectUsernameProjectEnvvarResponse postProjectUsernameProjectEnvvar(openapisdk.models.operations.PostProjectUsernameProjectEnvvarRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/project/{username}/{project}/envvar", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostProjectUsernameProjectEnvvarResponse res = new openapisdk.models.operations.PostProjectUsernameProjectEnvvarResponse() {{
            envvar = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Envvar out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Envvar.class);
                res.envvar = out;
            }
        }

        return res;
    }
	
	
    /**
     * postProjectUsernameProjectSshKey - Create an ssh key used to access external systems that require SSH key-based authentication
     * 
    **/
    public openapisdk.models.operations.PostProjectUsernameProjectSshKeyResponse postProjectUsernameProjectSshKey(openapisdk.models.operations.PostProjectUsernameProjectSshKeyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/project/{username}/{project}/ssh-key", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostProjectUsernameProjectSshKeyResponse res = new openapisdk.models.operations.PostProjectUsernameProjectSshKeyResponse() {{
            postProjectUsernameProjectSshKeyDefaultApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostProjectUsernameProjectSshKeyDefaultApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostProjectUsernameProjectSshKeyDefaultApplicationJson.class);
                res.postProjectUsernameProjectSshKeyDefaultApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postProjectUsernameProjectTreeBranch - Triggers a new build, returns a summary of the build.
     * Optional build parameters can be set using an experimental API.
     * 
     * Note: For more about build parameters, read about [using parameterized builds](https://circleci.com/docs/parameterized-builds/)
     * 
    **/
    public openapisdk.models.operations.PostProjectUsernameProjectTreeBranchResponse postProjectUsernameProjectTreeBranch(openapisdk.models.operations.PostProjectUsernameProjectTreeBranchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/project/{username}/{project}/tree/{branch}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostProjectUsernameProjectTreeBranchResponse res = new openapisdk.models.operations.PostProjectUsernameProjectTreeBranchResponse() {{
            build = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Build out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Build.class);
                res.build = out;
            }
        }

        return res;
    }
	
	
    /**
     * postProjectUsernameProjectBuildNumCancel - Cancels the build, returns a summary of the build.
     * 
    **/
    public openapisdk.models.operations.PostProjectUsernameProjectBuildNumCancelResponse postProjectUsernameProjectBuildNumCancel(openapisdk.models.operations.PostProjectUsernameProjectBuildNumCancelRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/project/{username}/{project}/{build_num}/cancel", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostProjectUsernameProjectBuildNumCancelResponse res = new openapisdk.models.operations.PostProjectUsernameProjectBuildNumCancelResponse() {{
            build = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Build out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Build.class);
                res.build = out;
            }
        }

        return res;
    }
	
	
    /**
     * postProjectUsernameProjectBuildNumRetry - Retries the build, returns a summary of the new build.
     * 
    **/
    public openapisdk.models.operations.PostProjectUsernameProjectBuildNumRetryResponse postProjectUsernameProjectBuildNumRetry(openapisdk.models.operations.PostProjectUsernameProjectBuildNumRetryRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/project/{username}/{project}/{build_num}/retry", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostProjectUsernameProjectBuildNumRetryResponse res = new openapisdk.models.operations.PostProjectUsernameProjectBuildNumRetryResponse() {{
            build = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Build out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Build.class);
                res.build = out;
            }
        }

        return res;
    }
	
	
    /**
     * postUserHerokuKey - Adds your Heroku API key to CircleCI, takes apikey as form param name.
     * 
    **/
    public openapisdk.models.operations.PostUserHerokuKeyResponse postUserHerokuKey() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/user/heroku-key");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostUserHerokuKeyResponse res = new openapisdk.models.operations.PostUserHerokuKeyResponse() {{
            postUserHerokuKey403ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostUserHerokuKey403ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostUserHerokuKey403ApplicationJson.class);
                res.postUserHerokuKey403ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}