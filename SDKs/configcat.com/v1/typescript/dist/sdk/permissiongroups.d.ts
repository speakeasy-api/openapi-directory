import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PermissionGroups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createPermissionGroup - Create Permission Group
     *
     * This endpoint creates a new Permission Group in a specified Product
     * identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
    **/
    createPermissionGroup(req: operations.CreatePermissionGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreatePermissionGroupResponse>;
    /**
     * deletePermissionGroup - Delete Permission Group
     *
     * This endpoint removes a Permission Group identified by the `permissionGroupId` parameter.
    **/
    deletePermissionGroup(req: operations.DeletePermissionGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeletePermissionGroupResponse>;
    /**
     * getPermissionGroup - Get Permission Group
     *
     * This endpoint returns the metadata of a Permission Group
     * identified by the `permissionGroupId`.
    **/
    getPermissionGroup(req: operations.GetPermissionGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetPermissionGroupResponse>;
    /**
     * getPermissionGroups - List Permission Groups
     *
     * This endpoint returns the list of the Permission Groups that belongs to the given Product identified by the
     * `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
    **/
    getPermissionGroups(req: operations.GetPermissionGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetPermissionGroupsResponse>;
    /**
     * updatePermissionGroup - Update Permission Group
     *
     * This endpoint updates a Permission Group identified by the `permissionGroupId` parameter.
    **/
    updatePermissionGroup(req: operations.UpdatePermissionGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePermissionGroupResponse>;
}
