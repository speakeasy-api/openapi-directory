import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Invoices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Invoice
     *
     * @remarks
     * Create Invoice
     */
    invoicesAdd(req: operations.InvoicesAddRequest, security: operations.InvoicesAddSecurity, config?: AxiosRequestConfig): Promise<operations.InvoicesAddResponse>;
    /**
     * List Invoices
     *
     * @remarks
     * List Invoices
     */
    invoicesAll(req: operations.InvoicesAllRequest, security: operations.InvoicesAllSecurity, config?: AxiosRequestConfig): Promise<operations.InvoicesAllResponse>;
    /**
     * Delete Invoice
     *
     * @remarks
     * Delete Invoice
     */
    invoicesDelete(req: operations.InvoicesDeleteRequest, security: operations.InvoicesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.InvoicesDeleteResponse>;
    /**
     * Get Invoice
     *
     * @remarks
     * Get Invoice
     */
    invoicesOne(req: operations.InvoicesOneRequest, security: operations.InvoicesOneSecurity, config?: AxiosRequestConfig): Promise<operations.InvoicesOneResponse>;
    /**
     * Update Invoice
     *
     * @remarks
     * Update Invoice
     */
    invoicesUpdate(req: operations.InvoicesUpdateRequest, security: operations.InvoicesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.InvoicesUpdateResponse>;
}
