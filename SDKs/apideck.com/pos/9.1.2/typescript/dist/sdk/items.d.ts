import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Items {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Item
     *
     * @remarks
     * Create Item
     */
    itemsAdd(req: operations.ItemsAddRequest, security: operations.ItemsAddSecurity, config?: AxiosRequestConfig): Promise<operations.ItemsAddResponse>;
    /**
     * List Items
     *
     * @remarks
     * List Items
     */
    itemsAll(req: operations.ItemsAllRequest, security: operations.ItemsAllSecurity, config?: AxiosRequestConfig): Promise<operations.ItemsAllResponse>;
    /**
     * Delete Item
     *
     * @remarks
     * Delete Item
     */
    itemsDelete(req: operations.ItemsDeleteRequest, security: operations.ItemsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ItemsDeleteResponse>;
    /**
     * Get Item
     *
     * @remarks
     * Get Item
     */
    itemsOne(req: operations.ItemsOneRequest, security: operations.ItemsOneSecurity, config?: AxiosRequestConfig): Promise<operations.ItemsOneResponse>;
    /**
     * Update Item
     *
     * @remarks
     * Update Item
     */
    itemsUpdate(req: operations.ItemsUpdateRequest, security: operations.ItemsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ItemsUpdateResponse>;
}
