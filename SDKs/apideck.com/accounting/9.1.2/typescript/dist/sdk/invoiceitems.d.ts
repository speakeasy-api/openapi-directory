import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Invoice items are stored from invoice lines to be used later on when creating new invoices.
 */
export declare class InvoiceItems {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Invoice Item
     *
     * @remarks
     * Create Invoice Item
     */
    invoiceItemsAdd(req: operations.InvoiceItemsAddRequest, security: operations.InvoiceItemsAddSecurity, config?: AxiosRequestConfig): Promise<operations.InvoiceItemsAddResponse>;
    /**
     * List Invoice Items
     *
     * @remarks
     * List Invoice Items
     */
    invoiceItemsAll(req: operations.InvoiceItemsAllRequest, security: operations.InvoiceItemsAllSecurity, config?: AxiosRequestConfig): Promise<operations.InvoiceItemsAllResponse>;
    /**
     * Delete Invoice Item
     *
     * @remarks
     * Delete Invoice Item
     */
    invoiceItemsDelete(req: operations.InvoiceItemsDeleteRequest, security: operations.InvoiceItemsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.InvoiceItemsDeleteResponse>;
    /**
     * Get Invoice Item
     *
     * @remarks
     * Get Invoice Item
     */
    invoiceItemsOne(req: operations.InvoiceItemsOneRequest, security: operations.InvoiceItemsOneSecurity, config?: AxiosRequestConfig): Promise<operations.InvoiceItemsOneResponse>;
    /**
     * Update Invoice Item
     *
     * @remarks
     * Update Invoice Item
     */
    invoiceItemsUpdate(req: operations.InvoiceItemsUpdateRequest, security: operations.InvoiceItemsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.InvoiceItemsUpdateResponse>;
}
