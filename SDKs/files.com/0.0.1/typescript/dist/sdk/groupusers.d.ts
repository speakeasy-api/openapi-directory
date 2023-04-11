import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about group_users
 */
export declare class GroupUsers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete Group User
     *
     * @remarks
     * Delete Group User
     */
    deleteGroupUsersId(req: operations.DeleteGroupUsersIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGroupUsersIdResponse>;
    /**
     * List Group Users
     *
     * @remarks
     * List Group Users
     */
    getGroupUsers(req: operations.GetGroupUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupUsersResponse>;
    /**
     * Update Group User
     *
     * @remarks
     * Update Group User
     */
    patchGroupUsersId(req: operations.PatchGroupUsersIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchGroupUsersIdResponse>;
    /**
     * Create Group User
     *
     * @remarks
     * Create Group User
     */
    postGroupUsers(req: operations.PostGroupUsersRequestBody, config?: AxiosRequestConfig): Promise<operations.PostGroupUsersResponse>;
}
