import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about invoices
 */
export declare class Invoices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List Invoices
     *
     * @remarks
     * List Invoices
     */
    getInvoices(req: operations.GetInvoicesRequest, config?: AxiosRequestConfig): Promise<operations.GetInvoicesResponse>;
    /**
     * Show Invoice
     *
     * @remarks
     * Show Invoice
     */
    getInvoicesId(req: operations.GetInvoicesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetInvoicesIdResponse>;
}
