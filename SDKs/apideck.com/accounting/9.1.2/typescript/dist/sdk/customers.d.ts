import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Customers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Customer
     *
     * @remarks
     * Create Customer
     */
    customersAdd(req: operations.CustomersAddRequest, security: operations.CustomersAddSecurity, config?: AxiosRequestConfig): Promise<operations.CustomersAddResponse>;
    /**
     * List Customers
     *
     * @remarks
     * List Customers
     */
    customersAll(req: operations.CustomersAllRequest, security: operations.CustomersAllSecurity, config?: AxiosRequestConfig): Promise<operations.CustomersAllResponse>;
    /**
     * Delete Customer
     *
     * @remarks
     * Delete Customer
     */
    customersDelete(req: operations.CustomersDeleteRequest, security: operations.CustomersDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.CustomersDeleteResponse>;
    /**
     * Get Customer
     *
     * @remarks
     * Get Customer
     */
    customersOne(req: operations.CustomersOneRequest, security: operations.CustomersOneSecurity, config?: AxiosRequestConfig): Promise<operations.CustomersOneResponse>;
    /**
     * Update Customer
     *
     * @remarks
     * Update Customer
     */
    customersUpdate(req: operations.CustomersUpdateRequest, security: operations.CustomersUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.CustomersUpdateResponse>;
}
