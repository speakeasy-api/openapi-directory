import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CustomerInvoices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get all your invoices
     */
    getInvoices(req: operations.GetInvoicesRequest, config?: AxiosRequestConfig): Promise<operations.GetInvoicesResponse>;
}
