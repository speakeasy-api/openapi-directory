import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Create and manage administrative resources
 */
export declare class Administrative {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve or search doctors within practice group
     */
    doctorsList(req: operations.DoctorsListRequest, security: operations.DoctorsListSecurity, config?: AxiosRequestConfig): Promise<operations.DoctorsListResponse>;
    /**
     * Retrieve an existing dcotor
     */
    doctorsRead(req: operations.DoctorsReadRequest, security: operations.DoctorsReadSecurity, config?: AxiosRequestConfig): Promise<operations.DoctorsReadResponse>;
    /**
     * Retrieve or search user groups
     */
    userGroupsList(req: operations.UserGroupsListRequest, security: operations.UserGroupsListSecurity, config?: AxiosRequestConfig): Promise<operations.UserGroupsListResponse>;
    /**
     * Retrieve an existing user group
     */
    userGroupsRead(req: operations.UserGroupsReadRequest, security: operations.UserGroupsReadSecurity, config?: AxiosRequestConfig): Promise<operations.UserGroupsReadResponse>;
    /**
     * Retrieve or search users, `/api/users/current` can be used to identify logged in user, it will redirect to `/api/users/{current_user_id}`
     */
    usersList(req: operations.UsersListRequest, security: operations.UsersListSecurity, config?: AxiosRequestConfig): Promise<operations.UsersListResponse>;
    /**
     * Retrieve an existing user, `/api/users/current` can be used to identify logged in user, it will redirect to `/api/users/{current_user_id}`
     */
    usersRead(req: operations.UsersReadRequest, security: operations.UsersReadSecurity, config?: AxiosRequestConfig): Promise<operations.UsersReadResponse>;
}
