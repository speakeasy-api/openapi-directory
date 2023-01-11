import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Teams {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteTeamsUsernameHooksUid - Deletes the specified webhook subscription from the given team
     * account.
     *
     * **This endpoint has been deprecated, and you should
     * use the new [workspace hooks](../../../workspaces/%7Bworkspace%7D/hooks/%7Buid%7D#delete) endpoint.
     * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    deleteTeamsUsernameHooksUid(req: operations.DeleteTeamsUsernameHooksUidRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTeamsUsernameHooksUidResponse>;
    /**
     * getTeams - Returns all the teams that the authenticated user is associated
     * with.
     *
     * **This endpoint has been deprecated,
     * and you should use the [workspaces](./workspaces) endpoint.
     * For more information, see [this post](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    getTeams(req: operations.GetTeamsRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsResponse>;
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
    getTeamsUsername(req: operations.GetTeamsUsernameRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsUsernameResponse>;
    /**
     * getTeamsUsernameFollowers - Returns the list of accounts that are following this team.
     *
     * **This endpoint has been deprecated. There is no workspaces replacement.
     * For more information, see [this post](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    getTeamsUsernameFollowers(req: operations.GetTeamsUsernameFollowersRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsUsernameFollowersResponse>;
    /**
     * getTeamsUsernameFollowing - Returns the list of accounts this team is following.
     *
     * **This endpoint has been deprecated. There is no workspaces replacement.
     * For more information, see [this post](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    getTeamsUsernameFollowing(req: operations.GetTeamsUsernameFollowingRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsUsernameFollowingResponse>;
    /**
     * getTeamsUsernameHooks - Returns a paginated list of webhooks installed on this team.
     *
     * **This endpoint has been deprecated, and you should
     * use the new [workspace hooks](../../workspaces/%7Bworkspace%7D/hooks#get) endpoint.
     * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    getTeamsUsernameHooks(req: operations.GetTeamsUsernameHooksRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsUsernameHooksResponse>;
    /**
     * getTeamsUsernameHooksUid - Returns the webhook with the specified id installed on the given
     * team account.
     *
     * **This endpoint has been deprecated, and you should
     * use the new [workspace hooks](../../../workspaces/%7Bworkspace%7D/hooks/%7Buid%7D#get) endpoint.
     * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    getTeamsUsernameHooksUid(req: operations.GetTeamsUsernameHooksUidRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsUsernameHooksUidResponse>;
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
    getTeamsUsernameMembers(req: operations.GetTeamsUsernameMembersRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsUsernameMembersResponse>;
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
    getTeamsUsernamePermissions(req: operations.GetTeamsUsernamePermissionsRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsUsernamePermissionsResponse>;
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
    getTeamsUsernamePermissionsRepositories(req: operations.GetTeamsUsernamePermissionsRepositoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsUsernamePermissionsRepositoriesResponse>;
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
    getTeamsUsernamePermissionsRepositoriesRepoSlug(req: operations.GetTeamsUsernamePermissionsRepositoriesRepoSlugRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsUsernamePermissionsRepositoriesRepoSlugResponse>;
    /**
     * getTeamsWorkspaceRepositories - All repositories in the given workspace. This includes any private
     * repositories the calling user has access to.
     *
     * **This endpoint has been deprecated,
     * and you should use the [repository list](../../repositories/%7Bworkspace%7D) endpoint.
     * For more information, see the [deprecation announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    getTeamsWorkspaceRepositories(req: operations.GetTeamsWorkspaceRepositoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsWorkspaceRepositoriesResponse>;
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
    getUserPermissionsTeams(req: operations.GetUserPermissionsTeamsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserPermissionsTeamsResponse>;
    /**
     * getUsersWorkspaceRepositories - All repositories in the given workspace. This includes any private
     * repositories the calling user has access to.
     *
     * **This endpoint has been deprecated,
     * and you should use the [repository list](../../repositories/%7Bworkspace%7D) endpoint.
     * For more information, see the [deprecation announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    getUsersWorkspaceRepositories(req: operations.GetUsersWorkspaceRepositoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersWorkspaceRepositoriesResponse>;
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
    postTeamsUsernameHooks(req: operations.PostTeamsUsernameHooksRequest, config?: AxiosRequestConfig): Promise<operations.PostTeamsUsernameHooksResponse>;
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
    putTeamsUsernameHooksUid(req: operations.PutTeamsUsernameHooksUidRequest, config?: AxiosRequestConfig): Promise<operations.PutTeamsUsernameHooksUidResponse>;
}
