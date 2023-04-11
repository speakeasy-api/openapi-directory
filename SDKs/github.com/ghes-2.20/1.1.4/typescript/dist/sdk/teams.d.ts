import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Interact with GitHub Teams.
 */
export declare class Teams {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add team member (Legacy)
     *
     * @remarks
     * The "Add team member" endpoint (described below) is deprecated.
     *
     * We recommend using the [Add or update team membership for a user](https://docs.github.com/enterprise-server@2.20/rest/reference/teams#add-or-update-team-membership-for-a-user) endpoint instead. It allows you to invite new organization members to your teams.
     *
     * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * To add someone to a team, the authenticated user must be an organization owner or a team maintainer in the team they're changing. The person being added to the team must be a member of the team's organization.
     *
     * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
     *
     * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#http-verbs)."
     *
     * @see {@link https://docs.github.com/enterprise-server@2.20/rest/reference/teams#add-team-member-legacy} - API method documentation
     */
    teamsAddMemberLegacy(req: operations.TeamsAddMemberLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsAddMemberLegacyResponse>;
    /**
     * Add or update team membership for a user
     *
     * @remarks
     * If the user is already a member of the team's organization, this endpoint will add the user to the team. To add a membership between an organization member and a team, the authenticated user must be an organization owner or a team maintainer.
     *
     * If the user is unaffiliated with the team's organization, this endpoint will send an invitation to the user via email. This newly-created membership will be in the "pending" state until the user accepts the invitation, at which point the membership will transition to the "active" state and the user will be added as a member of the team. To add a membership between an unaffiliated user and a team, the authenticated user must be an organization owner.
     *
     * If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a team maintainer.
     *
     * @see {@link https://docs.github.com/enterprise-server@2.20/rest/reference/teams#add-or-update-team-membership-for-a-user} - API method documentation
     */
    teamsAddOrUpdateMembershipForUser(req: operations.TeamsAddOrUpdateMembershipForUserRequest, config?: AxiosRequestConfig): Promise<operations.TeamsAddOrUpdateMembershipForUserResponse>;
    /**
     * Add or update team project permissions
     *
     * @remarks
     * Adds an organization project to a team. To add a project to a team or update the team's permission on a project, the authenticated user must have `admin` permissions for the project. The project and team must be part of the same organization.
     *
     * @see {@link https://docs.github.com/enterprise-server@2.20/rest/reference/teams/#add-or-update-team-project-permissions} - API method documentation
     */
    teamsAddOrUpdateProjectPermissions(req: operations.TeamsAddOrUpdateProjectPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.TeamsAddOrUpdateProjectPermissionsResponse>;
    /**
     * Add or update team repository permissions
     *
     * @remarks
     * To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be able to see the team. The repository must be owned by the organization, or a direct fork of a repository owned by the organization. You will get a `422 Unprocessable Entity` status if you attempt to add a repository to a team that is not owned by the organization.
     *
     * Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#http-verbs)."
     *
     * @see {@link https://docs.github.com/enterprise-server@2.20/rest/reference/teams/#add-or-update-team-repository-permissions} - API method documentation
     */
    teamsAddOrUpdateRepoPermissions(req: operations.TeamsAddOrUpdateRepoPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.TeamsAddOrUpdateRepoPermissionsResponse>;
    /**
     * Check team permissions for a project
     *
     * @remarks
     * Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. The response includes projects inherited from a parent team.
     *
     * @see {@link https://docs.github.com/enterprise-server@2.20/rest/reference/teams/#check-team-permissions-for-a-project} - API method documentation
     */
    teamsCheckPermissionsForProject(req: operations.TeamsCheckPermissionsForProjectRequest, config?: AxiosRequestConfig): Promise<operations.TeamsCheckPermissionsForProjectResponse>;
    /**
     * Check team permissions for a repository
     *
     * @remarks
     * **Note**: Repositories inherited through a parent team will also be checked.
     *
     * You can also get information about the specified repository, including what permissions the team grants on it, by passing the following custom [media type](https://docs.github.com/enterprise-server@2.20/rest/overview/media-types/) via the `Accept` header:
     *
     * @see {@link https://docs.github.com/enterprise-server@2.20/rest/reference/teams/#check-team-permissions-for-a-repository} - API method documentation
     */
    teamsCheckPermissionsForRepo(req: operations.TeamsCheckPermissionsForRepoRequest, config?: AxiosRequestConfig): Promise<operations.TeamsCheckPermissionsForRepoResponse>;
    /**
     * Create a team
     *
     * @remarks
     * To create a team, the authenticated user must be a member or owner of `{org}`. By default, organization members can create teams. Organization owners can limit team creation to organization owners. For more information, see "[Setting team creation permissions](https://help.github.com/en/articles/setting-team-creation-permissions-in-your-organization)."
     *
     * When you create a new team, you automatically become a team maintainer without explicitly adding yourself to the optional array of `maintainers`. For more information, see "[About teams](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/about-teams)".
     *
     * @see {@link https://docs.github.com/enterprise-server@2.20/rest/reference/teams#create-a-team} - API method documentation
     */
    teamsCreate(req: operations.TeamsCreateRequest, config?: AxiosRequestConfig): Promise<operations.TeamsCreateResponse>;
    /**
     * Create a discussion
     *
     * @remarks
     * Creates a new discussion post on a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" for details.
     *
     * @see {@link https://docs.github.com/enterprise-server@2.20/rest/reference/teams#create-a-discussion} - API method documentation
     */
    teamsCreateDiscussion(req: operations.TeamsCreateDiscussionRequest, config?: AxiosRequestConfig): Promise<operations.TeamsCreateDiscussionResponse>;
    /**
     * Create a discussion comment
     *
     * @remarks
     * Creates a new comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" for details.
     *
     * @see {@link https://docs.github.com/enterprise-server@2.20/rest/reference/teams#create-a-discussion-comment} - API method documentation
     */
    teamsCreateDiscussionComment(req: operations.TeamsCreateDiscussionCommentRequest, config?: AxiosRequestConfig): Promise<operations.TeamsCreateDiscussionCommentResponse>;
    /**
     * Delete a team
     *
     * @remarks
     * To delete a team, the authenticated user must be an organization owner or team maintainer.
     *
     * If you are an organization owner, deleting a parent team will delete all of its child teams as well.
     *
     * @see {@link https://docs.github.com/enterprise-server@2.20/rest/reference/teams/#delete-a-team} - API method documentation
     */
    teamsDelete(req: operations.TeamsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.TeamsDeleteResponse>;
    /**
     * Delete a discussion
     *
     * @remarks
     * Delete a discussion from a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * @see {@link https://docs.github.com/enterprise-server@2.20/rest/reference/teams#delete-a-discussion} - API method documentation
     */
    teamsDeleteDiscussion(req: operations.TeamsDeleteDiscussionRequest, config?: AxiosRequestConfig): Promise<operations.TeamsDeleteDiscussionResponse>;
    /**
     * Delete a discussion comment
     *
     * @remarks
     * Deletes a comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * @see {@link https://docs.github.com/enterprise-server@2.20/rest/reference/teams#delete-a-discussion-comment} - API method documentation
     */
    teamsDeleteDiscussionComment(req: operations.TeamsDeleteDiscussionCommentRequest, config?: AxiosRequestConfig): Promise<operations.TeamsDeleteDiscussionCommentResponse>;
    /**
     * Get a team
     *
     * @see {@link https://docs.github.com/enterprise-server@2.20/rest/reference/teams/#get-a-team} - API method documentation
     */
    teamsGet(req: operations.TeamsGetRequest, config?: AxiosRequestConfig): Promise<operations.TeamsGetResponse>;
    /**
     * Get a team by name
     *
     * @remarks
     * Gets a team using the team's `slug`. GitHub Enterprise Server generates the `slug` from the team `name`.
     *
     * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}`.
     *
     * @see {@link https://docs.github.com/enterprise-server@2.20/rest/reference/teams#get-a-team-by-name} - API method documentation
     */
    teamsGetByName(req: operations.TeamsGetByNameRequest, config?: AxiosRequestConfig): Promise<operations.TeamsGetByNameResponse>;
    /**
     * Get a discussion
     *
     * @remarks
     * Get a specific discussion on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * @see {@link https://docs.github.com/enterprise-server@2.20/rest/reference/teams#get-a-discussion} - API method documentation
     */
    teamsGetDiscussion(req: operations.TeamsGetDiscussionRequest, config?: AxiosRequestConfig): Promise<operations.TeamsGetDiscussionResponse>;
    /**
     * Get a discussion comment
     *
     * @remarks
     * Get a specific comment on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * @see {@link https://docs.github.com/enterprise-server@2.20/rest/reference/teams#get-a-discussion-comment} - API method documentation
     */
    teamsGetDiscussionComment(req: operations.TeamsGetDiscussionCommentRequest, config?: AxiosRequestConfig): Promise<operations.TeamsGetDiscussionCommentResponse>;
    /**
     * Get team member (Legacy)
     *
     * @remarks
     * The "Get team member" endpoint (described below) is deprecated.
     *
     * We recommend using the [Get team membership for a user](https://docs.github.com/enterprise-server@2.20/rest/reference/teams#get-team-membership-for-a-user) endpoint instead. It allows you to get both active and pending memberships.
     *
     * To list members in a team, the team must be visible to the authenticated user.
     *
     * @see {@link https://docs.github.com/enterprise-server@2.20/rest/reference/teams#get-team-member-legacy} - API method documentation
     */
    teamsGetMemberLegacy(req: operations.TeamsGetMemberLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsGetMemberLegacyResponse>;
    /**
     * Get team membership for a user
     *
     * @remarks
     * Team members will include the members of child teams.
     *
     * To get a user's membership with a team, the team must be visible to the authenticated user.
     *
     * **Note:** The `role` for organization owners returns as `maintainer`. For more information about `maintainer` roles, see [Create a team](https://docs.github.com/enterprise-server@2.20/rest/reference/teams#create-a-team).
     *
     * @see {@link https://docs.github.com/enterprise-server@2.20/rest/reference/teams#get-team-membership-for-a-user} - API method documentation
     */
    teamsGetMembershipForUser(req: operations.TeamsGetMembershipForUserRequest, config?: AxiosRequestConfig): Promise<operations.TeamsGetMembershipForUserResponse>;
    /**
     * List teams
     *
     * @remarks
     * Lists all teams in an organization that are visible to the authenticated user.
     *
     * @see {@link https://docs.github.com/enterprise-server@2.20/rest/reference/teams#list-teams} - API method documentation
     */
    teamsList(req: operations.TeamsListRequest, config?: AxiosRequestConfig): Promise<operations.TeamsListResponse>;
    /**
     * List child teams
     *
     * @see {@link https://docs.github.com/enterprise-server@2.20/rest/reference/teams/#list-child-teams} - API method documentation
     */
    teamsListChild(req: operations.TeamsListChildRequest, config?: AxiosRequestConfig): Promise<operations.TeamsListChildResponse>;
    /**
     * List discussion comments
     *
     * @remarks
     * List all comments on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * @see {@link https://docs.github.com/enterprise-server@2.20/rest/reference/teams#list-discussion-comments} - API method documentation
     */
    teamsListDiscussionComments(req: operations.TeamsListDiscussionCommentsRequest, config?: AxiosRequestConfig): Promise<operations.TeamsListDiscussionCommentsResponse>;
    /**
     * List discussions
     *
     * @remarks
     * List all discussions on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * @see {@link https://docs.github.com/enterprise-server@2.20/rest/reference/teams#list-discussions} - API method documentation
     */
    teamsListDiscussions(req: operations.TeamsListDiscussionsRequest, config?: AxiosRequestConfig): Promise<operations.TeamsListDiscussionsResponse>;
    /**
     * List teams for the authenticated user
     *
     * @remarks
     * List all of the teams across all of the organizations to which the authenticated user belongs. This method requires `user`, `repo`, or `read:org` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/) when authenticating via [OAuth](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/).
     *
     * @see {@link https://docs.github.com/enterprise-server@2.20/rest/reference/teams#list-teams-for-the-authenticated-user} - API method documentation
     */
    teamsListForAuthenticatedUser(req: operations.TeamsListForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.TeamsListForAuthenticatedUserResponse>;
    /**
     * List team members
     *
     * @remarks
     * Team members will include the members of child teams.
     *
     * To list members in a team, the team must be visible to the authenticated user.
     *
     * @see {@link https://docs.github.com/enterprise-server@2.20/rest/reference/teams#list-team-members} - API method documentation
     */
    teamsListMembers(req: operations.TeamsListMembersRequest, config?: AxiosRequestConfig): Promise<operations.TeamsListMembersResponse>;
    /**
     * List team projects
     *
     * @remarks
     * Lists the organization projects for a team. If you are an [authenticated](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#authentication) site administrator for your Enterprise instance, you will be able to list all projects for the team.
     *
     * @see {@link https://docs.github.com/enterprise-server@2.20/rest/reference/teams/#list-team-projects} - API method documentation
     */
    teamsListProjects(req: operations.TeamsListProjectsRequest, config?: AxiosRequestConfig): Promise<operations.TeamsListProjectsResponse>;
    /**
     * List team repositories
     *
     * @remarks
     * If you are an [authenticated](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#authentication) site administrator for your Enterprise instance, you will be able to list all repositories for the team.
     *
     * @see {@link https://docs.github.com/enterprise-server@2.20/rest/reference/teams/#list-team-repositories} - API method documentation
     */
    teamsListRepos(req: operations.TeamsListReposRequest, config?: AxiosRequestConfig): Promise<operations.TeamsListReposResponse>;
    /**
     * Remove team member (Legacy)
     *
     * @remarks
     * The "Remove team member" endpoint (described below) is deprecated.
     *
     * We recommend using the [Remove team membership for a user](https://docs.github.com/enterprise-server@2.20/rest/reference/teams#remove-team-membership-for-a-user) endpoint instead. It allows you to remove both active and pending memberships.
     *
     * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
     *
     * To remove a team member, the authenticated user must have 'admin' permissions to the team or be an owner of the org that the team is associated with. Removing a team member does not delete the user, it just removes them from the team.
     *
     * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
     *
     * @see {@link https://docs.github.com/enterprise-server@2.20/rest/reference/teams#remove-team-member-legacy} - API method documentation
     */
    teamsRemoveMemberLegacy(req: operations.TeamsRemoveMemberLegacyRequest, config?: AxiosRequestConfig): Promise<operations.TeamsRemoveMemberLegacyResponse>;
    /**
     * Remove team membership for a user
     *
     * @remarks
     * To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team.
     *
     * @see {@link https://docs.github.com/enterprise-server@2.20/rest/reference/teams#remove-team-membership-for-a-user} - API method documentation
     */
    teamsRemoveMembershipForUser(req: operations.TeamsRemoveMembershipForUserRequest, config?: AxiosRequestConfig): Promise<operations.TeamsRemoveMembershipForUserResponse>;
    /**
     * Remove a project from a team
     *
     * @remarks
     * Removes an organization project from a team. An organization owner or a team maintainer can remove any project from the team. To remove a project from a team as an organization member, the authenticated user must have `read` access to both the team and project, or `admin` access to the team or project. **Note:** This endpoint removes the project from the team, but does not delete it.
     *
     * @see {@link https://docs.github.com/enterprise-server@2.20/rest/reference/teams/#remove-a-project-from-a-team} - API method documentation
     */
    teamsRemoveProject(req: operations.TeamsRemoveProjectRequest, config?: AxiosRequestConfig): Promise<operations.TeamsRemoveProjectResponse>;
    /**
     * Remove a repository from a team
     *
     * @remarks
     * If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. NOTE: This does not delete the repository, it just removes it from the team.
     *
     * @see {@link https://docs.github.com/enterprise-server@2.20/rest/reference/teams/#remove-a-repository-from-a-team} - API method documentation
     */
    teamsRemoveRepo(req: operations.TeamsRemoveRepoRequest, config?: AxiosRequestConfig): Promise<operations.TeamsRemoveRepoResponse>;
    /**
     * Update a team
     *
     * @remarks
     * To edit a team, the authenticated user must either be an organization owner or a team maintainer.
     *
     * **Note:** With nested teams, the `privacy` for parent teams cannot be `secret`.
     *
     * @see {@link https://docs.github.com/enterprise-server@2.20/rest/reference/teams/#update-a-team} - API method documentation
     */
    teamsUpdate(req: operations.TeamsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TeamsUpdateResponse>;
    /**
     * Update a discussion
     *
     * @remarks
     * Edits the title and body text of a discussion post. Only the parameters you provide are updated. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * @see {@link https://docs.github.com/enterprise-server@2.20/rest/reference/teams#update-a-discussion} - API method documentation
     */
    teamsUpdateDiscussion(req: operations.TeamsUpdateDiscussionRequest, config?: AxiosRequestConfig): Promise<operations.TeamsUpdateDiscussionResponse>;
    /**
     * Update a discussion comment
     *
     * @remarks
     * Edits the body text of a discussion comment. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * @see {@link https://docs.github.com/enterprise-server@2.20/rest/reference/teams#update-a-discussion-comment} - API method documentation
     */
    teamsUpdateDiscussionComment(req: operations.TeamsUpdateDiscussionCommentRequest, config?: AxiosRequestConfig): Promise<operations.TeamsUpdateDiscussionCommentResponse>;
}
