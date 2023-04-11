import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Suppliers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Supplier
     *
     * @remarks
     * Create Supplier
     */
    suppliersAdd(req: operations.SuppliersAddRequest, security: operations.SuppliersAddSecurity, config?: AxiosRequestConfig): Promise<operations.SuppliersAddResponse>;
    /**
     * List Suppliers
     *
     * @remarks
     * List Suppliers
     */
    suppliersAll(req: operations.SuppliersAllRequest, security: operations.SuppliersAllSecurity, config?: AxiosRequestConfig): Promise<operations.SuppliersAllResponse>;
    /**
     * Delete Supplier
     *
     * @remarks
     * Delete Supplier
     */
    suppliersDelete(req: operations.SuppliersDeleteRequest, security: operations.SuppliersDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.SuppliersDeleteResponse>;
    /**
     * Get Supplier
     *
     * @remarks
     * Get Supplier
     */
    suppliersOne(req: operations.SuppliersOneRequest, security: operations.SuppliersOneSecurity, config?: AxiosRequestConfig): Promise<operations.SuppliersOneResponse>;
    /**
     * Update Supplier
     *
     * @remarks
     * Update Supplier
     */
    suppliersUpdate(req: operations.SuppliersUpdateRequest, security: operations.SuppliersUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.SuppliersUpdateResponse>;
}
