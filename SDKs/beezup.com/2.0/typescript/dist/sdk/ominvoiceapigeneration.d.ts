import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class OmInvoiceApiGeneration {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * generateOrderInvoice - Generate an Order Invoice
    **/
    generateOrderInvoice(req: operations.GenerateOrderInvoiceRequest, config?: AxiosRequestConfig): Promise<operations.GenerateOrderInvoiceResponse>;
    /**
     * getOrderInvoicePdf - Returns the PDF version of the invoice
    **/
    getOrderInvoicePdf(req: operations.GetOrderInvoicePdfRequest, config?: AxiosRequestConfig): Promise<operations.GetOrderInvoicePdfResponse>;
    /**
     * getOrderInvoicePreview - View a preview an Order Invoice
    **/
    getOrderInvoicePreview(req: operations.GetOrderInvoicePreviewRequest, config?: AxiosRequestConfig): Promise<operations.GetOrderInvoicePreviewResponse>;
}
