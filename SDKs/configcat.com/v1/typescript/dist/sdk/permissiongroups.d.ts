import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * With these endpoints you can manage your Permission Groups.
 *
 * @remarks
 *
 * <a href="https://configcat.com/docs/advanced/team-collaboration#permissions--groups" target="_blank" rel="noopener noreferrer">Here</a> you can read more about Permissions.
 */
export declare class PermissionGroups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Permission Group
     *
     * @remarks
     * This endpoint creates a new Permission Group in a specified Product
     * identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
     */
    createPermissionGroup(req: operations.CreatePermissionGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreatePermissionGroupResponse>;
    /**
     * Delete Permission Group
     *
     * @remarks
     * This endpoint removes a Permission Group identified by the `permissionGroupId` parameter.
     */
    deletePermissionGroup(req: operations.DeletePermissionGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeletePermissionGroupResponse>;
    /**
     * Get Permission Group
     *
     * @remarks
     * This endpoint returns the metadata of a Permission Group
     * identified by the `permissionGroupId`.
     */
    getPermissionGroup(req: operations.GetPermissionGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetPermissionGroupResponse>;
    /**
     * List Permission Groups
     *
     * @remarks
     * This endpoint returns the list of the Permission Groups that belongs to the given Product identified by the
     * `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
     */
    getPermissionGroups(req: operations.GetPermissionGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetPermissionGroupsResponse>;
    /**
     * Update Permission Group
     *
     * @remarks
     * This endpoint updates a Permission Group identified by the `permissionGroupId` parameter.
     */
    updatePermissionGroup(req: operations.UpdatePermissionGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePermissionGroupResponse>;
}
