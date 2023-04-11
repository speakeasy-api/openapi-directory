import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Users {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a user by id
     */
    adminGetUser(req: operations.AdminGetUserRequest, config?: AxiosRequestConfig): Promise<operations.AdminGetUserResponse>;
    /**
     * Get a list of users
     */
    adminListUsers(req: operations.AdminListUsersRequest, config?: AxiosRequestConfig): Promise<operations.AdminListUsersResponse>;
    /**
     * Anonymize a user
     */
    anonymizeUser(req: operations.AnonymizeUserRequest, config?: AxiosRequestConfig): Promise<operations.AnonymizeUserResponse>;
    /**
     * Change password
     */
    changePassword(req: operations.ChangePasswordRequest, config?: AxiosRequestConfig): Promise<operations.ChangePasswordResponse>;
    /**
     * Creates a user
     */
    createUser(req: operations.CreateUserRequest, config?: AxiosRequestConfig): Promise<operations.CreateUserResponse>;
    /**
     * Delete a user
     */
    deleteUser(req: operations.DeleteUserRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserResponse>;
    /**
     * Get a single user by username
     */
    getUser(req: operations.GetUserRequest, config?: AxiosRequestConfig): Promise<operations.GetUserResponse>;
    /**
     * Get email addresses belonging to a user
     */
    getUserEmails(req: operations.GetUserEmailsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserEmailsResponse>;
    /**
     * Get a user by external_id
     */
    getUserExternalId(req: operations.GetUserExternalIdRequest, config?: AxiosRequestConfig): Promise<operations.GetUserExternalIdResponse>;
    /**
     * Get a user by identity provider external ID
     */
    getUserIdentiyProviderExternalId(req: operations.GetUserIdentiyProviderExternalIdRequest, config?: AxiosRequestConfig): Promise<operations.GetUserIdentiyProviderExternalIdResponse>;
    /**
     * Get a list of user actions
     */
    listUserActions(req: operations.ListUserActionsRequest, config?: AxiosRequestConfig): Promise<operations.ListUserActionsResponse>;
    /**
     * List badges for a user
     */
    listUserBadges(req: operations.ListUserBadgesRequest, config?: AxiosRequestConfig): Promise<operations.ListUserBadgesResponse>;
    /**
     * Get a public list of users
     */
    listUsersPublic(req: operations.ListUsersPublicRequest, config?: AxiosRequestConfig): Promise<operations.ListUsersPublicResponse>;
    /**
     * Log a user out
     */
    logOutUser(req: operations.LogOutUserRequest, config?: AxiosRequestConfig): Promise<operations.LogOutUserResponse>;
    /**
     * Refresh gravatar
     */
    refreshGravatar(req: operations.RefreshGravatarRequest, config?: AxiosRequestConfig): Promise<operations.RefreshGravatarResponse>;
    /**
     * Send password reset email
     */
    sendPasswordResetEmail(req: operations.SendPasswordResetEmailRequestBody, config?: AxiosRequestConfig): Promise<operations.SendPasswordResetEmailResponse>;
    /**
     * Silence a user
     */
    silenceUser(req: operations.SilenceUserRequest, config?: AxiosRequestConfig): Promise<operations.SilenceUserResponse>;
    /**
     * Suspend a user
     */
    suspendUser(req: operations.SuspendUserRequest, config?: AxiosRequestConfig): Promise<operations.SuspendUserResponse>;
    /**
     * Update avatar
     */
    updateAvatar(req: operations.UpdateAvatarRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAvatarResponse>;
    /**
     * Update email
     */
    updateEmail(req: operations.UpdateEmailRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEmailResponse>;
    /**
     * Update a user
     */
    updateUser(req: operations.UpdateUserRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUserResponse>;
    /**
     * Update username
     */
    updateUsername(req: operations.UpdateUsernameRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUsernameResponse>;
}
