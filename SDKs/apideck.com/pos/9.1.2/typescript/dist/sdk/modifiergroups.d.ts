import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ModifierGroups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Modifier Group
     *
     * @remarks
     * Create Modifier Group
     */
    modifierGroupsAdd(req: operations.ModifierGroupsAddRequest, security: operations.ModifierGroupsAddSecurity, config?: AxiosRequestConfig): Promise<operations.ModifierGroupsAddResponse>;
    /**
     * List Modifier Groups
     *
     * @remarks
     * List Modifier Groups
     */
    modifierGroupsAll(req: operations.ModifierGroupsAllRequest, security: operations.ModifierGroupsAllSecurity, config?: AxiosRequestConfig): Promise<operations.ModifierGroupsAllResponse>;
    /**
     * Delete Modifier Group
     *
     * @remarks
     * Delete Modifier Group
     */
    modifierGroupsDelete(req: operations.ModifierGroupsDeleteRequest, security: operations.ModifierGroupsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ModifierGroupsDeleteResponse>;
    /**
     * Get Modifier Group
     *
     * @remarks
     * Get Modifier Group
     */
    modifierGroupsOne(req: operations.ModifierGroupsOneRequest, security: operations.ModifierGroupsOneSecurity, config?: AxiosRequestConfig): Promise<operations.ModifierGroupsOneResponse>;
    /**
     * Update Modifier Group
     *
     * @remarks
     * Update Modifier Group
     */
    modifierGroupsUpdate(req: operations.ModifierGroupsUpdateRequest, security: operations.ModifierGroupsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ModifierGroupsUpdateResponse>;
}
