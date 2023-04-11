import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Admin {
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
     * Delete a user
     */
    deleteUser(req: operations.DeleteUserRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserResponse>;
    /**
     * Log a user out
     */
    logOutUser(req: operations.LogOutUserRequest, config?: AxiosRequestConfig): Promise<operations.LogOutUserResponse>;
    /**
     * Refresh gravatar
     */
    refreshGravatar(req: operations.RefreshGravatarRequest, config?: AxiosRequestConfig): Promise<operations.RefreshGravatarResponse>;
    /**
     * Silence a user
     */
    silenceUser(req: operations.SilenceUserRequest, config?: AxiosRequestConfig): Promise<operations.SilenceUserResponse>;
    /**
     * Suspend a user
     */
    suspendUser(req: operations.SuspendUserRequest, config?: AxiosRequestConfig): Promise<operations.SuspendUserResponse>;
}
