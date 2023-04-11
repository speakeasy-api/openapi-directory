import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about groups
 */
export declare class Groups {
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
    deleteGroupsGroupIdMembershipsUserId(req: operations.DeleteGroupsGroupIdMembershipsUserIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGroupsGroupIdMembershipsUserIdResponse>;
    /**
     * Delete Group
     *
     * @remarks
     * Delete Group
     */
    deleteGroupsId(req: operations.DeleteGroupsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGroupsIdResponse>;
    /**
     * List Groups
     *
     * @remarks
     * List Groups
     */
    getGroups(req: operations.GetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupsResponse>;
    /**
     * List Permissions
     *
     * @remarks
     * List Permissions
     */
    getGroupsGroupIdPermissions(req: operations.GetGroupsGroupIdPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupsGroupIdPermissionsResponse>;
    /**
     * List Group Users
     *
     * @remarks
     * List Group Users
     */
    getGroupsGroupIdUsers(req: operations.GetGroupsGroupIdUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupsGroupIdUsersResponse>;
    /**
     * Show Group
     *
     * @remarks
     * Show Group
     */
    getGroupsId(req: operations.GetGroupsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupsIdResponse>;
    /**
     * Update Group User
     *
     * @remarks
     * Update Group User
     */
    patchGroupsGroupIdMembershipsUserId(req: operations.PatchGroupsGroupIdMembershipsUserIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchGroupsGroupIdMembershipsUserIdResponse>;
    /**
     * Update Group
     *
     * @remarks
     * Update Group
     */
    patchGroupsId(req: operations.PatchGroupsIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchGroupsIdResponse>;
    /**
     * Create Group
     *
     * @remarks
     * Create Group
     */
    postGroups(req: operations.PostGroupsRequestBody, config?: AxiosRequestConfig): Promise<operations.PostGroupsResponse>;
    /**
     * Create User
     *
     * @remarks
     * Create User
     */
    postGroupsGroupIdUsers(req: operations.PostGroupsGroupIdUsersRequest, config?: AxiosRequestConfig): Promise<operations.PostGroupsGroupIdUsersResponse>;
}
