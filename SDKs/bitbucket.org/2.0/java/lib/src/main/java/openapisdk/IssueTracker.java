package openapisdk;

import openapisdk.utils.HTTPClient;
import java.util.function.Function;
import java.util.stream.Collectors;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class IssueTracker {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public IssueTracker(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * deleteRepositoriesWorkspaceRepoSlugIssuesIssueId - Deletes the specified issue. This requires write access to the
     * repository.
    **/
    public openapisdk.models.operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdResponse deleteRepositoriesWorkspaceRepoSlugIssuesIssueId(openapisdk.models.operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdResponse res = new openapisdk.models.operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdResponse() {{
            issue = null;
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.issue = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
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
     * deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPath - Deletes an attachment.
    **/
    public openapisdk.models.operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathResponse deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPath(openapisdk.models.operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/attachments/{path}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathResponse res = new openapisdk.models.operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathResponse() {{
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
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
     * deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId - Deletes the specified comment.
    **/
    public openapisdk.models.operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdResponse deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId(openapisdk.models.operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments/{comment_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdResponse res = new openapisdk.models.operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVote - Retract your vote.
    **/
    public openapisdk.models.operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteResponse deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVote(openapisdk.models.operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/vote", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteResponse res = new openapisdk.models.operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteResponse() {{
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
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
     * deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch - Stop watching this issue.
    **/
    public openapisdk.models.operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchResponse deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch(openapisdk.models.operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/watch", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchResponse res = new openapisdk.models.operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchResponse() {{
            error = null;
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
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
     * getRepositoriesWorkspaceRepoSlugComponents - Returns the components that have been defined in the issue tracker.
     * 
     * This resource is only available on repositories that have the issue
     * tracker enabled.
    **/
    public openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugComponentsResponse getRepositoriesWorkspaceRepoSlugComponents(openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugComponentsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/components", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugComponentsResponse res = new openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugComponentsResponse() {{
            paginatedComponents = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedComponents out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedComponents.class);
                res.paginatedComponents = out;
            }
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
     * getRepositoriesWorkspaceRepoSlugComponentsComponentId - Returns the specified issue tracker component object.
    **/
    public openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugComponentsComponentIdResponse getRepositoriesWorkspaceRepoSlugComponentsComponentId(openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugComponentsComponentIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/components/{component_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugComponentsComponentIdResponse res = new openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugComponentsComponentIdResponse() {{
            component = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.component = out;
            }
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
     * getRepositoriesWorkspaceRepoSlugIssues - Returns the issues in the issue tracker.
    **/
    public openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesResponse getRepositoriesWorkspaceRepoSlugIssues(openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/issues", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesResponse res = new openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesResponse() {{
            paginatedIssues = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedIssues out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedIssues.class);
                res.paginatedIssues = out;
            }
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
     * getRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZip - This endpoint is used to poll for the progress of an issue export
     * job and return the zip file after the job is complete.
     * As long as the job is running, this will return a 200 response
     * with in the response body a description of the current status.
     * 
     * After the job has been scheduled, but before it starts executing, this
     * endpoint's response is:
     * 
     * {
     *  "type": "issue_job_status",
     *  "status": "ACCEPTED",
     *  "phase": "Initializing",
     *  "total": 0,
     *  "count": 0,
     *  "pct": 0
     * }
     * 
     * 
     * Then once it starts running, it becomes:
     * 
     * {
     *  "type": "issue_job_status",
     *  "status": "STARTED",
     *  "phase": "Attachments",
     *  "total": 15,
     *  "count": 11,
     *  "pct": 73
     * }
     * 
     * Once the job has successfully completed, it returns a stream of the zip file.
    **/
    public openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipResponse getRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZip(openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/issues/export/{repo_name}-issues-{task_id}.zip", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipResponse res = new openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipResponse() {{
            issueJobStatus = null;
            error = null;
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 202) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.IssueJobStatus out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.IssueJobStatus.class);
                res.issueJobStatus = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
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
     * getRepositoriesWorkspaceRepoSlugIssuesImport - When using GET, this endpoint reports the status of the current import task. Request example:
     * 
     * ```
     * $ curl -u <username> -X GET https://api.bitbucket.org/2.0/repositories/<owner_username>/<repo_slug>/issues/import
     * ```
     * 
     * After the job has been scheduled, but before it starts executing, this endpoint's response is:
     * 
     * ```
     * < HTTP/1.1 202 Accepted
     * {
     *     "type": "issue_job_status",
     *     "status": "PENDING",
     *     "phase": "Attachments",
     *     "total": 15,
     *     "count": 0,
     *     "percent": 0
     * }
     * ```
     * 
     * Once it starts running, it is a 202 response with status STARTED and progress filled.
     * 
     * After it is finished, it becomes a 200 response with status SUCCESS or FAILURE.
    **/
    public openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesImportResponse getRepositoriesWorkspaceRepoSlugIssuesImport(openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesImportRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/issues/import", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesImportResponse res = new openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesImportResponse() {{
            issueJobStatus = null;
            issueJobStatus = null;
            error = null;
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.IssueJobStatus out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.IssueJobStatus.class);
                res.issueJobStatus = out;
            }
        }
        else if (httpRes.statusCode() == 202) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.IssueJobStatus out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.IssueJobStatus.class);
                res.issueJobStatus = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
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
     * getRepositoriesWorkspaceRepoSlugIssuesIssueId - Returns the specified issue.
    **/
    public openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdResponse getRepositoriesWorkspaceRepoSlugIssuesIssueId(openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdResponse res = new openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdResponse() {{
            issue = null;
            error = null;
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.issue = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 410) {
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
     * getRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachments - Returns all attachments for this issue.
     * 
     * This returns the files' meta data. This does not return the files'
     * actual contents.
     * 
     * The files are always ordered by their upload date.
    **/
    public openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsResponse getRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachments(openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/attachments", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsResponse res = new openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsResponse() {{
            paginatedIssueAttachments = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedIssueAttachments out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedIssueAttachments.class);
                res.paginatedIssueAttachments = out;
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
     * getRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPath - Returns the contents of the specified file attachment.
     * 
     * Note that this endpoint does not return a JSON response, but instead
     * returns a redirect pointing to the actual file that in turn will return
     * the raw contents.
     * 
     * The redirect URL contains a one-time token that has a limited lifetime.
     * As a result, the link should not be persisted, stored, or shared.
    **/
    public openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathResponse getRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPath(openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/attachments/{path}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathResponse res = new openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathResponse() {{
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 302) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
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
     * getRepositoriesWorkspaceRepoSlugIssuesIssueIdChanges - Returns the list of all changes that have been made to the specified
     * issue. Changes are returned in chronological order with the oldest
     * change first.
     * 
     * Each time an issue is edited in the UI or through the API, an immutable
     * change record is created under the `/issues/123/changes` endpoint. It
     * also has a comment associated with the change.
     * 
     * Note that this operation is changing significantly, due to privacy changes.
     * See the [announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#changes-to-the-issue-changes-api)
     * for details.
     * 
     * ```
     * $ curl -s https://api.bitbucket.org/2.0/repositories/evzijst/dogslow/issues/1/changes - | jq .
     * 
     * {
     *   "pagelen": 20,
     *   "values": [
     *     {
     *       "changes": {
     *         "priority": {
     *           "new": "trivial",
     *           "old": "major"
     *         },
     *         "assignee": {
     *           "new": "",
     *           "old": "evzijst"
     *         },
     *         "assignee_account_id": {
     *           "new": "",
     *           "old": "557058:c0b72ad0-1cb5-4018-9cdc-0cde8492c443"
     *         },
     *         "kind": {
     *           "new": "enhancement",
     *           "old": "bug"
     *         }
     *       },
     *       "links": {
     *         "self": {
     *           "href": "https://api.bitbucket.org/2.0/repositories/evzijst/dogslow/issues/1/changes/2"
     *         },
     *         "html": {
     *           "href": "https://bitbucket.org/evzijst/dogslow/issues/1#comment-2"
     *         }
     *       },
     *       "issue": {
     *         "links": {
     *           "self": {
     *             "href": "https://api.bitbucket.org/2.0/repositories/evzijst/dogslow/issues/1"
     *           }
     *         },
     *         "type": "issue",
     *         "id": 1,
     *         "repository": {
     *           "links": {
     *             "self": {
     *               "href": "https://api.bitbucket.org/2.0/repositories/evzijst/dogslow"
     *             },
     *             "html": {
     *               "href": "https://bitbucket.org/evzijst/dogslow"
     *             },
     *             "avatar": {
     *               "href": "https://bitbucket.org/evzijst/dogslow/avatar/32/"
     *             }
     *           },
     *           "type": "repository",
     *           "name": "dogslow",
     *           "full_name": "evzijst/dogslow",
     *           "uuid": "{988b17c6-1a47-4e70-84ee-854d5f012bf6}"
     *         },
     *         "title": "Updated title"
     *       },
     *       "created_on": "2018-03-03T00:35:28.353630+00:00",
     *       "user": {
     *         "username": "evzijst",
     *         "nickname": "evzijst",
     *         "display_name": "evzijst",
     *         "type": "user",
     *         "uuid": "{aaa7972b-38af-4fb1-802d-6e3854c95778}",
     *         "links": {
     *           "self": {
     *             "href": "https://api.bitbucket.org/2.0/users/evzijst"
     *           },
     *           "html": {
     *             "href": "https://bitbucket.org/evzijst/"
     *           },
     *           "avatar": {
     *             "href": "https://bitbucket.org/account/evzijst/avatar/32/"
     *           }
     *         }
     *       },
     *       "message": {
     *         "raw": "Removed assignee, changed kind and priority.",
     *         "markup": "markdown",
     *         "html": "<p>Removed assignee, changed kind and priority.</p>",
     *         "type": "rendered"
     *       },
     *       "type": "issue_change",
     *       "id": 2
     *     }
     *   ],
     *   "page": 1
     * }
     * ```
     * 
     * Changes support [filtering and sorting](../../../meta/filtering) that
     * can be used to search for specific changes. For instance, to see
     * when an issue transitioned to "resolved":
     * 
     * ```
     * $ curl -s https://api.bitbucket.org/2.0/repositories/site/master/issues/1/changes \
     *    -G --data-urlencode='q=changes.state.new = "resolved"'
     * ```
     * 
     * This resource is only available on repositories that have the issue
     * tracker enabled.
     * 
     * N.B.
     * 
     * The `changes.assignee` and `changes.assignee_account_id` fields are not
     * a `user` object. Instead, they contain the raw `username` and
     * `account_id` of the user. This is to protect the integrity of the audit
     * log even after a user account gets deleted.
     * 
     * The `changes.assignee` field is deprecated will disappear in the
     * future. Use `changes.assignee_account_id` instead.
    **/
    public openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesResponse getRepositoriesWorkspaceRepoSlugIssuesIssueIdChanges(openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/changes", request.pathParams);
        
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

        openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesResponse res = new openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesResponse() {{
            paginatedLogEntries = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedLogEntries out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedLogEntries.class);
                res.paginatedLogEntries = out;
            }
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
     * getRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeId - Returns the specified issue change object.
     * 
     * This resource is only available on repositories that have the issue
     * tracker enabled.
    **/
    public openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdResponse getRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeId(openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/changes/{change_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdResponse res = new openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdResponse() {{
            issueChange = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.issueChange = out;
            }
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
     * getRepositoriesWorkspaceRepoSlugIssuesIssueIdComments - Returns a paginated list of all comments that were made on the
     * specified issue.
     * 
     * The default sorting is oldest to newest and can be overridden with
     * the `sort` query parameter.
     * 
     * This endpoint also supports filtering and sorting of the results. See
     * [filtering and sorting](../../../../../../meta/filtering) for more details.
    **/
    public openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsResponse getRepositoriesWorkspaceRepoSlugIssuesIssueIdComments(openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments", request.pathParams);
        
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

        openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsResponse res = new openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsResponse() {{
            paginatedIssueComments = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedIssueComments out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedIssueComments.class);
                res.paginatedIssueComments = out;
            }
        }

        return res;
    }
	
	
    /**
     * getRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId - Returns the specified issue comment object.
    **/
    public openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdResponse getRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId(openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments/{comment_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdResponse res = new openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdResponse() {{
            issueComment = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.issueComment = out;
            }
        }

        return res;
    }
	
	
    /**
     * getRepositoriesWorkspaceRepoSlugIssuesIssueIdVote - Check whether the authenticated user has voted for this issue.
     * A 204 status code indicates that the user has voted, while a 404
     * implies they haven't.
    **/
    public openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteResponse getRepositoriesWorkspaceRepoSlugIssuesIssueIdVote(openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/vote", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteResponse res = new openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteResponse() {{
            error = null;
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
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
     * getRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch - Indicated whether or not the authenticated user is watching this
     * issue.
    **/
    public openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchResponse getRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch(openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/watch", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchResponse res = new openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchResponse() {{
            error = null;
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
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
     * getRepositoriesWorkspaceRepoSlugMilestones - Returns the milestones that have been defined in the issue tracker.
     * 
     * This resource is only available on repositories that have the issue
     * tracker enabled.
    **/
    public openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugMilestonesResponse getRepositoriesWorkspaceRepoSlugMilestones(openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugMilestonesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/milestones", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugMilestonesResponse res = new openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugMilestonesResponse() {{
            paginatedMilestones = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedMilestones out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedMilestones.class);
                res.paginatedMilestones = out;
            }
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
     * getRepositoriesWorkspaceRepoSlugMilestonesMilestoneId - Returns the specified issue tracker milestone object.
    **/
    public openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIdResponse getRepositoriesWorkspaceRepoSlugMilestonesMilestoneId(openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/milestones/{milestone_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIdResponse res = new openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIdResponse() {{
            milestone = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.milestone = out;
            }
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
     * getRepositoriesWorkspaceRepoSlugVersions - Returns the versions that have been defined in the issue tracker.
     * 
     * This resource is only available on repositories that have the issue
     * tracker enabled.
    **/
    public openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugVersionsResponse getRepositoriesWorkspaceRepoSlugVersions(openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugVersionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/versions", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugVersionsResponse res = new openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugVersionsResponse() {{
            paginatedVersions = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedVersions out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedVersions.class);
                res.paginatedVersions = out;
            }
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
     * getRepositoriesWorkspaceRepoSlugVersionsVersionId - Returns the specified issue tracker version object.
    **/
    public openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugVersionsVersionIdResponse getRepositoriesWorkspaceRepoSlugVersionsVersionId(openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugVersionsVersionIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/versions/{version_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugVersionsVersionIdResponse res = new openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugVersionsVersionIdResponse() {{
            version = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.version = out;
            }
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
     * postRepositoriesWorkspaceRepoSlugIssues - Creates a new issue.
     * 
     * This call requires authentication. Private repositories or private
     * issue trackers require the caller to authenticate with an account that
     * has appropriate authorization.
     * 
     * The authenticated user is used for the issue's `reporter` field.
    **/
    public openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugIssuesResponse postRepositoriesWorkspaceRepoSlugIssues(openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugIssuesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/issues", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugIssuesResponse res = new openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugIssuesResponse() {{
            issue = null;
            error = null;
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.issue = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
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
     * postRepositoriesWorkspaceRepoSlugIssuesExport - A POST request to this endpoint initiates a new background celery task that archives the repo's issues.
     * 
     * For example, you can run:
     * 
     * curl -u <username> -X POST http://api.bitbucket.org/2.0/repositories/<owner_username>/<repo_slug>/
     * issues/export
     * 
     * When the job has been accepted, it will return a 202 (Accepted) along with a unique url to this job in the
     * 'Location' response header. This url is the endpoint for where the user can obtain their zip files."
    **/
    public openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugIssuesExportResponse postRepositoriesWorkspaceRepoSlugIssuesExport(openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugIssuesExportRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/issues/export", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugIssuesExportResponse res = new openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugIssuesExportResponse() {{
            error = null;
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 202) {
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
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
     * postRepositoriesWorkspaceRepoSlugIssuesImport - A POST request to this endpoint will import the zip file given by the archive parameter into the repository. All
     * existing issues will be deleted and replaced by the contents of the imported zip file.
     * 
     * Imports are done through a multipart/form-data POST. There is one valid and required form field, with the name
     * "archive," which needs to be a file field:
     * 
     * ```
     * $ curl -u <username> -X POST -F archive=@/path/to/file.zip https://api.bitbucket.org/2.0/repositories/<owner_username>/<repo_slug>/issues/import
     * ```
     * 
     * When the import job is accepted, here is example output:
     * 
     * ```
     * < HTTP/1.1 202 Accepted
     * 
     * {
     *     "type": "issue_job_status",
     *     "status": "ACCEPTED",
     *     "phase": "Attachments",
     *     "total": 15,
     *     "count": 0,
     *     "percent": 0
     * }
     * ```
    **/
    public openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugIssuesImportResponse postRepositoriesWorkspaceRepoSlugIssuesImport(openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugIssuesImportRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/issues/import", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugIssuesImportResponse res = new openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugIssuesImportResponse() {{
            issueJobStatus = null;
            error = null;
            error = null;
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 202) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.IssueJobStatus out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.IssueJobStatus.class);
                res.issueJobStatus = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 409) {
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
     * postRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachments - Upload new issue attachments.
     * 
     * To upload files, perform a `multipart/form-data` POST containing one
     * or more file fields.
     * 
     * When a file is uploaded with the same name as an existing attachment,
     * then the existing file will be replaced.
    **/
    public openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsResponse postRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachments(openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/attachments", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsResponse res = new openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsResponse() {{
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
        }
        else if (httpRes.statusCode() == 400) {
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
     * postRepositoriesWorkspaceRepoSlugIssuesIssueIdChanges - Makes a change to the specified issue.
     * 
     * For example, to change an issue's state and assignee, create a new
     * change object that modifies these fields:
     * 
     * ```
     * curl https://api.bitbucket.org/2.0/site/master/issues/1234/changes \
     *   -s -u evzijst -X POST -H "Content-Type: application/json" \
     *   -d '{
     *     "changes": {
     *       "assignee_account_id": {
     *         "new": "557058:c0b72ad0-1cb5-4018-9cdc-0cde8492c443"
     *       },
     *       "state": {
     *         "new": 'resolved"
     *       }
     *     }
     *     "message": {
     *       "raw": "This is now resolved."
     *     }
     *   }'
     * ```
     * 
     * The above example also includes a custom comment to go alongside the
     * change. This comment will also be visible on the issue page in the UI.
     * 
     * The fields of the `changes` object are strings, not objects. This
     * allows for immutable change log records, even after user accounts,
     * milestones, or other objects recorded in a change entry, get renamed or
     * deleted.
     * 
     * The `assignee_account_id` field stores the account id. When POSTing a
     * new change and changing the assignee, the client should therefore use
     * the user's account_id in the `changes.assignee_account_id.new` field.
     * 
     * This call requires authentication. Private repositories or private
     * issue trackers require the caller to authenticate with an account that
     * has appropriate authorization.
    **/
    public openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesResponse postRepositoriesWorkspaceRepoSlugIssuesIssueIdChanges(openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/changes", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesResponse res = new openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesResponse() {{
            issueChange = null;
            error = null;
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.issueChange = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
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
     * postRepositoriesWorkspaceRepoSlugIssuesIssueIdComments - Creates a new issue comment.
     * 
     * ```
     * $ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/issues/42/comments/ \
     *   -X POST -u evzijst \
     *   -H 'Content-Type: application/json' \
     *   -d '{"content": {"raw": "Lorem ipsum."}}'
     * ```
    **/
    public openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsResponse postRepositoriesWorkspaceRepoSlugIssuesIssueIdComments(openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsResponse res = new openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsResponse() {{
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
        }
        else if (httpRes.statusCode() == 400) {
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
     * putRepositoriesWorkspaceRepoSlugIssuesIssueId - Modifies the issue.
     * 
     * ```
     * $ curl https://api.bitbucket.org/2.0/repostories/evzijst/dogslow/issues/123 \
     *   -u evzijst -s -X PUT -H 'Content-Type: application/json' \
     *   -d '{
     *   "title": "Updated title",
     *   "assignee": {
     *     "username": "evzijst"
     *   },
     *   "priority": "minor",
     *   "version": {
     *     "name": "1.0"
     *   },
     *   "component": null
     * }'
     * ```
     * 
     * This example changes the `title`, `assignee`, `priority` and the
     * `version`. It also removes the value of the `component` from the issue
     * by setting the field to `null`. Any field not present keeps its existing
     * value.
     * 
     * Each time an issue is edited in the UI or through the API, an immutable
     * change record is created under the `/issues/123/changes` endpoint. It
     * also has a comment associated with the change.
    **/
    public openapisdk.models.operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdResponse putRepositoriesWorkspaceRepoSlugIssuesIssueId(openapisdk.models.operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdResponse res = new openapisdk.models.operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdResponse() {{
            issue = null;
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.issue = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
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
     * putRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId - Updates the content of the specified issue comment. Note that only
     * the `content.raw` field can be modified.
     * 
     * ```
     * $ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/issues/42/comments/5728901 \
     *   -X PUT -u evzijst \
     *   -H 'Content-Type: application/json' \
     *   -d '{"content": {"raw": "Lorem ipsum."}'
     * ```
    **/
    public openapisdk.models.operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdResponse putRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId(openapisdk.models.operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments/{comment_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdResponse res = new openapisdk.models.operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdResponse() {{
            issueComment = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.issueComment = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
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
     * putRepositoriesWorkspaceRepoSlugIssuesIssueIdVote - Vote for this issue.
     * 
     * To cast your vote, do an empty PUT. The 204 status code indicates that
     * the operation was successful.
    **/
    public openapisdk.models.operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteResponse putRepositoriesWorkspaceRepoSlugIssuesIssueIdVote(openapisdk.models.operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/vote", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteResponse res = new openapisdk.models.operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteResponse() {{
            error = null;
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
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
     * putRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch - Start watching this issue.
     * 
     * To start watching this issue, do an empty PUT. The 204 status code
     * indicates that the operation was successful.
    **/
    public openapisdk.models.operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchResponse putRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch(openapisdk.models.operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/issues/{issue_id}/watch", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchResponse res = new openapisdk.models.operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchResponse() {{
            error = null;
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
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