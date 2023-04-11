import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Interact with and view information about users and also current user.
 */
export declare class Users {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add an email address for the authenticated user
     *
     * @remarks
     * This endpoint is accessible with the `user` scope.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/users#add-an-email-address-for-the-authenticated-user} - API method documentation
     */
    usersAddEmailForAuthenticatedUser(req: any, config?: AxiosRequestConfig): Promise<operations.UsersAddEmailForAuthenticatedUserResponse>;
    /**
     * Block a user
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/users#block-a-user} - API method documentation
     */
    usersBlock(req: operations.UsersBlockRequest, config?: AxiosRequestConfig): Promise<operations.UsersBlockResponse>;
    /**
     * Check if a user is blocked by the authenticated user
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/users#check-if-a-user-is-blocked-by-the-authenticated-user} - API method documentation
     */
    usersCheckBlocked(req: operations.UsersCheckBlockedRequest, config?: AxiosRequestConfig): Promise<operations.UsersCheckBlockedResponse>;
    /**
     * Check if a user follows another user
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/users#check-if-a-user-follows-another-user} - API method documentation
     */
    usersCheckFollowingForUser(req: operations.UsersCheckFollowingForUserRequest, config?: AxiosRequestConfig): Promise<operations.UsersCheckFollowingForUserResponse>;
    /**
     * Check if a person is followed by the authenticated user
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/users#check-if-a-person-is-followed-by-the-authenticated-user} - API method documentation
     */
    usersCheckPersonIsFollowedByAuthenticated(req: operations.UsersCheckPersonIsFollowedByAuthenticatedRequest, config?: AxiosRequestConfig): Promise<operations.UsersCheckPersonIsFollowedByAuthenticatedResponse>;
    /**
     * Create a GPG key for the authenticated user
     *
     * @remarks
     * Adds a GPG key to the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth, or OAuth with at least `write:gpg_key` [scope](https://docs.github.com/enterprise-cloud@latest//apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/users#create-a-gpg-key-for-the-authenticated-user} - API method documentation
     */
    usersCreateGpgKeyForAuthenticatedUser(req: operations.UsersCreateGpgKeyForAuthenticatedUserRequestBody, config?: AxiosRequestConfig): Promise<operations.UsersCreateGpgKeyForAuthenticatedUserResponse>;
    /**
     * Create a public SSH key for the authenticated user
     *
     * @remarks
     * Adds a public SSH key to the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth, or OAuth with at least `write:public_key` [scope](https://docs.github.com/enterprise-cloud@latest//apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/users#create-a-public-ssh-key-for-the-authenticated-user} - API method documentation
     */
    usersCreatePublicSshKeyForAuthenticatedUser(req: operations.UsersCreatePublicSshKeyForAuthenticatedUserRequestBody, config?: AxiosRequestConfig): Promise<operations.UsersCreatePublicSshKeyForAuthenticatedUserResponse>;
    /**
     * Create a SSH signing key for the authenticated user
     *
     * @remarks
     * Creates an SSH signing key for the authenticated user's GitHub account. You must authenticate with Basic Authentication, or you must authenticate with OAuth with at least `write:ssh_signing_key` scope. For more information, see "[Understanding scopes for OAuth apps](https://docs.github.com/enterprise-cloud@latest//apps/building-oauth-apps/understanding-scopes-for-oauth-apps/)."
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/users#create-an-ssh-signing-key-for-the-authenticated-user} - API method documentation
     */
    usersCreateSshSigningKeyForAuthenticatedUser(req: operations.UsersCreateSshSigningKeyForAuthenticatedUserRequestBody, config?: AxiosRequestConfig): Promise<operations.UsersCreateSshSigningKeyForAuthenticatedUserResponse>;
    /**
     * Delete an email address for the authenticated user
     *
     * @remarks
     * This endpoint is accessible with the `user` scope.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/users#delete-an-email-address-for-the-authenticated-user} - API method documentation
     */
    usersDeleteEmailForAuthenticatedUser(req: any, config?: AxiosRequestConfig): Promise<operations.UsersDeleteEmailForAuthenticatedUserResponse>;
    /**
     * Delete a GPG key for the authenticated user
     *
     * @remarks
     * Removes a GPG key from the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `admin:gpg_key` [scope](https://docs.github.com/enterprise-cloud@latest//apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/users#delete-a-gpg-key-for-the-authenticated-user} - API method documentation
     */
    usersDeleteGpgKeyForAuthenticatedUser(req: operations.UsersDeleteGpgKeyForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.UsersDeleteGpgKeyForAuthenticatedUserResponse>;
    /**
     * Delete a public SSH key for the authenticated user
     *
     * @remarks
     * Removes a public SSH key from the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `admin:public_key` [scope](https://docs.github.com/enterprise-cloud@latest//apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/users#delete-a-public-ssh-key-for-the-authenticated-user} - API method documentation
     */
    usersDeletePublicSshKeyForAuthenticatedUser(req: operations.UsersDeletePublicSshKeyForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.UsersDeletePublicSshKeyForAuthenticatedUserResponse>;
    /**
     * Delete an SSH signing key for the authenticated user
     *
     * @remarks
     * Deletes an SSH signing key from the authenticated user's GitHub account. You must authenticate with Basic Authentication, or you must authenticate with OAuth with at least `admin:ssh_signing_key` scope. For more information, see "[Understanding scopes for OAuth apps](https://docs.github.com/enterprise-cloud@latest//apps/building-oauth-apps/understanding-scopes-for-oauth-apps/)."
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/users#delete-a-ssh-signing-key-for-the-authenticated-user} - API method documentation
     */
    usersDeleteSshSigningKeyForAuthenticatedUser(req: operations.UsersDeleteSshSigningKeyForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.UsersDeleteSshSigningKeyForAuthenticatedUserResponse>;
    /**
     * Follow a user
     *
     * @remarks
     * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#http-verbs)."
     *
     * Following a user requires the user to be logged in and authenticated with basic auth or OAuth with the `user:follow` scope.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/users#follow-a-user} - API method documentation
     */
    usersFollow(req: operations.UsersFollowRequest, config?: AxiosRequestConfig): Promise<operations.UsersFollowResponse>;
    /**
     * Get the authenticated user
     *
     * @remarks
     * If the authenticated user is authenticated through basic authentication or OAuth with the `user` scope, then the response lists public and private profile information.
     *
     * If the authenticated user is authenticated through OAuth without the `user` scope, then the response lists only public profile information.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/users#get-the-authenticated-user} - API method documentation
     */
    usersGetAuthenticated(config?: AxiosRequestConfig): Promise<operations.UsersGetAuthenticatedResponse>;
    /**
     * Get a user
     *
     * @remarks
     * Provides publicly available information about someone with a GitHub account.
     *
     * GitHub Apps with the `Plan` user permission can use this endpoint to retrieve information about a user's GitHub Enterprise Cloud plan. The GitHub App must be authenticated as a user. See "[Identifying and authorizing users for GitHub Apps](https://docs.github.com/enterprise-cloud@latest//apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)" for details about authentication. For an example response, see 'Response with GitHub Enterprise Cloud plan information' below"
     *
     * The `email` key in the following response is the publicly visible email address from your GitHub Enterprise Cloud [profile page](https://github.com/settings/profile). When setting up your profile, you can select a primary email address to be “public” which provides an email entry for this endpoint. If you do not set a public email address for `email`, then it will have a value of `null`. You only see publicly visible email addresses when authenticated with GitHub Enterprise Cloud. For more information, see [Authentication](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#authentication).
     *
     * The Emails API enables you to list all of your email addresses, and toggle a primary email to be visible publicly. For more information, see "[Emails API](https://docs.github.com/enterprise-cloud@latest//rest/reference/users#emails)".
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/users#get-a-user} - API method documentation
     */
    usersGetByUsername(req: operations.UsersGetByUsernameRequest, config?: AxiosRequestConfig): Promise<operations.UsersGetByUsernameResponse>;
    /**
     * Get contextual information for a user
     *
     * @remarks
     * Provides hovercard information when authenticated through basic auth or OAuth with the `repo` scope. You can find out more about someone in relation to their pull requests, issues, repositories, and organizations.
     *
     * The `subject_type` and `subject_id` parameters provide context for the person's hovercard, which returns more information than without the parameters. For example, if you wanted to find out more about `octocat` who owns the `Spoon-Knife` repository via cURL, it would look like this:
     *
     * ```shell
     *  curl -u username:token
     *   https://api.github.com/users/octocat/hovercard?subject_type=repository&subject_id=1300192
     * ```
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/users#get-contextual-information-for-a-user} - API method documentation
     */
    usersGetContextForUser(req: operations.UsersGetContextForUserRequest, config?: AxiosRequestConfig): Promise<operations.UsersGetContextForUserResponse>;
    /**
     * Get a GPG key for the authenticated user
     *
     * @remarks
     * View extended details for a single GPG key. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:gpg_key` [scope](https://docs.github.com/enterprise-cloud@latest//apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/users#get-a-gpg-key-for-the-authenticated-user} - API method documentation
     */
    usersGetGpgKeyForAuthenticatedUser(req: operations.UsersGetGpgKeyForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.UsersGetGpgKeyForAuthenticatedUserResponse>;
    /**
     * Get a public SSH key for the authenticated user
     *
     * @remarks
     * View extended details for a single public SSH key. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:public_key` [scope](https://docs.github.com/enterprise-cloud@latest//apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/users#get-a-public-ssh-key-for-the-authenticated-user} - API method documentation
     */
    usersGetPublicSshKeyForAuthenticatedUser(req: operations.UsersGetPublicSshKeyForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.UsersGetPublicSshKeyForAuthenticatedUserResponse>;
    /**
     * Get an SSH signing key for the authenticated user
     *
     * @remarks
     * Gets extended details for an SSH signing key. You must authenticate with Basic Authentication, or you must authenticate with OAuth with at least `read:ssh_signing_key` scope. For more information, see "[Understanding scopes for OAuth apps](https://docs.github.com/enterprise-cloud@latest//apps/building-oauth-apps/understanding-scopes-for-oauth-apps/)."
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/users#get-a-ssh-signing-key-for-the-authenticated-user} - API method documentation
     */
    usersGetSshSigningKeyForAuthenticatedUser(req: operations.UsersGetSshSigningKeyForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.UsersGetSshSigningKeyForAuthenticatedUserResponse>;
    /**
     * List users
     *
     * @remarks
     * Lists all users, in the order that they signed up on GitHub Enterprise Cloud. This list includes personal user accounts and organization accounts.
     *
     * Note: Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of users.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/users#list-users} - API method documentation
     */
    usersList(req: operations.UsersListRequest, config?: AxiosRequestConfig): Promise<operations.UsersListResponse>;
    /**
     * List users blocked by the authenticated user
     *
     * @remarks
     * List the users you've blocked on your personal account.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/users#list-users-blocked-by-the-authenticated-user} - API method documentation
     */
    usersListBlockedByAuthenticatedUser(req: operations.UsersListBlockedByAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.UsersListBlockedByAuthenticatedUserResponse>;
    /**
     * List email addresses for the authenticated user
     *
     * @remarks
     * Lists all of your email addresses, and specifies which one is visible to the public. This endpoint is accessible with the `user:email` scope.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/users#list-email-addresses-for-the-authenticated-user} - API method documentation
     */
    usersListEmailsForAuthenticatedUser(req: operations.UsersListEmailsForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.UsersListEmailsForAuthenticatedUserResponse>;
    /**
     * List the people the authenticated user follows
     *
     * @remarks
     * Lists the people who the authenticated user follows.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/users#list-the-people-the-authenticated-user-follows} - API method documentation
     */
    usersListFollowedByAuthenticatedUser(req: operations.UsersListFollowedByAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.UsersListFollowedByAuthenticatedUserResponse>;
    /**
     * List followers of the authenticated user
     *
     * @remarks
     * Lists the people following the authenticated user.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/users#list-followers-of-the-authenticated-user} - API method documentation
     */
    usersListFollowersForAuthenticatedUser(req: operations.UsersListFollowersForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.UsersListFollowersForAuthenticatedUserResponse>;
    /**
     * List followers of a user
     *
     * @remarks
     * Lists the people following the specified user.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/users#list-followers-of-a-user} - API method documentation
     */
    usersListFollowersForUser(req: operations.UsersListFollowersForUserRequest, config?: AxiosRequestConfig): Promise<operations.UsersListFollowersForUserResponse>;
    /**
     * List the people a user follows
     *
     * @remarks
     * Lists the people who the specified user follows.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/users#list-the-people-a-user-follows} - API method documentation
     */
    usersListFollowingForUser(req: operations.UsersListFollowingForUserRequest, config?: AxiosRequestConfig): Promise<operations.UsersListFollowingForUserResponse>;
    /**
     * List GPG keys for the authenticated user
     *
     * @remarks
     * Lists the current user's GPG keys. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:gpg_key` [scope](https://docs.github.com/enterprise-cloud@latest//apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/users#list-gpg-keys-for-the-authenticated-user} - API method documentation
     */
    usersListGpgKeysForAuthenticatedUser(req: operations.UsersListGpgKeysForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.UsersListGpgKeysForAuthenticatedUserResponse>;
    /**
     * List GPG keys for a user
     *
     * @remarks
     * Lists the GPG keys for a user. This information is accessible by anyone.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/users#list-gpg-keys-for-a-user} - API method documentation
     */
    usersListGpgKeysForUser(req: operations.UsersListGpgKeysForUserRequest, config?: AxiosRequestConfig): Promise<operations.UsersListGpgKeysForUserResponse>;
    /**
     * List public email addresses for the authenticated user
     *
     * @remarks
     * Lists your publicly visible email address, which you can set with the [Set primary email visibility for the authenticated user](https://docs.github.com/enterprise-cloud@latest//rest/reference/users#set-primary-email-visibility-for-the-authenticated-user) endpoint. This endpoint is accessible with the `user:email` scope.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/users#list-public-email-addresses-for-the-authenticated-user} - API method documentation
     */
    usersListPublicEmailsForAuthenticatedUser(req: operations.UsersListPublicEmailsForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.UsersListPublicEmailsForAuthenticatedUserResponse>;
    /**
     * List public keys for a user
     *
     * @remarks
     * Lists the _verified_ public SSH keys for a user. This is accessible by anyone.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/users#list-public-keys-for-a-user} - API method documentation
     */
    usersListPublicKeysForUser(req: operations.UsersListPublicKeysForUserRequest, config?: AxiosRequestConfig): Promise<operations.UsersListPublicKeysForUserResponse>;
    /**
     * List public SSH keys for the authenticated user
     *
     * @remarks
     * Lists the public SSH keys for the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:public_key` [scope](https://docs.github.com/enterprise-cloud@latest//apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/users#list-public-ssh-keys-for-the-authenticated-user} - API method documentation
     */
    usersListPublicSshKeysForAuthenticatedUser(req: operations.UsersListPublicSshKeysForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.UsersListPublicSshKeysForAuthenticatedUserResponse>;
    /**
     * List SSH signing keys for the authenticated user
     *
     * @remarks
     * Lists the SSH signing keys for the authenticated user's GitHub account. You must authenticate with Basic Authentication, or you must authenticate with OAuth with at least `read:ssh_signing_key` scope. For more information, see "[Understanding scopes for OAuth apps](https://docs.github.com/enterprise-cloud@latest//apps/building-oauth-apps/understanding-scopes-for-oauth-apps/)."
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/users#list-public-ssh-signing-keys-for-the-authenticated-user} - API method documentation
     */
    usersListSshSigningKeysForAuthenticatedUser(req: operations.UsersListSshSigningKeysForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.UsersListSshSigningKeysForAuthenticatedUserResponse>;
    /**
     * List SSH signing keys for a user
     *
     * @remarks
     * Lists the SSH signing keys for a user. This operation is accessible by anyone.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/users#list-ssh-signing-keys-for-a-user} - API method documentation
     */
    usersListSshSigningKeysForUser(req: operations.UsersListSshSigningKeysForUserRequest, config?: AxiosRequestConfig): Promise<operations.UsersListSshSigningKeysForUserResponse>;
    /**
     * Set primary email visibility for the authenticated user
     *
     * @remarks
     * Sets the visibility for your primary email addresses.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/users#set-primary-email-visibility-for-the-authenticated-user} - API method documentation
     */
    usersSetPrimaryEmailVisibilityForAuthenticatedUser(req: operations.UsersSetPrimaryEmailVisibilityForAuthenticatedUserRequestBody, config?: AxiosRequestConfig): Promise<operations.UsersSetPrimaryEmailVisibilityForAuthenticatedUserResponse>;
    /**
     * Unblock a user
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/users#unblock-a-user} - API method documentation
     */
    usersUnblock(req: operations.UsersUnblockRequest, config?: AxiosRequestConfig): Promise<operations.UsersUnblockResponse>;
    /**
     * Unfollow a user
     *
     * @remarks
     * Unfollowing a user requires the user to be logged in and authenticated with basic auth or OAuth with the `user:follow` scope.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/users#unfollow-a-user} - API method documentation
     */
    usersUnfollow(req: operations.UsersUnfollowRequest, config?: AxiosRequestConfig): Promise<operations.UsersUnfollowResponse>;
    /**
     * Update the authenticated user
     *
     * @remarks
     * **Note:** If your email is set to private and you send an `email` parameter as part of this request to update your profile, your privacy settings are still enforced: the email address will not be displayed on your public profile or via the API.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/users/#update-the-authenticated-user} - API method documentation
     */
    usersUpdateAuthenticated(req: operations.UsersUpdateAuthenticatedRequestBody, config?: AxiosRequestConfig): Promise<operations.UsersUpdateAuthenticatedResponse>;
}
