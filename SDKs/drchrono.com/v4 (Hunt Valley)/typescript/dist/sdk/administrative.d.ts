import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Administrative {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * doctorsList - Retrieve or search doctors within practice group
    **/
    doctorsList(req: operations.DoctorsListRequest, config?: AxiosRequestConfig): Promise<operations.DoctorsListResponse>;
    /**
     * doctorsRead - Retrieve an existing dcotor
    **/
    doctorsRead(req: operations.DoctorsReadRequest, config?: AxiosRequestConfig): Promise<operations.DoctorsReadResponse>;
    /**
     * userGroupsList - Retrieve or search user groups
    **/
    userGroupsList(req: operations.UserGroupsListRequest, config?: AxiosRequestConfig): Promise<operations.UserGroupsListResponse>;
    /**
     * userGroupsRead - Retrieve an existing user group
    **/
    userGroupsRead(req: operations.UserGroupsReadRequest, config?: AxiosRequestConfig): Promise<operations.UserGroupsReadResponse>;
    /**
     * usersList - Retrieve or search users, `/api/users/current` can be used to identify logged in user, it will redirect to `/api/users/{current_user_id}`
    **/
    usersList(req: operations.UsersListRequest, config?: AxiosRequestConfig): Promise<operations.UsersListResponse>;
    /**
     * usersRead - Retrieve an existing user, `/api/users/current` can be used to identify logged in user, it will redirect to `/api/users/{current_user_id}`
    **/
    usersRead(req: operations.UsersReadRequest, config?: AxiosRequestConfig): Promise<operations.UsersReadResponse>;
}
