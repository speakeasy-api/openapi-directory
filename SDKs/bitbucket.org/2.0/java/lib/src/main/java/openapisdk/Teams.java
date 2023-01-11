package openapisdk;

import openapisdk.utils.HTTPClient;
import java.util.function.Function;
import java.util.stream.Collectors;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class Teams {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Teams(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * deleteTeamsUsernameHooksUid - Deletes the specified webhook subscription from the given team
     * account.
     * 
     * **This endpoint has been deprecated, and you should
     * use the new [workspace hooks](../../../workspaces/%7Bworkspace%7D/hooks/%7Buid%7D#delete) endpoint.
     * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    public openapisdk.models.operations.DeleteTeamsUsernameHooksUidResponse deleteTeamsUsernameHooksUid(openapisdk.models.operations.DeleteTeamsUsernameHooksUidRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{username}/hooks/{uid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteTeamsUsernameHooksUidResponse res = new openapisdk.models.operations.DeleteTeamsUsernameHooksUidResponse() {{
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
     * getTeams - Returns all the teams that the authenticated user is associated
     * with.
     * 
     * **This endpoint has been deprecated,
     * and you should use the [workspaces](./workspaces) endpoint.
     * For more information, see [this post](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    public openapisdk.models.operations.GetTeamsResponse getTeams(openapisdk.models.operations.GetTeamsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams");
        
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

        openapisdk.models.operations.GetTeamsResponse res = new openapisdk.models.operations.GetTeamsResponse() {{
            paginatedTeams = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedTeams out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedTeams.class);
                res.paginatedTeams = out;
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
     * getTeamsUsername - Gets the public information associated with a team.
     * 
     * If the team's profile is private, `location`, `website` and
     * `created_on` elements are omitted.
     * 
     * **This endpoint has been deprecated,
     * and you should use the [workspace](../workspaces/%7Bworkspace%7D) endpoint.
     * For more information, see [this post](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    public openapisdk.models.operations.GetTeamsUsernameResponse getTeamsUsername(openapisdk.models.operations.GetTeamsUsernameRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{username}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTeamsUsernameResponse res = new openapisdk.models.operations.GetTeamsUsernameResponse() {{
            team = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.team = out;
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
     * getTeamsUsernameFollowers - Returns the list of accounts that are following this team.
     * 
     * **This endpoint has been deprecated. There is no workspaces replacement.
     * For more information, see [this post](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    public openapisdk.models.operations.GetTeamsUsernameFollowersResponse getTeamsUsernameFollowers(openapisdk.models.operations.GetTeamsUsernameFollowersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{username}/followers", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTeamsUsernameFollowersResponse res = new openapisdk.models.operations.GetTeamsUsernameFollowersResponse() {{
            paginatedUsers = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedUsers out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedUsers.class);
                res.paginatedUsers = out;
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
     * getTeamsUsernameFollowing - Returns the list of accounts this team is following.
     * 
     * **This endpoint has been deprecated. There is no workspaces replacement.
     * For more information, see [this post](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    public openapisdk.models.operations.GetTeamsUsernameFollowingResponse getTeamsUsernameFollowing(openapisdk.models.operations.GetTeamsUsernameFollowingRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{username}/following", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTeamsUsernameFollowingResponse res = new openapisdk.models.operations.GetTeamsUsernameFollowingResponse() {{
            paginatedUsers = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedUsers out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedUsers.class);
                res.paginatedUsers = out;
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
     * getTeamsUsernameHooks - Returns a paginated list of webhooks installed on this team.
     * 
     * **This endpoint has been deprecated, and you should
     * use the new [workspace hooks](../../workspaces/%7Bworkspace%7D/hooks#get) endpoint.
     * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    public openapisdk.models.operations.GetTeamsUsernameHooksResponse getTeamsUsernameHooks(openapisdk.models.operations.GetTeamsUsernameHooksRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{username}/hooks", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTeamsUsernameHooksResponse res = new openapisdk.models.operations.GetTeamsUsernameHooksResponse() {{
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
     * getTeamsUsernameHooksUid - Returns the webhook with the specified id installed on the given
     * team account.
     * 
     * **This endpoint has been deprecated, and you should
     * use the new [workspace hooks](../../../workspaces/%7Bworkspace%7D/hooks/%7Buid%7D#get) endpoint.
     * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    public openapisdk.models.operations.GetTeamsUsernameHooksUidResponse getTeamsUsernameHooksUid(openapisdk.models.operations.GetTeamsUsernameHooksUidRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{username}/hooks/{uid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTeamsUsernameHooksUidResponse res = new openapisdk.models.operations.GetTeamsUsernameHooksUidResponse() {{
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
     * getTeamsUsernameMembers - Returns all members of the specified team. Any member of any of the
     * team's groups is considered a member of the team. This includes users
     * in groups that may not actually have access to any of the team's
     * repositories.
     * 
     * **This operation has been deprecated due to privacy changes.
     * See the [announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/)
     * for details.
     * You should this [workspaces](../../workspaces/%7Bworkspace%7D/members) endpoint as a replacement.**
    **/
    public openapisdk.models.operations.GetTeamsUsernameMembersResponse getTeamsUsernameMembers(openapisdk.models.operations.GetTeamsUsernameMembersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{username}/members", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTeamsUsernameMembersResponse res = new openapisdk.models.operations.GetTeamsUsernameMembersResponse() {{
            user = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.user = out;
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
     * getTeamsUsernamePermissions - Returns an object for each team permission a user on the team has.
     * 
     * **This endpoint has been deprecated,
     * and you should use the [workspace permissions](../../workspaces/%7Bworkspace%7D/permissions) endpoint.
     * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
     * 
     * Permissions returned are effective permissions — if a user is a member of
     * multiple groups with distinct roles, only the highest level is returned.
     * 
     * Permissions can be:
     * 
     * * `admin`
     * * `collaborator`
     * 
     * Only users with admin permission for the team may access this resource.
     * 
     * Example:
     * 
     * ```
     * $ curl https://api.bitbucket.org/2.0/teams/atlassian_tutorial/permissions
     * 
     * {
     *   "pagelen": 10,
     *   "values": [
     *     {
     *       "permission": "admin",
     *       "type": "team_permission",
     *       "user": {
     *         "type": "user",
     *         "nickname": "evzijst",
     *         "display_name": "Erik van Zijst",
     *         "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}"
     *       },
     *       "team": {
     *         "display_name": "Atlassian Bitbucket",
     *         "uuid": "{4cc6108a-a241-4db0-96a5-64347ac04f87}"
     *       }
     *     },
     *     {
     *       "permission": "collaborator",
     *       "type": "team_permission",
     *       "user": {
     *         "type": "user",
     *         "nickname": "seanaty",
     *         "display_name": "Sean Conaty",
     *         "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
     *       },
     *       "team": {
     *         "display_name": "Atlassian Bitbucket",
     *         "uuid": "{4cc6108a-a241-4db0-96a5-64347ac04f87}"
     *       }
     *     }
     *   ],
     *   "page": 1,
     *   "size": 2
     * }
     * ```
     * 
     * Results may be further [filtered or sorted](../../../meta/filtering) by
     * team, user, or permission by adding the following query string
     * parameters:
     * 
     * * `q=user.uuid="{d301aafa-d676-4ee0-88be-962be7417567}"` or `q=permission="admin"`
     * * `sort=team.display_name`
     * 
     * Note that the query parameter values need to be URL escaped so that `=`
     * would become `%3D`.
    **/
    public openapisdk.models.operations.GetTeamsUsernamePermissionsResponse getTeamsUsernamePermissions(openapisdk.models.operations.GetTeamsUsernamePermissionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{username}/permissions", request.pathParams);
        
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

        openapisdk.models.operations.GetTeamsUsernamePermissionsResponse res = new openapisdk.models.operations.GetTeamsUsernamePermissionsResponse() {{
            paginatedTeamPermissions = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedTeamPermissions out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedTeamPermissions.class);
                res.paginatedTeamPermissions = out;
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
     * getTeamsUsernamePermissionsRepositories - Returns an object for each repository permission for all of a
     * team’s repositories.
     * 
     * **This endpoint has been deprecated,
     * and you should use the [workspace repository permissions](../../../workspaces/%7Bworkspace%7D/permissions/repositories) endpoint.
     * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
     * 
     * If the username URL parameter refers to a user account instead of
     * a team account, an object containing the repository permissions
     * of all the username's repositories will be returned.
     * 
     * Permissions returned are effective permissions — the highest level of
     * permission the user has. This does not include public repositories that
     * users are not granted any specific permission in, and does not
     * distinguish between direct and indirect privileges.
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
     * $ curl https://api.bitbucket.org/2.0/teams/atlassian_tutorial/permissions/repositories
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
     *         "full_name": "bitbucket/geordi",
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
     *         "full_name": "bitbucket/geordi",
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
     * by repository, user, or permission by adding the following query string
     * parameters:
     * 
     * * `q=repository.name="geordi"` or `q=permission>"read"`
     * * `sort=user.display_name`
     * 
     * Note that the query parameter values need to be URL escaped so that `=`
     * would become `%3D`.
    **/
    public openapisdk.models.operations.GetTeamsUsernamePermissionsRepositoriesResponse getTeamsUsernamePermissionsRepositories(openapisdk.models.operations.GetTeamsUsernamePermissionsRepositoriesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{username}/permissions/repositories", request.pathParams);
        
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

        openapisdk.models.operations.GetTeamsUsernamePermissionsRepositoriesResponse res = new openapisdk.models.operations.GetTeamsUsernamePermissionsRepositoriesResponse() {{
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
     * getTeamsUsernamePermissionsRepositoriesRepoSlug - Returns an object for each repository permission of a given repository.
     * 
     * **This endpoint has been deprecated,
     * and you should use the [workspace repository permissions](../../../../workspaces/%7Bworkspace%7D/permissions/repositories/%7Brepo_slug%7D) endpoint.
     * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
     * 
     * If the username URL parameter refers to a user account instead of
     * a team account, an object containing the repository permissions
     * of the username's repository will be returned.
     * 
     * Permissions returned are effective permissions — the highest level of
     * permission the user has. This does not include public repositories that
     * users are not granted any specific permission in, and does not
     * distinguish between direct and indirect privileges.
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
     * $ curl https://api.bitbucket.org/2.0/teams/atlassian_tutorial/permissions/repositories/geordi
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
     *         "full_name": "bitbucket/geordi",
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
     *         "full_name": "bitbucket/geordi",
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
    public openapisdk.models.operations.GetTeamsUsernamePermissionsRepositoriesRepoSlugResponse getTeamsUsernamePermissionsRepositoriesRepoSlug(openapisdk.models.operations.GetTeamsUsernamePermissionsRepositoriesRepoSlugRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{username}/permissions/repositories/{repo_slug}", request.pathParams);
        
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

        openapisdk.models.operations.GetTeamsUsernamePermissionsRepositoriesRepoSlugResponse res = new openapisdk.models.operations.GetTeamsUsernamePermissionsRepositoriesRepoSlugResponse() {{
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
     * getTeamsWorkspaceRepositories - All repositories in the given workspace. This includes any private
     * repositories the calling user has access to.
     * 
     * **This endpoint has been deprecated,
     * and you should use the [repository list](../../repositories/%7Bworkspace%7D) endpoint.
     * For more information, see the [deprecation announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    public openapisdk.models.operations.GetTeamsWorkspaceRepositoriesResponse getTeamsWorkspaceRepositories(openapisdk.models.operations.GetTeamsWorkspaceRepositoriesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{workspace}/repositories", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTeamsWorkspaceRepositoriesResponse res = new openapisdk.models.operations.GetTeamsWorkspaceRepositoriesResponse() {{
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
     * getUserPermissionsTeams - Returns an object for each team the caller is a member of, and their
     * effective role — the highest level of privilege the caller has. If a
     * user is a member of multiple groups with distinct roles, only the
     * highest level is returned.
     * 
     * **This endpoint has been deprecated,
     * and you should use the [workspace permissions](./workspaces) endpoint.
     * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
     * 
     * Permissions can be:
     * 
     * * `admin`
     * * `collaborator`
     * 
     * Example:
     * 
     * ```
     * $ curl https://api.bitbucket.org/2.0/user/permissions/teams
     * 
     * {
     *   "pagelen": 10,
     *   "values": [
     *     {
     *       "permission": "admin",
     *       "type": "team_permission",
     *       "user": {
     *         "type": "user",
     *         "nickname": "evzijst",
     *         "display_name": "Erik van Zijst",
     *         "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}"
     *       },
     *       "team": {
     *         "display_name": "Atlassian Bitbucket",
     *         "uuid": "{4cc6108a-a241-4db0-96a5-64347ac04f87}"
     *       }
     *     }
     *   ],
     *   "page": 1,
     *   "size": 1
     * }
     * ```
     * 
     * Results may be further [filtered or sorted](../../../meta/filtering) by
     * team or permission by adding the following query string parameters:
     * 
     * * `q=team.uuid="{4cc6108a-a241-4db0-96a5-64347ac04f87}"` or `q=permission="admin"`
     * * `sort=team.display_name`
     * 
     * Note that the query parameter values need to be URL escaped so that `=`
     * would become `%3D`.
    **/
    public openapisdk.models.operations.GetUserPermissionsTeamsResponse getUserPermissionsTeams(openapisdk.models.operations.GetUserPermissionsTeamsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/user/permissions/teams");
        
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

        openapisdk.models.operations.GetUserPermissionsTeamsResponse res = new openapisdk.models.operations.GetUserPermissionsTeamsResponse() {{
            paginatedTeamPermissions = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedTeamPermissions out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedTeamPermissions.class);
                res.paginatedTeamPermissions = out;
            }
        }

        return res;
    }
	
	
    /**
     * getUsersWorkspaceRepositories - All repositories in the given workspace. This includes any private
     * repositories the calling user has access to.
     * 
     * **This endpoint has been deprecated,
     * and you should use the [repository list](../../repositories/%7Bworkspace%7D) endpoint.
     * For more information, see the [deprecation announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    public openapisdk.models.operations.GetUsersWorkspaceRepositoriesResponse getUsersWorkspaceRepositories(openapisdk.models.operations.GetUsersWorkspaceRepositoriesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{workspace}/repositories", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUsersWorkspaceRepositoriesResponse res = new openapisdk.models.operations.GetUsersWorkspaceRepositoriesResponse() {{
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
     * postTeamsUsernameHooks - Creates a new webhook on the specified team.
     * 
     * Team webhooks are fired for events from all repositories belonging to
     * that team account.
     * 
     * Note that only admins can install webhooks on teams.
     * 
     * **This endpoint has been deprecated, and you should
     * use the new [workspace hooks](../../workspaces/%7Bworkspace%7D/hooks#post) endpoint.
     * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    public openapisdk.models.operations.PostTeamsUsernameHooksResponse postTeamsUsernameHooks(openapisdk.models.operations.PostTeamsUsernameHooksRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{username}/hooks", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostTeamsUsernameHooksResponse res = new openapisdk.models.operations.PostTeamsUsernameHooksResponse() {{
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
     * putTeamsUsernameHooksUid - Updates the specified webhook subscription.
     * 
     * The following properties can be mutated:
     * 
     * * `description`
     * * `url`
     * * `active`
     * * `events`
     * 
     * **This endpoint has been deprecated, and you should
     * use the new [workspace hooks](../../../workspaces/%7Bworkspace%7D/hooks/%7Buid%7D#put) endpoint.
     * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    public openapisdk.models.operations.PutTeamsUsernameHooksUidResponse putTeamsUsernameHooksUid(openapisdk.models.operations.PutTeamsUsernameHooksUidRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{username}/hooks/{uid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutTeamsUsernameHooksUidResponse res = new openapisdk.models.operations.PutTeamsUsernameHooksUidResponse() {{
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