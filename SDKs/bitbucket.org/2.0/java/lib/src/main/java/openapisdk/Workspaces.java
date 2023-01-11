package openapisdk;

import openapisdk.utils.HTTPClient;
import java.util.function.Function;
import java.util.stream.Collectors;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class Workspaces {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Workspaces(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * deleteWorkspacesWorkspaceHooksUid - Deletes the specified webhook subscription from the given workspace.
    **/
    public openapisdk.models.operations.DeleteWorkspacesWorkspaceHooksUidResponse deleteWorkspacesWorkspaceHooksUid(openapisdk.models.operations.DeleteWorkspacesWorkspaceHooksUidRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/workspaces/{workspace}/hooks/{uid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteWorkspacesWorkspaceHooksUidResponse res = new openapisdk.models.operations.DeleteWorkspacesWorkspaceHooksUidResponse() {{
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
	
	
    /**
     * getUserPermissionsWorkspaces - Returns an object for each workspace the caller is a member of, and
     * their effective role - the highest level of privilege the caller has.
     * If a user is a member of multiple groups with distinct roles, only the
     * highest level is returned.
     * 
     * Permissions can be:
     * 
     * * `owner`
     * * `collaborator`
     * * `member`
     * 
     * Example:
     * 
     * ```
     * $ curl https://api.bitbucket.org/2.0/user/permissions/workspaces
     * 
     * {
     *   "pagelen": 10,
     *   "page": 1,
     *   "size": 1,
     *   "values": [
     *     {
     *       "type": "workspace_membership",
     *       "permission": "owner",
     *       "last_accessed": "2019-03-07T12:35:02.900024+00:00",
     *       "added_on": "2018-10-11T17:42:02.961424+00:00",
     *       "user": {
     *         "type": "user",
     *         "uuid": "{470c176d-3574-44ea-bb41-89e8638bcca4}",
     *         "nickname": "evzijst",
     *         "display_name": "Erik van Zijst",
     *       },
     *       "workspace": {
     *         "type": "workspace",
     *         "uuid": "{a15fb181-db1f-48f7-b41f-e1eff06929d6}",
     *         "slug": "bbworkspace1",
     *         "name": "Atlassian Bitbucket",
     *       }
     *     }
     *   ]
     * }
     * ```
     * 
     * Results may be further [filtered or sorted](../../../meta/filtering) by
     * workspace or permission by adding the following query string parameters:
     * 
     * * `q=workspace.slug="bbworkspace1"` or `q=permission="owner"`
     * * `sort=workspace.slug`
     * 
     * Note that the query parameter values need to be URL escaped so that `=`
     * would become `%3D`.
    **/
    public openapisdk.models.operations.GetUserPermissionsWorkspacesResponse getUserPermissionsWorkspaces(openapisdk.models.operations.GetUserPermissionsWorkspacesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/user/permissions/workspaces");
        
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

        openapisdk.models.operations.GetUserPermissionsWorkspacesResponse res = new openapisdk.models.operations.GetUserPermissionsWorkspacesResponse() {{
            paginatedWorkspaceMemberships = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedWorkspaceMemberships out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedWorkspaceMemberships.class);
                res.paginatedWorkspaceMemberships = out;
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
     * getWorkspaces - Returns a list of workspaces accessible by the authenticated user.
     * 
     * Example:
     * 
     * ```
     * $ curl https://api.bitbucket.org/2.0/workspaces
     * 
     * {
     *   "pagelen": 10,
     *   "page": 1,
     *   "size": 1,
     *   "values": [
     *     {
     *         "uuid": "{a15fb181-db1f-48f7-b41f-e1eff06929d6}",
     *         "links": {
     *             "owners": {
     *                 "href": "https://api.bitbucket.org/2.0/workspaces/bbworkspace1/members?q=permission%3D%22owner%22"
     *             },
     *             "self": {
     *                 "href": "https://api.bitbucket.org/2.0/workspaces/bbworkspace1"
     *             },
     *             "repositories": {
     *                 "href": "https://api.bitbucket.org/2.0/repositories/bbworkspace1"
     *             },
     *             "snippets": {
     *                 "href": "https://api.bitbucket.org/2.0/snippets/bbworkspace1"
     *             },
     *             "html": {
     *                 "href": "https://bitbucket.org/bbworkspace1/"
     *             },
     *             "avatar": {
     *                 "href": "https://bitbucket.org/workspaces/bbworkspace1/avatar/?ts=1543465801"
     *             },
     *             "members": {
     *                 "href": "https://api.bitbucket.org/2.0/workspaces/bbworkspace1/members"
     *             },
     *             "projects": {
     *                 "href": "https://api.bitbucket.org/2.0/workspaces/bbworkspace1/projects"
     *             }
     *         },
     *         "created_on": "2018-11-14T19:15:05.058566+00:00",
     *         "type": "workspace",
     *         "slug": "bbworkspace1",
     *         "is_private": true,
     *         "name": "Atlassian Bitbucket"
     *     }
     *   ]
     * }
     * ```
     * 
     * Results may be further [filtered or sorted](../meta/filtering) by
     * workspace or permission by adding the following query string parameters:
     * 
     * * `q=slug="bbworkspace1"` or `q=is_private=true`
     * * `sort=created_on`
     * 
     * Note that the query parameter values need to be URL escaped so that `=`
     * would become `%3D`.
    **/
    public openapisdk.models.operations.GetWorkspacesResponse getWorkspaces(openapisdk.models.operations.GetWorkspacesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/workspaces");
        
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

        openapisdk.models.operations.GetWorkspacesResponse res = new openapisdk.models.operations.GetWorkspacesResponse() {{
            paginatedWorkspaces = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedWorkspaces out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedWorkspaces.class);
                res.paginatedWorkspaces = out;
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
     * getWorkspacesWorkspace - Returns the requested workspace.
    **/
    public openapisdk.models.operations.GetWorkspacesWorkspaceResponse getWorkspacesWorkspace(openapisdk.models.operations.GetWorkspacesWorkspaceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/workspaces/{workspace}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetWorkspacesWorkspaceResponse res = new openapisdk.models.operations.GetWorkspacesWorkspaceResponse() {{
            workspace = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.workspace = out;
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
     * getWorkspacesWorkspaceHooks - Returns a paginated list of webhooks installed on this workspace.
    **/
    public openapisdk.models.operations.GetWorkspacesWorkspaceHooksResponse getWorkspacesWorkspaceHooks(openapisdk.models.operations.GetWorkspacesWorkspaceHooksRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/workspaces/{workspace}/hooks", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetWorkspacesWorkspaceHooksResponse res = new openapisdk.models.operations.GetWorkspacesWorkspaceHooksResponse() {{
            paginatedWebhookSubscriptions = null;
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedWebhookSubscriptions out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedWebhookSubscriptions.class);
                res.paginatedWebhookSubscriptions = out;
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
     * getWorkspacesWorkspaceHooksUid - Returns the webhook with the specified id installed on the given
     * workspace.
    **/
    public openapisdk.models.operations.GetWorkspacesWorkspaceHooksUidResponse getWorkspacesWorkspaceHooksUid(openapisdk.models.operations.GetWorkspacesWorkspaceHooksUidRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/workspaces/{workspace}/hooks/{uid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetWorkspacesWorkspaceHooksUidResponse res = new openapisdk.models.operations.GetWorkspacesWorkspaceHooksUidResponse() {{
            webhookSubscription = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.webhookSubscription = out;
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
     * getWorkspacesWorkspaceMembers - Returns all members of the requested workspace.
    **/
    public openapisdk.models.operations.GetWorkspacesWorkspaceMembersResponse getWorkspacesWorkspaceMembers(openapisdk.models.operations.GetWorkspacesWorkspaceMembersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/workspaces/{workspace}/members", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetWorkspacesWorkspaceMembersResponse res = new openapisdk.models.operations.GetWorkspacesWorkspaceMembersResponse() {{
            paginatedWorkspaceMemberships = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedWorkspaceMemberships out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedWorkspaceMemberships.class);
                res.paginatedWorkspaceMemberships = out;
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
     * getWorkspacesWorkspaceMembersMember - Returns the workspace membership, which includes
     * a `User` object for the member and a `Workspace` object
     * for the requested workspace.
    **/
    public openapisdk.models.operations.GetWorkspacesWorkspaceMembersMemberResponse getWorkspacesWorkspaceMembersMember(openapisdk.models.operations.GetWorkspacesWorkspaceMembersMemberRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/workspaces/{workspace}/members/{member}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetWorkspacesWorkspaceMembersMemberResponse res = new openapisdk.models.operations.GetWorkspacesWorkspaceMembersMemberResponse() {{
            workspaceMembership = null;
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
                res.workspaceMembership = out;
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
     * getWorkspacesWorkspacePermissions - Returns the list of members in a workspace
     * and their permission levels.
     * Permission can be:
     * * `owner`
     * * `collaborator`
     * * `member`
     * 
     * Example:
     * 
     * ```
     * $ curl -X https://api.bitbucket.org/2.0/workspaces/bbworkspace1/permissions
     * 
     * {
     *     "pagelen": 10,
     *     "values": [
     *         {
     *             "permission": "owner",
     *             "type": "workspace_membership",
     *             "user": {
     *                 "type": "user",
     *                 "uuid": "{470c176d-3574-44ea-bb41-89e8638bcca4}",
     *                 "display_name": "Erik van Zijst",
     *             },
     *             "workspace": {
     *                 "type": "workspace",
     *                 "uuid": "{a15fb181-db1f-48f7-b41f-e1eff06929d6}",
     *                 "slug": "bbworkspace1",
     *                 "name": "Atlassian Bitbucket",
     *             }
     *         },
     *         {
     *             "permission": "member",
     *             "type": "workspace_membership",
     *             "user": {
     *                 "type": "user",
     *                 "nickname": "seanaty",
     *                 "display_name": "Sean Conaty",
     *                 "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
     *             },
     *             "workspace": {
     *                 "type": "workspace",
     *                 "uuid": "{a15fb181-db1f-48f7-b41f-e1eff06929d6}",
     *                 "slug": "bbworkspace1",
     *                 "name": "Atlassian Bitbucket",
     *             }
     *         }
     *     ],
     *     "page": 1,
     *     "size": 2
     * }
     * ```
     * 
     * Results may be further [filtered](../../../meta/filtering) by
     * permission by adding the following query string parameters:
     * 
     * * `q=permission="owner"`
    **/
    public openapisdk.models.operations.GetWorkspacesWorkspacePermissionsResponse getWorkspacesWorkspacePermissions(openapisdk.models.operations.GetWorkspacesWorkspacePermissionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/workspaces/{workspace}/permissions", request.pathParams);
        
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

        openapisdk.models.operations.GetWorkspacesWorkspacePermissionsResponse res = new openapisdk.models.operations.GetWorkspacesWorkspacePermissionsResponse() {{
            paginatedWorkspaceMemberships = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedWorkspaceMemberships out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedWorkspaceMemberships.class);
                res.paginatedWorkspaceMemberships = out;
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
     * getWorkspacesWorkspacePermissionsRepositories - Returns an object for each repository permission for all of a
     * workspace's repositories.
     * 
     * Permissions returned are effective permissions: the highest level of
     * permission the user has. This does not distinguish between direct and
     * indirect (group) privileges.
     * 
     * Only users with admin permission for the team may access this resource.
     * 
     * Permissions can be:
     * 
     * * `admin`
     * * `write`
     * * `read`
     * 
     * Example:
     * 
     * ```
     * $ curl https://api.bitbucket.org/2.0/workspaces/atlassian_tutorial/permissions/repositories
     * 
     * {
     *   "pagelen": 10,
     *   "values": [
     *     {
     *       "type": "repository_permission",
     *       "user": {
     *         "type": "user",
     *         "display_name": "Erik van Zijst",
     *         "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}"
     *       },
     *       "repository": {
     *         "type": "repository",
     *         "name": "geordi",
     *         "full_name": "atlassian_tutorial/geordi",
     *         "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
     *       },
     *       "permission": "admin"
     *     },
     *     {
     *       "type": "repository_permission",
     *       "user": {
     *         "type": "user",
     *         "display_name": "Sean Conaty",
     *         "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
     *       },
     *       "repository": {
     *         "type": "repository",
     *         "name": "geordi",
     *         "full_name": "atlassian_tutorial/geordi",
     *         "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
     *       },
     *       "permission": "write"
     *     },
     *     {
     *       "type": "repository_permission",
     *       "user": {
     *         "type": "user",
     *         "display_name": "Jeff Zeng",
     *         "uuid": "{47f92a9a-c3a3-4d0b-bc4e-782a969c5c72}"
     *       },
     *       "repository": {
     *         "type": "repository",
     *         "name": "whee",
     *         "full_name": "atlassian_tutorial/whee",
     *         "uuid": "{30ba25e9-51ff-4555-8dd0-fc7ee2fa0895}"
     *       },
     *       "permission": "admin"
     *     }
     *   ],
     *   "page": 1,
     *   "size": 3
     * }
     * ```
     * 
     * Results may be further [filtered or sorted](../../../../meta/filtering)
     * by repository, user, or permission by adding the following query string
     * parameters:
     * 
     * * `q=repository.name="geordi"` or `q=permission>"read"`
     * * `sort=user.display_name`
     * 
     * Note that the query parameter values need to be URL escaped so that `=`
     * would become `%3D`.
    **/
    public openapisdk.models.operations.GetWorkspacesWorkspacePermissionsRepositoriesResponse getWorkspacesWorkspacePermissionsRepositories(openapisdk.models.operations.GetWorkspacesWorkspacePermissionsRepositoriesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/workspaces/{workspace}/permissions/repositories", request.pathParams);
        
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

        openapisdk.models.operations.GetWorkspacesWorkspacePermissionsRepositoriesResponse res = new openapisdk.models.operations.GetWorkspacesWorkspacePermissionsRepositoriesResponse() {{
            paginatedRepositoryPermissions = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedRepositoryPermissions out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedRepositoryPermissions.class);
                res.paginatedRepositoryPermissions = out;
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

        return res;
    }
	
	
    /**
     * getWorkspacesWorkspacePermissionsRepositoriesRepoSlug - Returns an object for the repository permission of each user in the
     * requested repository.
     * 
     * Permissions returned are effective permissions: the highest level of
     * permission the user has. This does not distinguish between direct and
     * indirect (group) privileges.
     * 
     * Only users with admin permission for the repository may access this resource.
     * 
     * Permissions can be:
     * 
     * * `admin`
     * * `write`
     * * `read`
     * 
     * Example:
     * 
     * ```
     * $ curl https://api.bitbucket.org/2.0/workspaces/atlassian_tutorial/permissions/repositories/geordi
     * 
     * {
     *   "pagelen": 10,
     *   "values": [
     *     {
     *       "type": "repository_permission",
     *       "user": {
     *         "type": "user",
     *         "display_name": "Erik van Zijst",
     *         "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}"
     *       },
     *       "repository": {
     *         "type": "repository",
     *         "name": "geordi",
     *         "full_name": "atlassian_tutorial/geordi",
     *         "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
     *       },
     *       "permission": "admin"
     *     },
     *     {
     *       "type": "repository_permission",
     *       "user": {
     *         "type": "user",
     *         "display_name": "Sean Conaty",
     *         "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
     *       },
     *       "repository": {
     *         "type": "repository",
     *         "name": "geordi",
     *         "full_name": "atlassian_tutorial/geordi",
     *         "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
     *       },
     *       "permission": "write"
     *     }
     *   ],
     *   "page": 1,
     *   "size": 2
     * }
     * ```
     * 
     * Results may be further [filtered or sorted](../../../../meta/filtering)
     * by user, or permission by adding the following query string parameters:
     * 
     * * `q=permission>"read"`
     * * `sort=user.display_name`
     * 
     * Note that the query parameter values need to be URL escaped so that `=`
     * would become `%3D`.
    **/
    public openapisdk.models.operations.GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugResponse getWorkspacesWorkspacePermissionsRepositoriesRepoSlug(openapisdk.models.operations.GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/workspaces/{workspace}/permissions/repositories/{repo_slug}", request.pathParams);
        
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

        openapisdk.models.operations.GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugResponse res = new openapisdk.models.operations.GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugResponse() {{
            paginatedRepositoryPermissions = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedRepositoryPermissions out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedRepositoryPermissions.class);
                res.paginatedRepositoryPermissions = out;
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

        return res;
    }
	
	
    /**
     * getWorkspacesWorkspaceProjects - Returns the list of projects in this workspace.
    **/
    public openapisdk.models.operations.GetWorkspacesWorkspaceProjectsResponse getWorkspacesWorkspaceProjects(openapisdk.models.operations.GetWorkspacesWorkspaceProjectsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/workspaces/{workspace}/projects", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetWorkspacesWorkspaceProjectsResponse res = new openapisdk.models.operations.GetWorkspacesWorkspaceProjectsResponse() {{
            paginatedProjects = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedProjects out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedProjects.class);
                res.paginatedProjects = out;
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
     * getWorkspacesWorkspaceProjectsProjectKey - Returns the requested project.
    **/
    public openapisdk.models.operations.GetWorkspacesWorkspaceProjectsProjectKeyResponse getWorkspacesWorkspaceProjectsProjectKey(openapisdk.models.operations.GetWorkspacesWorkspaceProjectsProjectKeyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/workspaces/{workspace}/projects/{project_key}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetWorkspacesWorkspaceProjectsProjectKeyResponse res = new openapisdk.models.operations.GetWorkspacesWorkspaceProjectsProjectKeyResponse() {{
            project = null;
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
                res.project = out;
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
     * postWorkspacesWorkspaceHooks - Creates a new webhook on the specified workspace.
     * 
     * Workspace webhooks are fired for events from all repositories contained
     * by that workspace.
     * 
     * Note that only owners can install webhooks on workspaces.
    **/
    public openapisdk.models.operations.PostWorkspacesWorkspaceHooksResponse postWorkspacesWorkspaceHooks(openapisdk.models.operations.PostWorkspacesWorkspaceHooksRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/workspaces/{workspace}/hooks", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostWorkspacesWorkspaceHooksResponse res = new openapisdk.models.operations.PostWorkspacesWorkspaceHooksResponse() {{
            webhookSubscription = null;
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
                res.webhookSubscription = out;
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
     * putWorkspacesWorkspaceHooksUid - Updates the specified webhook subscription.
     * 
     * The following properties can be mutated:
     * 
     * * `description`
     * * `url`
     * * `active`
     * * `events`
    **/
    public openapisdk.models.operations.PutWorkspacesWorkspaceHooksUidResponse putWorkspacesWorkspaceHooksUid(openapisdk.models.operations.PutWorkspacesWorkspaceHooksUidRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/workspaces/{workspace}/hooks/{uid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutWorkspacesWorkspaceHooksUidResponse res = new openapisdk.models.operations.PutWorkspacesWorkspaceHooksUidResponse() {{
            webhookSubscription = null;
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
                res.webhookSubscription = out;
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