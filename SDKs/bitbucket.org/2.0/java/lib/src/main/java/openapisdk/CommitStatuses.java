package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class CommitStatuses {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public CommitStatuses(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getRepositoriesWorkspaceRepoSlugCommitCommitStatuses - Returns all statuses (e.g. build results) for a specific commit.
    **/
    public openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesResponse getRepositoriesWorkspaceRepoSlugCommitCommitStatuses(openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesResponse res = new openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesResponse() {{
            paginatedCommitstatuses = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedCommitstatuses out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedCommitstatuses.class);
                res.paginatedCommitstatuses = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * getRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey - Returns the specified build status for a commit.
    **/
    public openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse getRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey(openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build/{key}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse res = new openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse() {{
            commitstatus = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.commitstatus = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatuses - Returns all statuses (e.g. build results) for the given pull
     * request.
    **/
    public openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesResponse getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatuses(openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/statuses", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesResponse res = new openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesResponse() {{
            paginatedCommitstatuses = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedCommitstatuses out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedCommitstatuses.class);
                res.paginatedCommitstatuses = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * postRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuild - Creates a new build status against the specified commit.
     * 
     * If the specified key already exists, the existing status object will
     * be overwritten.
     * 
     * Example:
     * 
     * ```
     * curl https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo/commit/e10dae226959c2194f2b07b077c07762d93821cf/statuses/build/           -X POST -u jdoe -H 'Content-Type: application/json'           -d '{
     *     "key": "MY-BUILD",
     *     "state": "SUCCESSFUL",
     *     "description": "42 tests passed",
     *     "url": "https://www.example.org/my-build-result"
     *   }'
     * ```
     * 
     * When creating a new commit status, you can use a URI template for the URL.
     * Templates are URLs that contain variable names that Bitbucket will
     * evaluate at runtime whenever the URL is displayed anywhere similar to
     * parameter substitution in
     * [Bitbucket Connect](https://developer.atlassian.com/bitbucket/concepts/context-parameters.html).
     * For example, one could use `https://foo.com/builds/{repository.full_name}`
     * which Bitbucket will turn into `https://foo.com/builds/foo/bar` at render time.
     * The context variables available are `repository` and `commit`.
    **/
    public openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildResponse postRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuild(openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildResponse res = new openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildResponse() {{
            commitstatus = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.commitstatus = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * putRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey - Used to update the current status of a build status object on the
     * specific commit.
     * 
     * This operation can also be used to change other properties of the
     * build status:
     * 
     * * `state`
     * * `name`
     * * `description`
     * * `url`
     * * `refname`
     * 
     * The `key` cannot be changed.
    **/
    public openapisdk.models.operations.PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse putRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey(openapisdk.models.operations.PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build/{key}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse res = new openapisdk.models.operations.PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse() {{
            commitstatus = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.commitstatus = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
}