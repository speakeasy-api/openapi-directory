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

public class Pullrequests {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Pullrequests(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * deleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername - Removes a default reviewer from the repository.
    **/
    public openapisdk.models.operations.DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse deleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername(openapisdk.models.operations.DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse res = new openapisdk.models.operations.DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse() {{
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
     * deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprove - Redact the authenticated user's approval of the specified pull
     * request.
    **/
    public openapisdk.models.operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveResponse deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprove(openapisdk.models.operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/approve", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveResponse res = new openapisdk.models.operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveResponse() {{
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
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
     * deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId - Deletes a specific pull request comment.
    **/
    public openapisdk.models.operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResponse deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId(openapisdk.models.operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResponse res = new openapisdk.models.operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResponse() {{
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
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
	
	
    public openapisdk.models.operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesResponse deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChanges(openapisdk.models.operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/request-changes", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesResponse res = new openapisdk.models.operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesResponse() {{
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
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
     * getPullrequestsForCommit - Returns a paginated list of all pull requests as part of which this commit was reviewed. Pull Request Commit Links app must be installed first before using this API; installation automatically occurs when 'Go to pull request' is clicked from the web interface for a commit's details.
    **/
    public openapisdk.models.operations.GetPullrequestsForCommitResponse getPullrequestsForCommit(openapisdk.models.operations.GetPullrequestsForCommitRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/commit/{commit}/pullrequests", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetPullrequestsForCommitResponse res = new openapisdk.models.operations.GetPullrequestsForCommitResponse() {{
            paginatedPullrequests = null;
            paginatedPullrequests = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedPullrequests out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedPullrequests.class);
                res.paginatedPullrequests = out;
            }
        }
        else if (httpRes.statusCode() == 202) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedPullrequests out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedPullrequests.class);
                res.paginatedPullrequests = out;
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
     * getPullrequestsSelectedUser - Returns all pull requests authored by the specified user.
     * 
     * By default only open pull requests are returned. This can be controlled
     * using the `state` query parameter. To retrieve pull requests that are
     * in one of multiple states, repeat the `state` parameter for each
     * individual state.
     * 
     * This endpoint also supports filtering and sorting of the results. See
     * [filtering and sorting](../../../../meta/filtering) for more details.
    **/
    public openapisdk.models.operations.GetPullrequestsSelectedUserResponse getPullrequestsSelectedUser(openapisdk.models.operations.GetPullrequestsSelectedUserRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/pullrequests/{selected_user}", request.pathParams);
        
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

        openapisdk.models.operations.GetPullrequestsSelectedUserResponse res = new openapisdk.models.operations.GetPullrequestsSelectedUserResponse() {{
            paginatedPullrequests = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedPullrequests out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedPullrequests.class);
                res.paginatedPullrequests = out;
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
     * getRepositoriesWorkspaceRepoSlugDefaultReviewers - Returns the repository's default reviewers.
     * 
     * These are the users that are automatically added as reviewers on every
     * new pull request that is created.
    **/
    public openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersResponse getRepositoriesWorkspaceRepoSlugDefaultReviewers(openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/default-reviewers", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersResponse res = new openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * getRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername - Returns the specified reviewer.
     * 
     * This can be used to test whether a user is among the repository's
     * default reviewers list. A 404 indicates that that specified user is not
     * a default reviewer.
    **/
    public openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse getRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername(openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse res = new openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse() {{
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
     * getRepositoriesWorkspaceRepoSlugPullrequests - Returns all pull requests on the specified repository.
     * 
     * By default only open pull requests are returned. This can be controlled
     * using the `state` query parameter. To retrieve pull requests that are
     * in one of multiple states, repeat the `state` parameter for each
     * individual state.
     * 
     * This endpoint also supports filtering and sorting of the results. See
     * [filtering and sorting](../../../../meta/filtering) for more details.
    **/
    public openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsResponse getRepositoriesWorkspaceRepoSlugPullrequests(openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pullrequests", request.pathParams);
        
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

        openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsResponse res = new openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsResponse() {{
            paginatedPullrequests = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedPullrequests out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedPullrequests.class);
                res.paginatedPullrequests = out;
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
     * getRepositoriesWorkspaceRepoSlugPullrequestsActivity - Returns a paginated list of the pull request's activity log.
     * 
     * This handler serves both a v20 and internal endpoint. The v20 endpoint
     * returns reviewer comments, updates, approvals and request changes. The internal
     * endpoint includes those plus tasks and attachments.
     * 
     * Comments created on a file or a line of code have an inline property.
     * 
     * Comment example:
     * ```
     * {
     *     "pagelen": 20,
     *     "values": [
     *         {
     *             "comment": {
     *                 "links": {
     *                     "self": {
     *                         "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695/comments/118571088"
     *                     },
     *                     "html": {
     *                         "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695/_/diff#comment-118571088"
     *                     }
     *                 },
     *                 "deleted": false,
     *                 "pullrequest": {
     *                     "type": "pullrequest",
     *                     "id": 5695,
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
     *                         }
     *                     },
     *                     "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
     *                 },
     *                 "content": {
     *                     "raw": "inline with to a dn from lines",
     *                     "markup": "markdown",
     *                     "html": "<p>inline with to a dn from lines</p>",
     *                     "type": "rendered"
     *                 },
     *                 "created_on": "2019-09-27T00:33:46.039178+00:00",
     *                 "user": {
     *                     "display_name": "Name Lastname",
     *                     "uuid": "{}",
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/%7B%7D/"
     *                         },
     *                         "avatar": {
     *                             "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
     *                         }
     *                     },
     *                     "type": "user",
     *                     "nickname": "Name",
     *                     "account_id": ""
     *                 },
     *                 "created_on": "2019-09-27T00:33:46.039178+00:00",
     *                 "user": {
     *                     "display_name": "Name Lastname",
     *                     "uuid": "{}",
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/%7B%7D/"
     *                         },
     *                         "avatar": {
     *                             "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
     *                         }
     *                     },
     *                     "type": "user",
     *                     "nickname": "Name",
     *                     "account_id": ""
     *                 },
     *                 "updated_on": "2019-09-27T00:33:46.055384+00:00",
     *                 "inline": {
     *                     "context_lines": "",
     *                     "to": null,
     *                     "path": "",
     *                     "outdated": false,
     *                     "from": 211
     *                 },
     *                 "type": "pullrequest_comment",
     *                 "id": 118571088
     *             },
     *             "pull_request": {
     *                 "type": "pullrequest",
     *                 "id": 5695,
     *                 "links": {
     *                     "self": {
     *                         "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
     *                     },
     *                     "html": {
     *                         "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
     *                     }
     *                 },
     *                 "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
     *             }
     *         }
     *     ]
     * }
     * ```
     * 
     * Updates include a state property of OPEN, MERGED, or DECLINED.
     * 
     * Update example:
     * ```
     * {
     *     "pagelen": 20,
     *     "values": [
     *         {
     *             "update": {
     *                 "description": "",
     *                 "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it",
     *                 "destination": {
     *                     "commit": {
     *                         "type": "commit",
     *                         "hash": "6a2c16e4a152",
     *                         "links": {
     *                             "self": {
     *                                 "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/commit/6a2c16e4a152"
     *                             },
     *                             "html": {
     *                                 "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6a2c16e4a152"
     *                             }
     *                         }
     *                     },
     *                     "branch": {
     *                         "name": "master"
     *                     },
     *                     "repository": {
     *                         "name": "Atlaskit-MK-2",
     *                         "type": "repository",
     *                         "full_name": "atlassian/atlaskit-mk-2",
     *                         "links": {
     *                             "self": {
     *                                 "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2"
     *                             },
     *                             "html": {
     *                                 "href": "https://bitbucket.org/atlassian/atlaskit-mk-2"
     *                             },
     *                             "avatar": {
     *                                 "href": "https://bytebucket.org/ravatar/%7B%7D?ts=js"
     *                             }
     *                         },
     *                         "uuid": "{}"
     *                     }
     *                 },
     *                 "reason": "",
     *                 "source": {
     *                     "commit": {
     *                         "type": "commit",
     *                         "hash": "728c8bad1813",
     *                         "links": {
     *                             "self": {
     *                                 "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/commit/728c8bad1813"
     *                             },
     *                             "html": {
     *                                 "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/commits/728c8bad1813"
     *                             }
     *                         }
     *                     },
     *                     "branch": {
     *                         "name": "username/NONE-add-onClick-prop-for-accessibility"
     *                     },
     *                     "repository": {
     *                         "name": "Atlaskit-MK-2",
     *                         "type": "repository",
     *                         "full_name": "atlassian/atlaskit-mk-2",
     *                         "links": {
     *                             "self": {
     *                                 "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2"
     *                             },
     *                             "html": {
     *                                 "href": "https://bitbucket.org/atlassian/atlaskit-mk-2"
     *                             },
     *                             "avatar": {
     *                                 "href": "https://bytebucket.org/ravatar/%7B%7D?ts=js"
     *                             }
     *                         },
     *                         "uuid": "{}"
     *                     }
     *                 },
     *                 "state": "OPEN",
     *                 "author": {
     *                     "display_name": "Name Lastname",
     *                     "uuid": "{}",
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/%7B%7D/"
     *                         },
     *                         "avatar": {
     *                             "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
     *                         }
     *                     },
     *                     "type": "user",
     *                     "nickname": "Name",
     *                     "account_id": ""
     *                 },
     *                 "date": "2019-05-10T06:48:25.305565+00:00"
     *             },
     *             "pull_request": {
     *                 "type": "pullrequest",
     *                 "id": 5695,
     *                 "links": {
     *                     "self": {
     *                         "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
     *                     },
     *                     "html": {
     *                         "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
     *                     }
     *                 },
     *                 "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
     *             }
     *         }
     *     ]
     * }
     * ```
     * 
     * Approval example:
     * ```
     * {
     *     "pagelen": 20,
     *     "values": [
     *         {
     *             "approval": {
     *                 "date": "2019-09-27T00:37:19.849534+00:00",
     *                 "pullrequest": {
     *                     "type": "pullrequest",
     *                     "id": 5695,
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
     *                         }
     *                     },
     *                     "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
     *                 },
     *                 "user": {
     *                     "display_name": "Name Lastname",
     *                     "uuid": "{}",
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/%7B%7D/"
     *                         },
     *                         "avatar": {
     *                             "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
     *                         }
     *                     },
     *                     "type": "user",
     *                     "nickname": "Name",
     *                     "account_id": ""
     *                 }
     *             },
     *             "pull_request": {
     *                 "type": "pullrequest",
     *                 "id": 5695,
     *                 "links": {
     *                     "self": {
     *                         "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
     *                     },
     *                     "html": {
     *                         "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
     *                     }
     *                 },
     *                 "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
     *             }
     *         }
     *     ]
     * }
     * ```
    **/
    public openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsActivityResponse getRepositoriesWorkspaceRepoSlugPullrequestsActivity(openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsActivityRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pullrequests/activity", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsActivityResponse res = new openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsActivityResponse() {{
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
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
     * getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId - Returns the specified pull request.
    **/
    public openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdResponse getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId(openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdResponse res = new openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdResponse() {{
            pullrequest = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.pullrequest = out;
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
     * getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivity - Returns a paginated list of the pull request's activity log.
     * 
     * This handler serves both a v20 and internal endpoint. The v20 endpoint
     * returns reviewer comments, updates, approvals and request changes. The internal
     * endpoint includes those plus tasks and attachments.
     * 
     * Comments created on a file or a line of code have an inline property.
     * 
     * Comment example:
     * ```
     * {
     *     "pagelen": 20,
     *     "values": [
     *         {
     *             "comment": {
     *                 "links": {
     *                     "self": {
     *                         "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695/comments/118571088"
     *                     },
     *                     "html": {
     *                         "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695/_/diff#comment-118571088"
     *                     }
     *                 },
     *                 "deleted": false,
     *                 "pullrequest": {
     *                     "type": "pullrequest",
     *                     "id": 5695,
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
     *                         }
     *                     },
     *                     "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
     *                 },
     *                 "content": {
     *                     "raw": "inline with to a dn from lines",
     *                     "markup": "markdown",
     *                     "html": "<p>inline with to a dn from lines</p>",
     *                     "type": "rendered"
     *                 },
     *                 "created_on": "2019-09-27T00:33:46.039178+00:00",
     *                 "user": {
     *                     "display_name": "Name Lastname",
     *                     "uuid": "{}",
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/%7B%7D/"
     *                         },
     *                         "avatar": {
     *                             "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
     *                         }
     *                     },
     *                     "type": "user",
     *                     "nickname": "Name",
     *                     "account_id": ""
     *                 },
     *                 "created_on": "2019-09-27T00:33:46.039178+00:00",
     *                 "user": {
     *                     "display_name": "Name Lastname",
     *                     "uuid": "{}",
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/%7B%7D/"
     *                         },
     *                         "avatar": {
     *                             "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
     *                         }
     *                     },
     *                     "type": "user",
     *                     "nickname": "Name",
     *                     "account_id": ""
     *                 },
     *                 "updated_on": "2019-09-27T00:33:46.055384+00:00",
     *                 "inline": {
     *                     "context_lines": "",
     *                     "to": null,
     *                     "path": "",
     *                     "outdated": false,
     *                     "from": 211
     *                 },
     *                 "type": "pullrequest_comment",
     *                 "id": 118571088
     *             },
     *             "pull_request": {
     *                 "type": "pullrequest",
     *                 "id": 5695,
     *                 "links": {
     *                     "self": {
     *                         "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
     *                     },
     *                     "html": {
     *                         "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
     *                     }
     *                 },
     *                 "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
     *             }
     *         }
     *     ]
     * }
     * ```
     * 
     * Updates include a state property of OPEN, MERGED, or DECLINED.
     * 
     * Update example:
     * ```
     * {
     *     "pagelen": 20,
     *     "values": [
     *         {
     *             "update": {
     *                 "description": "",
     *                 "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it",
     *                 "destination": {
     *                     "commit": {
     *                         "type": "commit",
     *                         "hash": "6a2c16e4a152",
     *                         "links": {
     *                             "self": {
     *                                 "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/commit/6a2c16e4a152"
     *                             },
     *                             "html": {
     *                                 "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6a2c16e4a152"
     *                             }
     *                         }
     *                     },
     *                     "branch": {
     *                         "name": "master"
     *                     },
     *                     "repository": {
     *                         "name": "Atlaskit-MK-2",
     *                         "type": "repository",
     *                         "full_name": "atlassian/atlaskit-mk-2",
     *                         "links": {
     *                             "self": {
     *                                 "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2"
     *                             },
     *                             "html": {
     *                                 "href": "https://bitbucket.org/atlassian/atlaskit-mk-2"
     *                             },
     *                             "avatar": {
     *                                 "href": "https://bytebucket.org/ravatar/%7B%7D?ts=js"
     *                             }
     *                         },
     *                         "uuid": "{}"
     *                     }
     *                 },
     *                 "reason": "",
     *                 "source": {
     *                     "commit": {
     *                         "type": "commit",
     *                         "hash": "728c8bad1813",
     *                         "links": {
     *                             "self": {
     *                                 "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/commit/728c8bad1813"
     *                             },
     *                             "html": {
     *                                 "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/commits/728c8bad1813"
     *                             }
     *                         }
     *                     },
     *                     "branch": {
     *                         "name": "username/NONE-add-onClick-prop-for-accessibility"
     *                     },
     *                     "repository": {
     *                         "name": "Atlaskit-MK-2",
     *                         "type": "repository",
     *                         "full_name": "atlassian/atlaskit-mk-2",
     *                         "links": {
     *                             "self": {
     *                                 "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2"
     *                             },
     *                             "html": {
     *                                 "href": "https://bitbucket.org/atlassian/atlaskit-mk-2"
     *                             },
     *                             "avatar": {
     *                                 "href": "https://bytebucket.org/ravatar/%7B%7D?ts=js"
     *                             }
     *                         },
     *                         "uuid": "{}"
     *                     }
     *                 },
     *                 "state": "OPEN",
     *                 "author": {
     *                     "display_name": "Name Lastname",
     *                     "uuid": "{}",
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/%7B%7D/"
     *                         },
     *                         "avatar": {
     *                             "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
     *                         }
     *                     },
     *                     "type": "user",
     *                     "nickname": "Name",
     *                     "account_id": ""
     *                 },
     *                 "date": "2019-05-10T06:48:25.305565+00:00"
     *             },
     *             "pull_request": {
     *                 "type": "pullrequest",
     *                 "id": 5695,
     *                 "links": {
     *                     "self": {
     *                         "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
     *                     },
     *                     "html": {
     *                         "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
     *                     }
     *                 },
     *                 "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
     *             }
     *         }
     *     ]
     * }
     * ```
     * 
     * Approval example:
     * ```
     * {
     *     "pagelen": 20,
     *     "values": [
     *         {
     *             "approval": {
     *                 "date": "2019-09-27T00:37:19.849534+00:00",
     *                 "pullrequest": {
     *                     "type": "pullrequest",
     *                     "id": 5695,
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
     *                         }
     *                     },
     *                     "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
     *                 },
     *                 "user": {
     *                     "display_name": "Name Lastname",
     *                     "uuid": "{}",
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/%7B%7D/"
     *                         },
     *                         "avatar": {
     *                             "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
     *                         }
     *                     },
     *                     "type": "user",
     *                     "nickname": "Name",
     *                     "account_id": ""
     *                 }
     *             },
     *             "pull_request": {
     *                 "type": "pullrequest",
     *                 "id": 5695,
     *                 "links": {
     *                     "self": {
     *                         "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
     *                     },
     *                     "html": {
     *                         "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
     *                     }
     *                 },
     *                 "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
     *             }
     *         }
     *     ]
     * }
     * ```
    **/
    public openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityResponse getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivity(openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/activity", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityResponse res = new openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityResponse() {{
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
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
     * getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments - Returns a paginated list of the pull request's comments.
     * 
     * This includes both global, inline comments and replies.
     * 
     * The default sorting is oldest to newest and can be overridden with
     * the `sort` query parameter.
     * 
     * This endpoint also supports filtering and sorting of the results. See
     * [filtering and sorting](../../../../../../meta/filtering) for more
     * details.
    **/
    public openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsResponse getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments(openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsResponse res = new openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsResponse() {{
            paginatedPullrequestComments = null;
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedPullrequestComments out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedPullrequestComments.class);
                res.paginatedPullrequestComments = out;
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
     * getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId - Returns a specific pull request comment.
    **/
    public openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResponse getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId(openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResponse res = new openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResponse() {{
            pullrequestComment = null;
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
                res.pullrequestComment = out;
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
     * getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommits - Returns a paginated list of the pull request's commits.
     * 
     * These are the commits that are being merged into the destination
     * branch when the pull requests gets accepted.
    **/
    public openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsResponse getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommits(openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/commits", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsResponse res = new openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsResponse() {{
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
     * getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiff - Redirects to the [repository diff](../../diff/%7Bspec%7D)
     * with the revspec that corresponds to the pull request.
    **/
    public openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffResponse getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiff(openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/diff", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffResponse res = new openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 302) {
        }

        return res;
    }
	
	
    /**
     * getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstat - Redirects to the [repository diffstat](../../diffstat/%7Bspec%7D)
     * with the revspec that corresponds to the pull request.
    **/
    public openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatResponse getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstat(openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/diffstat", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatResponse res = new openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 302) {
        }

        return res;
    }
	
	
    /**
     * getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskId - When merging a pull request takes too long, the client receives a
     * task ID along with a 202 status code. The task ID can be used in a call
     * to this endpoint to check the status of a merge task.
     * 
     * ```
     * curl -X GET https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/<task_id>
     * ```
     * 
     * If the merge task is not yet finished, a PENDING status will be returned.
     * 
     * ```
     * HTTP/2 200
     * {
     *     "task_status": "PENDING",
     *     "links": {
     *         "self": {
     *             "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/<task_id>"
     *         }
     *     }
     * }
     * ```
     * 
     * If the merge was successful, a SUCCESS status will be returned.
     * 
     * ```
     * HTTP/2 200
     * {
     *     "task_status": "SUCCESS",
     *     "links": {
     *         "self": {
     *             "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/<task_id>"
     *         }
     *     },
     *     "merge_result": <the merged pull request object>
     * }
     * ```
     * 
     * If the merge task failed, an error will be returned.
     * 
     * ```
     * {
     *     "type": "error",
     *     "error": {
     *         "message": "<error message>"
     *     }
     * }
     * ```
    **/
    public openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdResponse getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskId(openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/merge/task-status/{task_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdResponse res = new openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 403) {
        }

        return res;
    }
	
	
    /**
     * getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatch - Redirects to the [repository patch](../../patch/%7Bspec%7D)
     * with the revspec that corresponds to pull request.
    **/
    public openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchResponse getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatch(openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/patch", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchResponse res = new openapisdk.models.operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 302) {
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
     * postRepositoriesWorkspaceRepoSlugPullrequests - Creates a new pull request where the destination repository is
     * this repository and the author is the authenticated user.
     * 
     * The minimum required fields to create a pull request are `title` and
     * `source`, specified by a branch name.
     * 
     * ```
     * curl https://api.bitbucket.org/2.0/repositories/my-username/my-repository/pullrequests \
     *     -u my-username:my-password \
     *     --request POST \
     *     --header 'Content-Type: application/json' \
     *     --data '{
     *         "title": "My Title",
     *         "source": {
     *             "branch": {
     *                 "name": "staging"
     *             }
     *         }
     *     }'
     * ```
     * 
     * If the pull request's `destination` is not specified, it will default
     * to the `repository.mainbranch`. To open a pull request to a
     * different branch, say from a feature branch to a staging branch,
     * specify a `destination` (same format as the `source`):
     * 
     * ```
     * {
     *     "title": "My Title",
     *     "source": {
     *         "branch": {
     *             "name": "my-feature-branch"
     *         }
     *     },
     *     "destination": {
     *         "branch": {
     *             "name": "staging"
     *         }
     *     }
     * }
     * ```
     * 
     * Reviewers can be specified by adding an array of user objects as the
     * `reviewers` property.
     * 
     * ```
     * {
     *     "title": "My Title",
     *     "source": {
     *         "branch": {
     *             "name": "my-feature-branch"
     *         }
     *     },
     *     "reviewers": [
     *         {
     *             "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
     *         }
     *     ]
     * }
     * ```
     * 
     * Other fields:
     * 
     * * `description` - a string
     * * `close_source_branch` - boolean that specifies if the source branch should be closed upon merging
    **/
    public openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugPullrequestsResponse postRepositoriesWorkspaceRepoSlugPullrequests(openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugPullrequestsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pullrequests", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugPullrequestsResponse res = new openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugPullrequestsResponse() {{
            pullrequest = null;
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
                res.pullrequest = out;
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
        else if (httpRes.statusCode() == 401) {
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
     * postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprove - Approve the specified pull request as the authenticated user.
    **/
    public openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveResponse postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprove(openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/approve", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveResponse res = new openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveResponse() {{
            participant = null;
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
                res.participant = out;
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
     * postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments - Creates a new pull request comment.
     * 
     * Returns the newly created pull request comment.
    **/
    public openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsResponse postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments(openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments", request.pathParams);
        
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

        openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsResponse res = new openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsResponse() {{
            pullrequestComment = null;
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
                res.pullrequestComment = out;
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
     * postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDecline - Declines the pull request.
    **/
    public openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclineResponse postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDecline(openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclineRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/decline", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclineResponse res = new openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclineResponse() {{
            pullrequest = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.pullrequest = out;
            }
        }
        else if (httpRes.statusCode() == 555) {
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
     * postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMerge - Merges the pull request.
    **/
    public openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeResponse postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMerge(openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/merge", request.pathParams);
        
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
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeResponse res = new openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeResponse() {{
            pullrequest = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.pullrequest = out;
            }
        }
        else if (httpRes.statusCode() == 202) {
        }
        else if (httpRes.statusCode() == 555) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesResponse postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChanges(openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/request-changes", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesResponse res = new openapisdk.models.operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesResponse() {{
            participant = null;
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
                res.participant = out;
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
     * putRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername - Adds the specified user to the repository's list of default
     * reviewers.
     * 
     * This method is idempotent. Adding a user a second time has no effect.
    **/
    public openapisdk.models.operations.PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse putRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername(openapisdk.models.operations.PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse res = new openapisdk.models.operations.PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse() {{
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
     * putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId - Mutates the specified pull request.
     * 
     * This can be used to change the pull request's branches or description.
     * 
     * Only open pull requests can be mutated.
    **/
    public openapisdk.models.operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdResponse putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId(openapisdk.models.operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdResponse res = new openapisdk.models.operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdResponse() {{
            pullrequest = null;
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
                res.pullrequest = out;
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
     * putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId - Updates a specific pull request comment.
    **/
    public openapisdk.models.operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResponse putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId(openapisdk.models.operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}", request.pathParams);
        
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

        openapisdk.models.operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResponse res = new openapisdk.models.operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResponse() {{
            pullrequestComment = null;
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
                res.pullrequestComment = out;
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
	
}