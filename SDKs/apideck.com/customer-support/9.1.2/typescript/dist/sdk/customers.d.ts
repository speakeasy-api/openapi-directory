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
     * Create Customer Support Customer
     *
     * @remarks
     * Create Customer Support Customer
     */
    customersAdd(req: operations.CustomersAddRequest, security: operations.CustomersAddSecurity, config?: AxiosRequestConfig): Promise<operations.CustomersAddResponse>;
    /**
     * List Customer Support Customers
     *
     * @remarks
     * List Customer Support Customers
     */
    customersAll(req: operations.CustomersAllRequest, security: operations.CustomersAllSecurity, config?: AxiosRequestConfig): Promise<operations.CustomersAllResponse>;
    /**
     * Delete Customer Support Customer
     *
     * @remarks
     * Delete Customer Support Customer
     */
    customersDelete(req: operations.CustomersDeleteRequest, security: operations.CustomersDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.CustomersDeleteResponse>;
    /**
     * Get Customer Support Customer
     *
     * @remarks
     * Get Customer Support Customer
     */
    customersOne(req: operations.CustomersOneRequest, security: operations.CustomersOneSecurity, config?: AxiosRequestConfig): Promise<operations.CustomersOneResponse>;
    /**
     * Update Customer Support Customer
     *
     * @remarks
     * Update Customer Support Customer
     */
    customersUpdate(req: operations.CustomersUpdateRequest, security: operations.CustomersUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.CustomersUpdateResponse>;
}
