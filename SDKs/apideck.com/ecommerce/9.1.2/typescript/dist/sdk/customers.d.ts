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
     * List Customers
     *
     * @remarks
     * List Customers
     */
    customersAll(req: operations.CustomersAllRequest, security: operations.CustomersAllSecurity, config?: AxiosRequestConfig): Promise<operations.CustomersAllResponse>;
    /**
     * Get Customer
     *
     * @remarks
     * Get Customer
     */
    customersOne(req: operations.CustomersOneRequest, security: operations.CustomersOneSecurity, config?: AxiosRequestConfig): Promise<operations.CustomersOneResponse>;
}
