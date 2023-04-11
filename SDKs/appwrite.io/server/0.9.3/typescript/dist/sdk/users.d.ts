import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The Users service allows you to manage your project users.
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
     * Create User
     *
     * @remarks
     * Create a new user.
     */
    usersCreate(req: operations.UsersCreateRequestBody, security: operations.UsersCreateSecurity, config?: AxiosRequestConfig): Promise<operations.UsersCreateResponse>;
    /**
     * Delete User
     *
     * @remarks
     * Delete a user by its unique ID.
     */
    usersDelete(req: operations.UsersDeleteRequest, security: operations.UsersDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.UsersDeleteResponse>;
    /**
     * Delete User Session
     *
     * @remarks
     * Delete a user sessions by its unique ID.
     */
    usersDeleteSession(req: operations.UsersDeleteSessionRequest, security: operations.UsersDeleteSessionSecurity, config?: AxiosRequestConfig): Promise<operations.UsersDeleteSessionResponse>;
    /**
     * Delete User Sessions
     *
     * @remarks
     * Delete all user's sessions by using the user's unique ID.
     */
    usersDeleteSessions(req: operations.UsersDeleteSessionsRequest, security: operations.UsersDeleteSessionsSecurity, config?: AxiosRequestConfig): Promise<operations.UsersDeleteSessionsResponse>;
    /**
     * Get User
     *
     * @remarks
     * Get a user by its unique ID.
     */
    usersGet(req: operations.UsersGetRequest, security: operations.UsersGetSecurity, config?: AxiosRequestConfig): Promise<operations.UsersGetResponse>;
    /**
     * Get User Logs
     *
     * @remarks
     * Get a user activity logs list by its unique ID.
     */
    usersGetLogs(req: operations.UsersGetLogsRequest, security: operations.UsersGetLogsSecurity, config?: AxiosRequestConfig): Promise<operations.UsersGetLogsResponse>;
    /**
     * Get User Preferences
     *
     * @remarks
     * Get the user preferences by its unique ID.
     */
    usersGetPrefs(req: operations.UsersGetPrefsRequest, security: operations.UsersGetPrefsSecurity, config?: AxiosRequestConfig): Promise<operations.UsersGetPrefsResponse>;
    /**
     * Get User Sessions
     *
     * @remarks
     * Get the user sessions list by its unique ID.
     */
    usersGetSessions(req: operations.UsersGetSessionsRequest, security: operations.UsersGetSessionsSecurity, config?: AxiosRequestConfig): Promise<operations.UsersGetSessionsResponse>;
    /**
     * List Users
     *
     * @remarks
     * Get a list of all the project's users. You can use the query params to filter your results.
     */
    usersList(req: operations.UsersListRequest, security: operations.UsersListSecurity, config?: AxiosRequestConfig): Promise<operations.UsersListResponse>;
    /**
     * Update User Preferences
     *
     * @remarks
     * Update the user preferences by its unique ID. You can pass only the specific settings you wish to update.
     */
    usersUpdatePrefs(req: operations.UsersUpdatePrefsRequest, security: operations.UsersUpdatePrefsSecurity, config?: AxiosRequestConfig): Promise<operations.UsersUpdatePrefsResponse>;
    /**
     * Update User Status
     *
     * @remarks
     * Update the user status by its unique ID.
     */
    usersUpdateStatus(req: operations.UsersUpdateStatusRequest, security: operations.UsersUpdateStatusSecurity, config?: AxiosRequestConfig): Promise<operations.UsersUpdateStatusResponse>;
    /**
     * Update Email Verification
     *
     * @remarks
     * Update the user email verification status by its unique ID.
     */
    usersUpdateVerification(req: operations.UsersUpdateVerificationRequest, security: operations.UsersUpdateVerificationSecurity, config?: AxiosRequestConfig): Promise<operations.UsersUpdateVerificationResponse>;
}
