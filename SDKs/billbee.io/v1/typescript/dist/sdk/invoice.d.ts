import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Invoice {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create an invoice for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.
     */
    orderApiCreateInvoice(req: operations.OrderApiCreateInvoiceRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiCreateInvoiceResponse>;
    /**
     * Get a list of all invoices optionally filtered by date. This request ist throttled to 1 per 1 minute for same page and minInvoiceDate
     */
    orderApiGetInvoiceList(req: operations.OrderApiGetInvoiceListRequest, config?: AxiosRequestConfig): Promise<operations.OrderApiGetInvoiceListResponse>;
}
