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
     * teamsAddMemberLegacy - Add team member (Legacy)
     *
     * The "Add team member" endpoint (described below) is deprecated.
     * 
     * We recommend using the [Add or update team membership for a user](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#add-or-update-team-membership-for-a-user) endpoint instead. It allows you to invite new organization members to your teams.
     * 
     * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     * 
     * To add someone to a team, the authenticated user must be an organization owner or a team maintainer in the team they're changing. The person being added to the team must be a member of the team's organization.
     * 
     * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
     * 
     * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#http-verbs)."
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams#add-team-member-legacy - API method documentation
    **/
    public openapisdk.models.operations.TeamsAddMemberLegacyResponse teamsAddMemberLegacy(openapisdk.models.operations.TeamsAddMemberLegacyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{team_id}/members/{username}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsAddMemberLegacyResponse res = new openapisdk.models.operations.TeamsAddMemberLegacyResponse() {{
            basicError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 422) {
        }

        return res;
    }
	
	
    /**
     * teamsAddOrUpdateMembershipForUserInOrg - Add or update team membership for a user
     *
     * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     * 
     * Adds an organization member to a team. An authenticated organization owner or team maintainer can add organization members to a team.
     * 
     * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
     * 
     * An organization owner can add someone who is not part of the team's organization to a team. When an organization owner adds someone to a team who is not an organization member, this endpoint will send an invitation to the person via email. This newly-created membership will be in the "pending" state until the person accepts the invitation, at which point the membership will transition to the "active" state and the user will be added as a member of the team.
     * 
     * If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a team maintainer.
     * 
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/memberships/{username}`.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams#add-or-update-team-membership-for-a-user - API method documentation
    **/
    public openapisdk.models.operations.TeamsAddOrUpdateMembershipForUserInOrgResponse teamsAddOrUpdateMembershipForUserInOrg(openapisdk.models.operations.TeamsAddOrUpdateMembershipForUserInOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/teams/{team_slug}/memberships/{username}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsAddOrUpdateMembershipForUserInOrgResponse res = new openapisdk.models.operations.TeamsAddOrUpdateMembershipForUserInOrgResponse() {{
            teamMembership = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TeamMembership out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TeamMembership.class);
                res.teamMembership = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 422) {
        }

        return res;
    }
	
	
    /**
     * teamsAddOrUpdateMembershipForUserLegacy - Add or update team membership for a user (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Add or update team membership for a user](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#add-or-update-team-membership-for-a-user) endpoint.
     * 
     * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     * 
     * If the user is already a member of the team's organization, this endpoint will add the user to the team. To add a membership between an organization member and a team, the authenticated user must be an organization owner or a team maintainer.
     * 
     * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
     * 
     * If the user is unaffiliated with the team's organization, this endpoint will send an invitation to the user via email. This newly-created membership will be in the "pending" state until the user accepts the invitation, at which point the membership will transition to the "active" state and the user will be added as a member of the team. To add a membership between an unaffiliated user and a team, the authenticated user must be an organization owner.
     * 
     * If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a team maintainer.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams#add-or-update-team-membership-for-a-user-legacy - API method documentation
    **/
    public openapisdk.models.operations.TeamsAddOrUpdateMembershipForUserLegacyResponse teamsAddOrUpdateMembershipForUserLegacy(openapisdk.models.operations.TeamsAddOrUpdateMembershipForUserLegacyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{team_id}/memberships/{username}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsAddOrUpdateMembershipForUserLegacyResponse res = new openapisdk.models.operations.TeamsAddOrUpdateMembershipForUserLegacyResponse() {{
            teamMembership = null;
            basicError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TeamMembership out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TeamMembership.class);
                res.teamMembership = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 422) {
        }

        return res;
    }
	
	
    /**
     * teamsAddOrUpdateProjectPermissionsInOrg - Add or update team project permissions
     *
     * Adds an organization project to a team. To add a project to a team or update the team's permission on a project, the authenticated user must have `admin` permissions for the project. The project and team must be part of the same organization.
     * 
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/projects/{project_id}`.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams#add-or-update-team-project-permissions - API method documentation
    **/
    public openapisdk.models.operations.TeamsAddOrUpdateProjectPermissionsInOrgResponse teamsAddOrUpdateProjectPermissionsInOrg(openapisdk.models.operations.TeamsAddOrUpdateProjectPermissionsInOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/teams/{team_slug}/projects/{project_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsAddOrUpdateProjectPermissionsInOrgResponse res = new openapisdk.models.operations.TeamsAddOrUpdateProjectPermissionsInOrgResponse() {{
            teamsAddOrUpdateProjectPermissionsInOrg403ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.TeamsAddOrUpdateProjectPermissionsInOrg403ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.TeamsAddOrUpdateProjectPermissionsInOrg403ApplicationJson.class);
                res.teamsAddOrUpdateProjectPermissionsInOrg403ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * teamsAddOrUpdateProjectPermissionsLegacy - Add or update team project permissions (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Add or update team project permissions](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#add-or-update-team-project-permissions) endpoint.
     * 
     * Adds an organization project to a team. To add a project to a team or update the team's permission on a project, the authenticated user must have `admin` permissions for the project. The project and team must be part of the same organization.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams/#add-or-update-team-project-permissions-legacy - API method documentation
    **/
    public openapisdk.models.operations.TeamsAddOrUpdateProjectPermissionsLegacyResponse teamsAddOrUpdateProjectPermissionsLegacy(openapisdk.models.operations.TeamsAddOrUpdateProjectPermissionsLegacyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{team_id}/projects/{project_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsAddOrUpdateProjectPermissionsLegacyResponse res = new openapisdk.models.operations.TeamsAddOrUpdateProjectPermissionsLegacyResponse() {{
            teamsAddOrUpdateProjectPermissionsLegacy403ApplicationJSONObject = null;
            basicError = null;
            teamsAddOrUpdateProjectPermissionsLegacy415ApplicationJSONObject = null;
            validationError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.TeamsAddOrUpdateProjectPermissionsLegacy403ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.TeamsAddOrUpdateProjectPermissionsLegacy403ApplicationJson.class);
                res.teamsAddOrUpdateProjectPermissionsLegacy403ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 415) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.TeamsAddOrUpdateProjectPermissionsLegacy415ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.TeamsAddOrUpdateProjectPermissionsLegacy415ApplicationJson.class);
                res.teamsAddOrUpdateProjectPermissionsLegacy415ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 422) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ValidationError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ValidationError.class);
                res.validationError = out;
            }
        }

        return res;
    }
	
	
    /**
     * teamsAddOrUpdateRepoPermissionsInOrg - Add or update team repository permissions
     *
     * To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be able to see the team. The repository must be owned by the organization, or a direct fork of a repository owned by the organization. You will get a `422 Unprocessable Entity` status if you attempt to add a repository to a team that is not owned by the organization. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#http-verbs)."
     * 
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.
     * 
     * For more information about the permission levels, see "[Repository permission levels for an organization](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)".
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams/#add-or-update-team-repository-permissions - API method documentation
    **/
    public openapisdk.models.operations.TeamsAddOrUpdateRepoPermissionsInOrgResponse teamsAddOrUpdateRepoPermissionsInOrg(openapisdk.models.operations.TeamsAddOrUpdateRepoPermissionsInOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsAddOrUpdateRepoPermissionsInOrgResponse res = new openapisdk.models.operations.TeamsAddOrUpdateRepoPermissionsInOrgResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * teamsAddOrUpdateRepoPermissionsLegacy - Add or update team repository permissions (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new "[Add or update team repository permissions](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#add-or-update-team-repository-permissions)" endpoint.
     * 
     * To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be able to see the team. The repository must be owned by the organization, or a direct fork of a repository owned by the organization. You will get a `422 Unprocessable Entity` status if you attempt to add a repository to a team that is not owned by the organization.
     * 
     * Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#http-verbs)."
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams/#add-or-update-team-repository-permissions-legacy - API method documentation
    **/
    public openapisdk.models.operations.TeamsAddOrUpdateRepoPermissionsLegacyResponse teamsAddOrUpdateRepoPermissionsLegacy(openapisdk.models.operations.TeamsAddOrUpdateRepoPermissionsLegacyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{team_id}/repos/{owner}/{repo}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsAddOrUpdateRepoPermissionsLegacyResponse res = new openapisdk.models.operations.TeamsAddOrUpdateRepoPermissionsLegacyResponse() {{
            basicError = null;
            validationError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 422) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ValidationError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ValidationError.class);
                res.validationError = out;
            }
        }

        return res;
    }
	
	
    /**
     * teamsCheckPermissionsForProjectInOrg - Check team permissions for a project
     *
     * Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. The response includes projects inherited from a parent team.
     * 
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/projects/{project_id}`.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams#check-team-permissions-for-a-project - API method documentation
    **/
    public openapisdk.models.operations.TeamsCheckPermissionsForProjectInOrgResponse teamsCheckPermissionsForProjectInOrg(openapisdk.models.operations.TeamsCheckPermissionsForProjectInOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/teams/{team_slug}/projects/{project_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsCheckPermissionsForProjectInOrgResponse res = new openapisdk.models.operations.TeamsCheckPermissionsForProjectInOrgResponse() {{
            teamProject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TeamProject out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TeamProject.class);
                res.teamProject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
        }

        return res;
    }
	
	
    /**
     * teamsCheckPermissionsForProjectLegacy - Check team permissions for a project (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Check team permissions for a project](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#check-team-permissions-for-a-project) endpoint.
     * 
     * Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. The response includes projects inherited from a parent team.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams/#check-team-permissions-for-a-project-legacy - API method documentation
    **/
    public openapisdk.models.operations.TeamsCheckPermissionsForProjectLegacyResponse teamsCheckPermissionsForProjectLegacy(openapisdk.models.operations.TeamsCheckPermissionsForProjectLegacyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{team_id}/projects/{project_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsCheckPermissionsForProjectLegacyResponse res = new openapisdk.models.operations.TeamsCheckPermissionsForProjectLegacyResponse() {{
            teamProject = null;
            teamsCheckPermissionsForProjectLegacy415ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TeamProject out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TeamProject.class);
                res.teamProject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 415) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.TeamsCheckPermissionsForProjectLegacy415ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.TeamsCheckPermissionsForProjectLegacy415ApplicationJson.class);
                res.teamsCheckPermissionsForProjectLegacy415ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * teamsCheckPermissionsForRepoInOrg - Check team permissions for a repository
     *
     * Checks whether a team has `admin`, `push`, `maintain`, `triage`, or `pull` permission for a repository. Repositories inherited through a parent team will also be checked.
     * 
     * You can also get information about the specified repository, including what permissions the team grants on it, by passing the following custom [media type](https://docs.github.com/enterprise-server@2.21/rest/overview/media-types/) via the `application/vnd.github.v3.repository+json` accept header.
     * 
     * If a team doesn't have permission for the repository, you will receive a `404 Not Found` response status.
     * 
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams/#check-team-permissions-for-a-repository - API method documentation
    **/
    public openapisdk.models.operations.TeamsCheckPermissionsForRepoInOrgResponse teamsCheckPermissionsForRepoInOrg(openapisdk.models.operations.TeamsCheckPermissionsForRepoInOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsCheckPermissionsForRepoInOrgResponse res = new openapisdk.models.operations.TeamsCheckPermissionsForRepoInOrgResponse() {{
            teamRepository = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TeamRepository out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TeamRepository.class);
                res.teamRepository = out;
            }
        }
        else if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 404) {
        }

        return res;
    }
	
	
    /**
     * teamsCheckPermissionsForRepoLegacy - Check team permissions for a repository (Legacy)
     *
     * **Note**: Repositories inherited through a parent team will also be checked.
     * 
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Check team permissions for a repository](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#check-team-permissions-for-a-repository) endpoint.
     * 
     * You can also get information about the specified repository, including what permissions the team grants on it, by passing the following custom [media type](https://docs.github.com/enterprise-server@2.21/rest/overview/media-types/) via the `Accept` header:
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams/#check-team-permissions-for-a-repository-legacy - API method documentation
    **/
    public openapisdk.models.operations.TeamsCheckPermissionsForRepoLegacyResponse teamsCheckPermissionsForRepoLegacy(openapisdk.models.operations.TeamsCheckPermissionsForRepoLegacyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{team_id}/repos/{owner}/{repo}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsCheckPermissionsForRepoLegacyResponse res = new openapisdk.models.operations.TeamsCheckPermissionsForRepoLegacyResponse() {{
            teamRepository = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TeamRepository out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TeamRepository.class);
                res.teamRepository = out;
            }
        }
        else if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 404) {
        }

        return res;
    }
	
	
    /**
     * teamsCreate - Create a team
     *
     * To create a team, the authenticated user must be a member or owner of `{org}`. By default, organization members can create teams. Organization owners can limit team creation to organization owners. For more information, see "[Setting team creation permissions](https://help.github.com/en/articles/setting-team-creation-permissions-in-your-organization)."
     * 
     * When you create a new team, you automatically become a team maintainer without explicitly adding yourself to the optional array of `maintainers`. For more information, see "[About teams](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/about-teams)".
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams#create-a-team - API method documentation
    **/
    public openapisdk.models.operations.TeamsCreateResponse teamsCreate(openapisdk.models.operations.TeamsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/teams", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsCreateResponse res = new openapisdk.models.operations.TeamsCreateResponse() {{
            teamFull = null;
            basicError = null;
            validationError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TeamFull out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TeamFull.class);
                res.teamFull = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 422) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ValidationError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ValidationError.class);
                res.validationError = out;
            }
        }

        return res;
    }
	
	
    /**
     * teamsCreateDiscussionCommentInOrg - Create a discussion comment
     *
     * Creates a new comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * 
     * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
     * 
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments`.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams#create-a-discussion-comment - API method documentation
    **/
    public openapisdk.models.operations.TeamsCreateDiscussionCommentInOrgResponse teamsCreateDiscussionCommentInOrg(openapisdk.models.operations.TeamsCreateDiscussionCommentInOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsCreateDiscussionCommentInOrgResponse res = new openapisdk.models.operations.TeamsCreateDiscussionCommentInOrgResponse() {{
            teamDiscussionComment = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TeamDiscussionComment out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TeamDiscussionComment.class);
                res.teamDiscussionComment = out;
            }
        }

        return res;
    }
	
	
    /**
     * teamsCreateDiscussionCommentLegacy - Create a discussion comment (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Create a discussion comment](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#create-a-discussion-comment) endpoint.
     * 
     * Creates a new comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * 
     * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams#create-a-discussion-comment-legacy - API method documentation
    **/
    public openapisdk.models.operations.TeamsCreateDiscussionCommentLegacyResponse teamsCreateDiscussionCommentLegacy(openapisdk.models.operations.TeamsCreateDiscussionCommentLegacyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{team_id}/discussions/{discussion_number}/comments", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsCreateDiscussionCommentLegacyResponse res = new openapisdk.models.operations.TeamsCreateDiscussionCommentLegacyResponse() {{
            teamDiscussionComment = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TeamDiscussionComment out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TeamDiscussionComment.class);
                res.teamDiscussionComment = out;
            }
        }

        return res;
    }
	
	
    /**
     * teamsCreateDiscussionInOrg - Create a discussion
     *
     * Creates a new discussion post on a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * 
     * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
     * 
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/{org_id}/team/{team_id}/discussions`.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams#create-a-discussion - API method documentation
    **/
    public openapisdk.models.operations.TeamsCreateDiscussionInOrgResponse teamsCreateDiscussionInOrg(openapisdk.models.operations.TeamsCreateDiscussionInOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/teams/{team_slug}/discussions", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsCreateDiscussionInOrgResponse res = new openapisdk.models.operations.TeamsCreateDiscussionInOrgResponse() {{
            teamDiscussion = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TeamDiscussion out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TeamDiscussion.class);
                res.teamDiscussion = out;
            }
        }

        return res;
    }
	
	
    /**
     * teamsCreateDiscussionLegacy - Create a discussion (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Create a discussion`](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#create-a-discussion) endpoint.
     * 
     * Creates a new discussion post on a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * 
     * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams#create-a-discussion-legacy - API method documentation
    **/
    public openapisdk.models.operations.TeamsCreateDiscussionLegacyResponse teamsCreateDiscussionLegacy(openapisdk.models.operations.TeamsCreateDiscussionLegacyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{team_id}/discussions", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsCreateDiscussionLegacyResponse res = new openapisdk.models.operations.TeamsCreateDiscussionLegacyResponse() {{
            teamDiscussion = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TeamDiscussion out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TeamDiscussion.class);
                res.teamDiscussion = out;
            }
        }

        return res;
    }
	
	
    /**
     * teamsDeleteDiscussionCommentInOrg - Delete a discussion comment
     *
     * Deletes a comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * 
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams#delete-a-discussion-comment - API method documentation
    **/
    public openapisdk.models.operations.TeamsDeleteDiscussionCommentInOrgResponse teamsDeleteDiscussionCommentInOrg(openapisdk.models.operations.TeamsDeleteDiscussionCommentInOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsDeleteDiscussionCommentInOrgResponse res = new openapisdk.models.operations.TeamsDeleteDiscussionCommentInOrgResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * teamsDeleteDiscussionCommentLegacy - Delete a discussion comment (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Delete a discussion comment](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#delete-a-discussion-comment) endpoint.
     * 
     * Deletes a comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams#delete-a-discussion-comment-legacy - API method documentation
    **/
    public openapisdk.models.operations.TeamsDeleteDiscussionCommentLegacyResponse teamsDeleteDiscussionCommentLegacy(openapisdk.models.operations.TeamsDeleteDiscussionCommentLegacyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsDeleteDiscussionCommentLegacyResponse res = new openapisdk.models.operations.TeamsDeleteDiscussionCommentLegacyResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * teamsDeleteDiscussionInOrg - Delete a discussion
     *
     * Delete a discussion from a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * 
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams#delete-a-discussion - API method documentation
    **/
    public openapisdk.models.operations.TeamsDeleteDiscussionInOrgResponse teamsDeleteDiscussionInOrg(openapisdk.models.operations.TeamsDeleteDiscussionInOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsDeleteDiscussionInOrgResponse res = new openapisdk.models.operations.TeamsDeleteDiscussionInOrgResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * teamsDeleteDiscussionLegacy - Delete a discussion (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Delete a discussion`](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#delete-a-discussion) endpoint.
     * 
     * Delete a discussion from a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams#delete-a-discussion-legacy - API method documentation
    **/
    public openapisdk.models.operations.TeamsDeleteDiscussionLegacyResponse teamsDeleteDiscussionLegacy(openapisdk.models.operations.TeamsDeleteDiscussionLegacyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{team_id}/discussions/{discussion_number}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsDeleteDiscussionLegacyResponse res = new openapisdk.models.operations.TeamsDeleteDiscussionLegacyResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * teamsDeleteInOrg - Delete a team
     *
     * To delete a team, the authenticated user must be an organization owner or team maintainer.
     * 
     * If you are an organization owner, deleting a parent team will delete all of its child teams as well.
     * 
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}`.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams#delete-a-team - API method documentation
    **/
    public openapisdk.models.operations.TeamsDeleteInOrgResponse teamsDeleteInOrg(openapisdk.models.operations.TeamsDeleteInOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/teams/{team_slug}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsDeleteInOrgResponse res = new openapisdk.models.operations.TeamsDeleteInOrgResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * teamsDeleteLegacy - Delete a team (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Delete a team](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#delete-a-team) endpoint.
     * 
     * To delete a team, the authenticated user must be an organization owner or team maintainer.
     * 
     * If you are an organization owner, deleting a parent team will delete all of its child teams as well.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams/#delete-a-team-legacy - API method documentation
    **/
    public openapisdk.models.operations.TeamsDeleteLegacyResponse teamsDeleteLegacy(openapisdk.models.operations.TeamsDeleteLegacyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{team_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsDeleteLegacyResponse res = new openapisdk.models.operations.TeamsDeleteLegacyResponse() {{
            basicError = null;
            validationError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 422) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ValidationError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ValidationError.class);
                res.validationError = out;
            }
        }

        return res;
    }
	
	
    /**
     * teamsGetByName - Get a team by name
     *
     * Gets a team using the team's `slug`. GitHub Enterprise Server generates the `slug` from the team `name`.
     * 
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}`.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams#get-a-team-by-name - API method documentation
    **/
    public openapisdk.models.operations.TeamsGetByNameResponse teamsGetByName(openapisdk.models.operations.TeamsGetByNameRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/teams/{team_slug}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsGetByNameResponse res = new openapisdk.models.operations.TeamsGetByNameResponse() {{
            teamFull = null;
            basicError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TeamFull out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TeamFull.class);
                res.teamFull = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }

        return res;
    }
	
	
    /**
     * teamsGetDiscussionCommentInOrg - Get a discussion comment
     *
     * Get a specific comment on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * 
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams#get-a-discussion-comment - API method documentation
    **/
    public openapisdk.models.operations.TeamsGetDiscussionCommentInOrgResponse teamsGetDiscussionCommentInOrg(openapisdk.models.operations.TeamsGetDiscussionCommentInOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsGetDiscussionCommentInOrgResponse res = new openapisdk.models.operations.TeamsGetDiscussionCommentInOrgResponse() {{
            teamDiscussionComment = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TeamDiscussionComment out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TeamDiscussionComment.class);
                res.teamDiscussionComment = out;
            }
        }

        return res;
    }
	
	
    /**
     * teamsGetDiscussionCommentLegacy - Get a discussion comment (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get a discussion comment](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#get-a-discussion-comment) endpoint.
     * 
     * Get a specific comment on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams#get-a-discussion-comment-legacy - API method documentation
    **/
    public openapisdk.models.operations.TeamsGetDiscussionCommentLegacyResponse teamsGetDiscussionCommentLegacy(openapisdk.models.operations.TeamsGetDiscussionCommentLegacyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsGetDiscussionCommentLegacyResponse res = new openapisdk.models.operations.TeamsGetDiscussionCommentLegacyResponse() {{
            teamDiscussionComment = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TeamDiscussionComment out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TeamDiscussionComment.class);
                res.teamDiscussionComment = out;
            }
        }

        return res;
    }
	
	
    /**
     * teamsGetDiscussionInOrg - Get a discussion
     *
     * Get a specific discussion on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * 
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams#get-a-discussion - API method documentation
    **/
    public openapisdk.models.operations.TeamsGetDiscussionInOrgResponse teamsGetDiscussionInOrg(openapisdk.models.operations.TeamsGetDiscussionInOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsGetDiscussionInOrgResponse res = new openapisdk.models.operations.TeamsGetDiscussionInOrgResponse() {{
            teamDiscussion = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TeamDiscussion out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TeamDiscussion.class);
                res.teamDiscussion = out;
            }
        }

        return res;
    }
	
	
    /**
     * teamsGetDiscussionLegacy - Get a discussion (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get a discussion](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#get-a-discussion) endpoint.
     * 
     * Get a specific discussion on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams#get-a-discussion-legacy - API method documentation
    **/
    public openapisdk.models.operations.TeamsGetDiscussionLegacyResponse teamsGetDiscussionLegacy(openapisdk.models.operations.TeamsGetDiscussionLegacyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{team_id}/discussions/{discussion_number}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsGetDiscussionLegacyResponse res = new openapisdk.models.operations.TeamsGetDiscussionLegacyResponse() {{
            teamDiscussion = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TeamDiscussion out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TeamDiscussion.class);
                res.teamDiscussion = out;
            }
        }

        return res;
    }
	
	
    /**
     * teamsGetLegacy - Get a team (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the [Get a team by name](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#get-a-team-by-name) endpoint.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams/#get-a-team-legacy - API method documentation
    **/
    public openapisdk.models.operations.TeamsGetLegacyResponse teamsGetLegacy(openapisdk.models.operations.TeamsGetLegacyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{team_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsGetLegacyResponse res = new openapisdk.models.operations.TeamsGetLegacyResponse() {{
            teamFull = null;
            basicError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TeamFull out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TeamFull.class);
                res.teamFull = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }

        return res;
    }
	
	
    /**
     * teamsGetMemberLegacy - Get team member (Legacy)
     *
     * The "Get team member" endpoint (described below) is deprecated.
     * 
     * We recommend using the [Get team membership for a user](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#get-team-membership-for-a-user) endpoint instead. It allows you to get both active and pending memberships.
     * 
     * To list members in a team, the team must be visible to the authenticated user.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams#get-team-member-legacy - API method documentation
    **/
    public openapisdk.models.operations.TeamsGetMemberLegacyResponse teamsGetMemberLegacy(openapisdk.models.operations.TeamsGetMemberLegacyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{team_id}/members/{username}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsGetMemberLegacyResponse res = new openapisdk.models.operations.TeamsGetMemberLegacyResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 404) {
        }

        return res;
    }
	
	
    /**
     * teamsGetMembershipForUserInOrg - Get team membership for a user
     *
     * Team members will include the members of child teams.
     * 
     * To get a user's membership with a team, the team must be visible to the authenticated user.
     * 
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/memberships/{username}`.
     * 
     * **Note:**
     * The response contains the `state` of the membership and the member's `role`.
     * 
     * The `role` for organization owners is set to `maintainer`. For more information about `maintainer` roles, see see [Create a team](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#create-a-team).
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams#get-team-membership-for-a-user - API method documentation
    **/
    public openapisdk.models.operations.TeamsGetMembershipForUserInOrgResponse teamsGetMembershipForUserInOrg(openapisdk.models.operations.TeamsGetMembershipForUserInOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/teams/{team_slug}/memberships/{username}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsGetMembershipForUserInOrgResponse res = new openapisdk.models.operations.TeamsGetMembershipForUserInOrgResponse() {{
            teamMembership = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TeamMembership out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TeamMembership.class);
                res.teamMembership = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
        }

        return res;
    }
	
	
    /**
     * teamsGetMembershipForUserLegacy - Get team membership for a user (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get team membership for a user](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#get-team-membership-for-a-user) endpoint.
     * 
     * Team members will include the members of child teams.
     * 
     * To get a user's membership with a team, the team must be visible to the authenticated user.
     * 
     * **Note:**
     * The response contains the `state` of the membership and the member's `role`.
     * 
     * The `role` for organization owners is set to `maintainer`. For more information about `maintainer` roles, see [Create a team](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#create-a-team).
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams#get-team-membership-for-a-user-legacy - API method documentation
    **/
    public openapisdk.models.operations.TeamsGetMembershipForUserLegacyResponse teamsGetMembershipForUserLegacy(openapisdk.models.operations.TeamsGetMembershipForUserLegacyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{team_id}/memberships/{username}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsGetMembershipForUserLegacyResponse res = new openapisdk.models.operations.TeamsGetMembershipForUserLegacyResponse() {{
            teamMembership = null;
            basicError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TeamMembership out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TeamMembership.class);
                res.teamMembership = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }

        return res;
    }
	
	
    /**
     * teamsList - List teams
     *
     * Lists all teams in an organization that are visible to the authenticated user.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams#list-teams - API method documentation
    **/
    public openapisdk.models.operations.TeamsListResponse teamsList(openapisdk.models.operations.TeamsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/teams", request.pathParams);
        
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

        openapisdk.models.operations.TeamsListResponse res = new openapisdk.models.operations.TeamsListResponse() {{
            teams = null;
            basicError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Team[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Team[].class);
                res.teams = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }

        return res;
    }
	
	
    /**
     * teamsListChildInOrg - List child teams
     *
     * Lists the child teams of the team specified by `{team_slug}`.
     * 
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/teams`.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams#list-child-teams - API method documentation
    **/
    public openapisdk.models.operations.TeamsListChildInOrgResponse teamsListChildInOrg(openapisdk.models.operations.TeamsListChildInOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/teams/{team_slug}/teams", request.pathParams);
        
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

        openapisdk.models.operations.TeamsListChildInOrgResponse res = new openapisdk.models.operations.TeamsListChildInOrgResponse() {{
            teams = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Team[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Team[].class);
                res.teams = out;
            }
        }

        return res;
    }
	
	
    /**
     * teamsListChildLegacy - List child teams (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List child teams`](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#list-child-teams) endpoint.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams/#list-child-teams-legacy - API method documentation
    **/
    public openapisdk.models.operations.TeamsListChildLegacyResponse teamsListChildLegacy(openapisdk.models.operations.TeamsListChildLegacyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{team_id}/teams", request.pathParams);
        
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

        openapisdk.models.operations.TeamsListChildLegacyResponse res = new openapisdk.models.operations.TeamsListChildLegacyResponse() {{
            teams = null;
            basicError = null;
            basicError = null;
            validationError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Team[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Team[].class);
                res.teams = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 422) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ValidationError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ValidationError.class);
                res.validationError = out;
            }
        }

        return res;
    }
	
	
    /**
     * teamsListDiscussionCommentsInOrg - List discussion comments
     *
     * List all comments on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * 
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments`.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams#list-discussion-comments - API method documentation
    **/
    public openapisdk.models.operations.TeamsListDiscussionCommentsInOrgResponse teamsListDiscussionCommentsInOrg(openapisdk.models.operations.TeamsListDiscussionCommentsInOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments", request.pathParams);
        
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

        openapisdk.models.operations.TeamsListDiscussionCommentsInOrgResponse res = new openapisdk.models.operations.TeamsListDiscussionCommentsInOrgResponse() {{
            teamDiscussionComments = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TeamDiscussionComment[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TeamDiscussionComment[].class);
                res.teamDiscussionComments = out;
            }
        }

        return res;
    }
	
	
    /**
     * teamsListDiscussionCommentsLegacy - List discussion comments (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [List discussion comments](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#list-discussion-comments) endpoint.
     * 
     * List all comments on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams#list-discussion-comments-legacy - API method documentation
    **/
    public openapisdk.models.operations.TeamsListDiscussionCommentsLegacyResponse teamsListDiscussionCommentsLegacy(openapisdk.models.operations.TeamsListDiscussionCommentsLegacyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{team_id}/discussions/{discussion_number}/comments", request.pathParams);
        
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

        openapisdk.models.operations.TeamsListDiscussionCommentsLegacyResponse res = new openapisdk.models.operations.TeamsListDiscussionCommentsLegacyResponse() {{
            teamDiscussionComments = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TeamDiscussionComment[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TeamDiscussionComment[].class);
                res.teamDiscussionComments = out;
            }
        }

        return res;
    }
	
	
    /**
     * teamsListDiscussionsInOrg - List discussions
     *
     * List all discussions on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * 
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions`.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams#list-discussions - API method documentation
    **/
    public openapisdk.models.operations.TeamsListDiscussionsInOrgResponse teamsListDiscussionsInOrg(openapisdk.models.operations.TeamsListDiscussionsInOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/teams/{team_slug}/discussions", request.pathParams);
        
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

        openapisdk.models.operations.TeamsListDiscussionsInOrgResponse res = new openapisdk.models.operations.TeamsListDiscussionsInOrgResponse() {{
            teamDiscussions = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TeamDiscussion[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TeamDiscussion[].class);
                res.teamDiscussions = out;
            }
        }

        return res;
    }
	
	
    /**
     * teamsListDiscussionsLegacy - List discussions (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List discussions`](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#list-discussions) endpoint.
     * 
     * List all discussions on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams#list-discussions-legacy - API method documentation
    **/
    public openapisdk.models.operations.TeamsListDiscussionsLegacyResponse teamsListDiscussionsLegacy(openapisdk.models.operations.TeamsListDiscussionsLegacyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{team_id}/discussions", request.pathParams);
        
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

        openapisdk.models.operations.TeamsListDiscussionsLegacyResponse res = new openapisdk.models.operations.TeamsListDiscussionsLegacyResponse() {{
            teamDiscussions = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TeamDiscussion[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TeamDiscussion[].class);
                res.teamDiscussions = out;
            }
        }

        return res;
    }
	
	
    /**
     * teamsListForAuthenticatedUser - List teams for the authenticated user
     *
     * List all of the teams across all of the organizations to which the authenticated user belongs. This method requires `user`, `repo`, or `read:org` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/) when authenticating via [OAuth](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/).
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams#list-teams-for-the-authenticated-user - API method documentation
    **/
    public openapisdk.models.operations.TeamsListForAuthenticatedUserResponse teamsListForAuthenticatedUser(openapisdk.models.operations.TeamsListForAuthenticatedUserRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/user/teams");
        
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

        openapisdk.models.operations.TeamsListForAuthenticatedUserResponse res = new openapisdk.models.operations.TeamsListForAuthenticatedUserResponse() {{
            teamFulls = null;
            basicError = null;
            basicError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TeamFull[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TeamFull[].class);
                res.teamFulls = out;
            }
        }
        else if (httpRes.statusCode() == 304) {
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }

        return res;
    }
	
	
    /**
     * teamsListMembersInOrg - List team members
     *
     * Team members will include the members of child teams.
     * 
     * To list members in a team, the team must be visible to the authenticated user.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams#list-team-members - API method documentation
    **/
    public openapisdk.models.operations.TeamsListMembersInOrgResponse teamsListMembersInOrg(openapisdk.models.operations.TeamsListMembersInOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/teams/{team_slug}/members", request.pathParams);
        
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

        openapisdk.models.operations.TeamsListMembersInOrgResponse res = new openapisdk.models.operations.TeamsListMembersInOrgResponse() {{
            simpleUsers = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SimpleUser[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SimpleUser[].class);
                res.simpleUsers = out;
            }
        }

        return res;
    }
	
	
    /**
     * teamsListMembersLegacy - List team members (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List team members`](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#list-team-members) endpoint.
     * 
     * Team members will include the members of child teams.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams#list-team-members-legacy - API method documentation
    **/
    public openapisdk.models.operations.TeamsListMembersLegacyResponse teamsListMembersLegacy(openapisdk.models.operations.TeamsListMembersLegacyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{team_id}/members", request.pathParams);
        
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

        openapisdk.models.operations.TeamsListMembersLegacyResponse res = new openapisdk.models.operations.TeamsListMembersLegacyResponse() {{
            simpleUsers = null;
            basicError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SimpleUser[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SimpleUser[].class);
                res.simpleUsers = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }

        return res;
    }
	
	
    /**
     * teamsListProjectsInOrg - List team projects
     *
     * Lists the organization projects for a team.
     * 
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/projects`.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams#list-team-projects - API method documentation
    **/
    public openapisdk.models.operations.TeamsListProjectsInOrgResponse teamsListProjectsInOrg(openapisdk.models.operations.TeamsListProjectsInOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/teams/{team_slug}/projects", request.pathParams);
        
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

        openapisdk.models.operations.TeamsListProjectsInOrgResponse res = new openapisdk.models.operations.TeamsListProjectsInOrgResponse() {{
            teamProjects = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TeamProject[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TeamProject[].class);
                res.teamProjects = out;
            }
        }

        return res;
    }
	
	
    /**
     * teamsListProjectsLegacy - List team projects (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List team projects`](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#list-team-projects) endpoint.
     * 
     * Lists the organization projects for a team.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams/#list-team-projects-legacy - API method documentation
    **/
    public openapisdk.models.operations.TeamsListProjectsLegacyResponse teamsListProjectsLegacy(openapisdk.models.operations.TeamsListProjectsLegacyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{team_id}/projects", request.pathParams);
        
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

        openapisdk.models.operations.TeamsListProjectsLegacyResponse res = new openapisdk.models.operations.TeamsListProjectsLegacyResponse() {{
            teamProjects = null;
            basicError = null;
            teamsListProjectsLegacy415ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TeamProject[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TeamProject[].class);
                res.teamProjects = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 415) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.TeamsListProjectsLegacy415ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.TeamsListProjectsLegacy415ApplicationJson.class);
                res.teamsListProjectsLegacy415ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * teamsListReposInOrg - List team repositories
     *
     * Lists a team's repositories visible to the authenticated user.
     * 
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/repos`.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams#list-team-repositories - API method documentation
    **/
    public openapisdk.models.operations.TeamsListReposInOrgResponse teamsListReposInOrg(openapisdk.models.operations.TeamsListReposInOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/teams/{team_slug}/repos", request.pathParams);
        
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

        openapisdk.models.operations.TeamsListReposInOrgResponse res = new openapisdk.models.operations.TeamsListReposInOrgResponse() {{
            minimalRepositories = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.MinimalRepository[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.MinimalRepository[].class);
                res.minimalRepositories = out;
            }
        }

        return res;
    }
	
	
    /**
     * teamsListReposLegacy - List team repositories (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [List team repositories](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#list-team-repositories) endpoint.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams/#list-team-repositories-legacy - API method documentation
    **/
    public openapisdk.models.operations.TeamsListReposLegacyResponse teamsListReposLegacy(openapisdk.models.operations.TeamsListReposLegacyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{team_id}/repos", request.pathParams);
        
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

        openapisdk.models.operations.TeamsListReposLegacyResponse res = new openapisdk.models.operations.TeamsListReposLegacyResponse() {{
            minimalRepositories = null;
            basicError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.MinimalRepository[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.MinimalRepository[].class);
                res.minimalRepositories = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }

        return res;
    }
	
	
    /**
     * teamsRemoveMemberLegacy - Remove team member (Legacy)
     *
     * The "Remove team member" endpoint (described below) is deprecated.
     * 
     * We recommend using the [Remove team membership for a user](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#remove-team-membership-for-a-user) endpoint instead. It allows you to remove both active and pending memberships.
     * 
     * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     * 
     * To remove a team member, the authenticated user must have 'admin' permissions to the team or be an owner of the org that the team is associated with. Removing a team member does not delete the user, it just removes them from the team.
     * 
     * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams#remove-team-member-legacy - API method documentation
    **/
    public openapisdk.models.operations.TeamsRemoveMemberLegacyResponse teamsRemoveMemberLegacy(openapisdk.models.operations.TeamsRemoveMemberLegacyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{team_id}/members/{username}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsRemoveMemberLegacyResponse res = new openapisdk.models.operations.TeamsRemoveMemberLegacyResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 404) {
        }

        return res;
    }
	
	
    /**
     * teamsRemoveMembershipForUserInOrg - Remove team membership for a user
     *
     * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     * 
     * To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team.
     * 
     * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
     * 
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/memberships/{username}`.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams#remove-team-membership-for-a-user - API method documentation
    **/
    public openapisdk.models.operations.TeamsRemoveMembershipForUserInOrgResponse teamsRemoveMembershipForUserInOrg(openapisdk.models.operations.TeamsRemoveMembershipForUserInOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/teams/{team_slug}/memberships/{username}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsRemoveMembershipForUserInOrgResponse res = new openapisdk.models.operations.TeamsRemoveMembershipForUserInOrgResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 403) {
        }

        return res;
    }
	
	
    /**
     * teamsRemoveMembershipForUserLegacy - Remove team membership for a user (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove team membership for a user](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#remove-team-membership-for-a-user) endpoint.
     * 
     * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     * 
     * To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team.
     * 
     * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams#remove-team-membership-for-a-user-legacy - API method documentation
    **/
    public openapisdk.models.operations.TeamsRemoveMembershipForUserLegacyResponse teamsRemoveMembershipForUserLegacy(openapisdk.models.operations.TeamsRemoveMembershipForUserLegacyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{team_id}/memberships/{username}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsRemoveMembershipForUserLegacyResponse res = new openapisdk.models.operations.TeamsRemoveMembershipForUserLegacyResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 403) {
        }

        return res;
    }
	
	
    /**
     * teamsRemoveProjectInOrg - Remove a project from a team
     *
     * Removes an organization project from a team. An organization owner or a team maintainer can remove any project from the team. To remove a project from a team as an organization member, the authenticated user must have `read` access to both the team and project, or `admin` access to the team or project. This endpoint removes the project from the team, but does not delete the project.
     * 
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/projects/{project_id}`.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams#remove-a-project-from-a-team - API method documentation
    **/
    public openapisdk.models.operations.TeamsRemoveProjectInOrgResponse teamsRemoveProjectInOrg(openapisdk.models.operations.TeamsRemoveProjectInOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/teams/{team_slug}/projects/{project_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsRemoveProjectInOrgResponse res = new openapisdk.models.operations.TeamsRemoveProjectInOrgResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * teamsRemoveProjectLegacy - Remove a project from a team (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove a project from a team](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#remove-a-project-from-a-team) endpoint.
     * 
     * Removes an organization project from a team. An organization owner or a team maintainer can remove any project from the team. To remove a project from a team as an organization member, the authenticated user must have `read` access to both the team and project, or `admin` access to the team or project. **Note:** This endpoint removes the project from the team, but does not delete it.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams/#remove-a-project-from-a-team-legacy - API method documentation
    **/
    public openapisdk.models.operations.TeamsRemoveProjectLegacyResponse teamsRemoveProjectLegacy(openapisdk.models.operations.TeamsRemoveProjectLegacyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{team_id}/projects/{project_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsRemoveProjectLegacyResponse res = new openapisdk.models.operations.TeamsRemoveProjectLegacyResponse() {{
            basicError = null;
            teamsRemoveProjectLegacy415ApplicationJSONObject = null;
            validationError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 415) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.TeamsRemoveProjectLegacy415ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.TeamsRemoveProjectLegacy415ApplicationJson.class);
                res.teamsRemoveProjectLegacy415ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 422) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ValidationError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ValidationError.class);
                res.validationError = out;
            }
        }

        return res;
    }
	
	
    /**
     * teamsRemoveRepoInOrg - Remove a repository from a team
     *
     * If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. This does not delete the repository, it just removes it from the team.
     * 
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams/#remove-a-repository-from-a-team - API method documentation
    **/
    public openapisdk.models.operations.TeamsRemoveRepoInOrgResponse teamsRemoveRepoInOrg(openapisdk.models.operations.TeamsRemoveRepoInOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsRemoveRepoInOrgResponse res = new openapisdk.models.operations.TeamsRemoveRepoInOrgResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * teamsRemoveRepoLegacy - Remove a repository from a team (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove a repository from a team](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#remove-a-repository-from-a-team) endpoint.
     * 
     * If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. NOTE: This does not delete the repository, it just removes it from the team.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams/#remove-a-repository-from-a-team-legacy - API method documentation
    **/
    public openapisdk.models.operations.TeamsRemoveRepoLegacyResponse teamsRemoveRepoLegacy(openapisdk.models.operations.TeamsRemoveRepoLegacyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{team_id}/repos/{owner}/{repo}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsRemoveRepoLegacyResponse res = new openapisdk.models.operations.TeamsRemoveRepoLegacyResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * teamsUpdateDiscussionCommentInOrg - Update a discussion comment
     *
     * Edits the body text of a discussion comment. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * 
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams#update-a-discussion-comment - API method documentation
    **/
    public openapisdk.models.operations.TeamsUpdateDiscussionCommentInOrgResponse teamsUpdateDiscussionCommentInOrg(openapisdk.models.operations.TeamsUpdateDiscussionCommentInOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsUpdateDiscussionCommentInOrgResponse res = new openapisdk.models.operations.TeamsUpdateDiscussionCommentInOrgResponse() {{
            teamDiscussionComment = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TeamDiscussionComment out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TeamDiscussionComment.class);
                res.teamDiscussionComment = out;
            }
        }

        return res;
    }
	
	
    /**
     * teamsUpdateDiscussionCommentLegacy - Update a discussion comment (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a discussion comment](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#update-a-discussion-comment) endpoint.
     * 
     * Edits the body text of a discussion comment. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams#update-a-discussion-comment-legacy - API method documentation
    **/
    public openapisdk.models.operations.TeamsUpdateDiscussionCommentLegacyResponse teamsUpdateDiscussionCommentLegacy(openapisdk.models.operations.TeamsUpdateDiscussionCommentLegacyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsUpdateDiscussionCommentLegacyResponse res = new openapisdk.models.operations.TeamsUpdateDiscussionCommentLegacyResponse() {{
            teamDiscussionComment = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TeamDiscussionComment out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TeamDiscussionComment.class);
                res.teamDiscussionComment = out;
            }
        }

        return res;
    }
	
	
    /**
     * teamsUpdateDiscussionInOrg - Update a discussion
     *
     * Edits the title and body text of a discussion post. Only the parameters you provide are updated. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     * 
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams#update-a-discussion - API method documentation
    **/
    public openapisdk.models.operations.TeamsUpdateDiscussionInOrgResponse teamsUpdateDiscussionInOrg(openapisdk.models.operations.TeamsUpdateDiscussionInOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsUpdateDiscussionInOrgResponse res = new openapisdk.models.operations.TeamsUpdateDiscussionInOrgResponse() {{
            teamDiscussion = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TeamDiscussion out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TeamDiscussion.class);
                res.teamDiscussion = out;
            }
        }

        return res;
    }
	
	
    /**
     * teamsUpdateDiscussionLegacy - Update a discussion (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a discussion](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#update-a-discussion) endpoint.
     * 
     * Edits the title and body text of a discussion post. Only the parameters you provide are updated. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams#update-a-discussion-legacy - API method documentation
    **/
    public openapisdk.models.operations.TeamsUpdateDiscussionLegacyResponse teamsUpdateDiscussionLegacy(openapisdk.models.operations.TeamsUpdateDiscussionLegacyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{team_id}/discussions/{discussion_number}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsUpdateDiscussionLegacyResponse res = new openapisdk.models.operations.TeamsUpdateDiscussionLegacyResponse() {{
            teamDiscussion = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TeamDiscussion out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TeamDiscussion.class);
                res.teamDiscussion = out;
            }
        }

        return res;
    }
	
	
    /**
     * teamsUpdateInOrg - Update a team
     *
     * To edit a team, the authenticated user must either be an organization owner or a team maintainer.
     * 
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}`.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams#update-a-team - API method documentation
    **/
    public openapisdk.models.operations.TeamsUpdateInOrgResponse teamsUpdateInOrg(openapisdk.models.operations.TeamsUpdateInOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/teams/{team_slug}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsUpdateInOrgResponse res = new openapisdk.models.operations.TeamsUpdateInOrgResponse() {{
            teamFull = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TeamFull out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TeamFull.class);
                res.teamFull = out;
            }
        }

        return res;
    }
	
	
    /**
     * teamsUpdateLegacy - Update a team (Legacy)
     *
     * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a team](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#update-a-team) endpoint.
     * 
     * To edit a team, the authenticated user must either be an organization owner or a team maintainer.
     * 
     * **Note:** With nested teams, the `privacy` for parent teams cannot be `secret`.
     *
     * https://docs.github.com/enterprise-server@2.21/rest/reference/teams/#update-a-team-legacy - API method documentation
    **/
    public openapisdk.models.operations.TeamsUpdateLegacyResponse teamsUpdateLegacy(openapisdk.models.operations.TeamsUpdateLegacyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{team_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsUpdateLegacyResponse res = new openapisdk.models.operations.TeamsUpdateLegacyResponse() {{
            teamFull = null;
            teamFull = null;
            basicError = null;
            basicError = null;
            validationError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TeamFull out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TeamFull.class);
                res.teamFull = out;
            }
        }
        else if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TeamFull out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TeamFull.class);
                res.teamFull = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BasicError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BasicError.class);
                res.basicError = out;
            }
        }
        else if (httpRes.statusCode() == 422) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ValidationError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ValidationError.class);
                res.validationError = out;
            }
        }

        return res;
    }
	
}