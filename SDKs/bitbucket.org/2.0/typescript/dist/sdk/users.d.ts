import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The users resource allows you to access public information
 *
 * @remarks
 * associated with a user account. Most resources in the users
 * endpoint have been deprecated in favor of workspaces.
 *
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
     * Get current user
     *
     * @remarks
     * Returns the currently logged in user.
     */
    getUser(config?: AxiosRequestConfig): Promise<operations.GetUserResponse>;
    /**
     * List email addresses for current user
     *
     * @remarks
     * Returns all the authenticated user's email addresses. Both
     * confirmed and unconfirmed.
     */
    getUserEmails(config?: AxiosRequestConfig): Promise<operations.GetUserEmailsResponse>;
    /**
     * Get an email address for current user
     *
     * @remarks
     * Returns details about a specific one of the authenticated user's
     * email addresses.
     *
     * Details describe whether the address has been confirmed by the user and
     * whether it is the user's primary address or not.
     */
    getUserEmailsEmail(req: operations.GetUserEmailsEmailRequest, security: operations.GetUserEmailsEmailSecurity, config?: AxiosRequestConfig): Promise<operations.GetUserEmailsEmailResponse>;
    /**
     * Get a user
     *
     * @remarks
     * Gets the public information associated with a user account.
     *
     * If the user's profile is private, `location`, `website` and
     * `created_on` elements are omitted.
     *
     * Note that the user object returned by this operation is changing significantly, due to privacy changes.
     * See the [announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#changes-to-bitbucket-user-objects) for details.
     */
    getUsersSelectedUser(req: operations.GetUsersSelectedUserRequest, security: operations.GetUsersSelectedUserSecurity, config?: AxiosRequestConfig): Promise<operations.GetUsersSelectedUserResponse>;
}
