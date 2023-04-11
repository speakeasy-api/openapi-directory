import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The user APIs allow you to create, update and delete users from your account. Users can be assigned unique permissions, set to expire after a certain time period, and more.
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
     * Create a user
     *
     * @remarks
     * Adds a new user to the account. The user may be configured as an admin or standard user, and (if a standard user) may be assigned a restricted [home directory](/docs/account/04-users/00-introduction#setting-the-user-s-home-directory) and restricted [permissions](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions).
     *
     * **Notes:**
     *
     * - You must be an [admin-level user](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to use this.
     */
    addUser(req: operations.AddUserRequest, config?: AxiosRequestConfig): Promise<operations.AddUserResponse>;
    /**
     * Delete a user
     *
     * @remarks
     * Delete a user from the account. Deleting a user does **NOT** delete any files from the account; it merely removes a user's access. Aternatively, locking a user via the [PATCH /users/{id}](#operation/updateUser) will keep the user in your account, but make it unable to log in.
     *
     * Resources and shares owned by the deleted user will be owned by the master user after the deletion.
     *
     * **Notes:**
     *
     * - You must have [admin-level access](/docs/account/04-users/01-admin-users) to delete a user.
     * - The primary owner of the account cannot be deleted.
     *
     */
    deleteUser(req: operations.DeleteUserRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserResponse>;
    /**
     * Get info for a user
     *
     * @remarks
     * Get the details for a specific user. You can use the `include` parameter to also get the details of related records, such as the account or the home directory.
     *
     * **Notes:**
     *
     * - You must have [admin or master](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) access to use this.
     */
    getUserById(req: operations.GetUserByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetUserByIdResponse>;
    /**
     * Get a list of users
     *
     * @remarks
     * Get a list of the users in your account. There are three main types of searches you can do with this method:
     *
     * 1. Search for a user by username. If you provide the `username` parameter in your call, then only the user who exactly matches that username will be in the list of matches. Any other parameters are ignored.
     * 1. Search for a user by individual filter fields (`nickname`,`email`,`role`,`status`,`homeDir`). Users in the list will be ones who match all of the filters you choose to search by. For example, you could look for users with the "admin" `role` AND `email` addresses ending in "*@acme.com".
     * 1. Search for a user by search string. If you provide the `search` parameter, users whose nickname OR email OR role OR homeDir match value your provide.
     *
     * **Notes:**
     *
     * - You must be an [admin-level user](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to use this.
     * - The homeDir is the full path to the user's home directory, not a resource ID or hash.
     */
    listUsers(req: operations.ListUsersRequest, config?: AxiosRequestConfig): Promise<operations.ListUsersResponse>;
    /**
     * Update a user
     *
     * @remarks
     * Updates the settings for the user. Note that the unique key for this API call is our internal ID, and _not_ the username, as the username can be changed.
     *
     * In the request body, you should only send the parameters for values that you wish to change for the user.
     *
     * **Notes:**
     *
     * - You must have [admin or master](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) access to edit other users. If you have user-level access, you can only update your own user settings.
     * - You cannot edit a master user with this method.
     */
    updateUser(req: operations.UpdateUserRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUserResponse>;
}
