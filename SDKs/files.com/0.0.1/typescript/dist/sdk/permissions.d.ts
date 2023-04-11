import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about permissions
 */
export declare class Permissions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete Permission
     *
     * @remarks
     * Delete Permission
     */
    deletePermissionsId(req: operations.DeletePermissionsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeletePermissionsIdResponse>;
    /**
     * List Permissions
     *
     * @remarks
     * List Permissions
     */
    getPermissions(req: operations.GetPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.GetPermissionsResponse>;
    /**
     * Create Permission
     *
     * @remarks
     * Create Permission
     */
    postPermissions(req: operations.PostPermissionsRequestBody, config?: AxiosRequestConfig): Promise<operations.PostPermissionsResponse>;
}
