import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Users {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteUsersSelectedUserHooksUid - Deletes the specified webhook subscription from the given user
     * account.
     *
     * Note that the username path parameter has been deprecated due to
     * [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis).
     * Use the account's UUID or account_id instead.
     *
     * **This endpoint has been deprecated, and you should
     * use the new [workspace hooks](../../../workspaces/%7Bworkspace%7D/hooks/%7Buid%7D#delete) endpoint.
     * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    deleteUsersSelectedUserHooksUid(req: operations.DeleteUsersSelectedUserHooksUidRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUsersSelectedUserHooksUidResponse>;
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
     * getUser - Returns the currently logged in user.
    **/
    getUser(req: operations.GetUserRequest, config?: AxiosRequestConfig): Promise<operations.GetUserResponse>;
    /**
     * getUserEmails - Returns all the authenticated user's email addresses. Both
     * confirmed and unconfirmed.
    **/
    getUserEmails(req: operations.GetUserEmailsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserEmailsResponse>;
    /**
     * getUserEmailsEmail - Returns details about a specific one of the authenticated user's
     * email addresses.
     *
     * Details describe whether the address has been confirmed by the user and
     * whether it is the user's primary address or not.
    **/
    getUserEmailsEmail(req: operations.GetUserEmailsEmailRequest, config?: AxiosRequestConfig): Promise<operations.GetUserEmailsEmailResponse>;
    /**
     * getUsersSelectedUser - Gets the public information associated with a user account.
     *
     * If the user's profile is private, `location`, `website` and
     * `created_on` elements are omitted.
     *
     * Note that the user object returned by this operation is changing significantly, due to privacy changes.
     * See the [announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#changes-to-bitbucket-user-objects) for details.
    **/
    getUsersSelectedUser(req: operations.GetUsersSelectedUserRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersSelectedUserResponse>;
    /**
     * getUsersSelectedUserHooks - Returns a paginated list of webhooks installed on this user account.
     *
     * Note that the username path parameter has been deprecated due to
     * [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis).
     * Use the account's UUID or account_id instead.
     *
     * **This endpoint has been deprecated, and you should
     * use the new [workspace hooks](../../workspaces/%7Bworkspace%7D/hooks#get) endpoint.
     * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    getUsersSelectedUserHooks(req: operations.GetUsersSelectedUserHooksRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersSelectedUserHooksResponse>;
    /**
     * getUsersSelectedUserHooksUid - Returns the webhook with the specified id installed on the given
     * user account.
     *
     * Note that the username path parameter has been deprecated due to
     * [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis).
     * Use the account's UUID or account_id instead.
     *
     * **This endpoint has been deprecated, and you should
     * use the new [workspace hook details](../../../workspaces/%7Bworkspace%7D/hooks/%7Buid%7D#get) endpoint.
     * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    getUsersSelectedUserHooksUid(req: operations.GetUsersSelectedUserHooksUidRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersSelectedUserHooksUidResponse>;
    /**
     * getUsersUsernameMembers - **This endpoint has been deprecated,
     * and you should use the [workspaces](../../workspaces/%7Bworkspace%7D/members) endpoint.
     * For more information, see [this post](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    getUsersUsernameMembers(req: operations.GetUsersUsernameMembersRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersUsernameMembersResponse>;
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
     * postUsersSelectedUserHooks - Creates a new webhook on the specified user account.
     *
     * Account-level webhooks are fired for events from all repositories
     * belonging to that account.
     *
     * Note that one can only register webhooks on one's own account, not that
     * of others.
     *
     * Also, note that the username path parameter has been deprecated due to
     * [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis).
     * Use the account's UUID or account_id instead.
     *
     * **This endpoint has been deprecated, and you should
     * use the new [workspace hooks](../../workspaces/%7Bworkspace%7D/hooks#post) endpoint.
     * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    postUsersSelectedUserHooks(req: operations.PostUsersSelectedUserHooksRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersSelectedUserHooksResponse>;
    /**
     * putUsersSelectedUserHooksUid - Updates the specified webhook subscription.
     *
     * The following properties can be mutated:
     *
     * * `description`
     * * `url`
     * * `active`
     * * `events`
     *
     * Note that the username path parameter has been deprecated due to
     * [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis).
     * Use the account's UUID or account_id instead.
     *
     * **This endpoint has been deprecated, and you should
     * use the new [workspace hook details](../../../workspaces/%7Bworkspace%7D/hooks/%7Buid%7D#put) endpoint.
     * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    putUsersSelectedUserHooksUid(req: operations.PutUsersSelectedUserHooksUidRequest, config?: AxiosRequestConfig): Promise<operations.PutUsersSelectedUserHooksUidResponse>;
}
