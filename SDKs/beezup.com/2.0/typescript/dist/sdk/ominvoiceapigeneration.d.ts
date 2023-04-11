import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class OMInvoiceAPIGeneration {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Generate an Order Invoice batch
     */
    generateBatchOrderInvoice(req: operations.GenerateBatchOrderInvoiceRequest, config?: AxiosRequestConfig): Promise<operations.GenerateBatchOrderInvoiceResponse>;
    /**
     * Generate an Order Invoice
     */
    generateOrderInvoice(req: operations.GenerateOrderInvoiceRequest, config?: AxiosRequestConfig): Promise<operations.GenerateOrderInvoiceResponse>;
    /**
     * Returns the PDF version of the invoice
     */
    getOrderInvoicePdf(req: shared.GetOrderInvoicePdfFromHtmlInvoiceUrlRequest, config?: AxiosRequestConfig): Promise<operations.GetOrderInvoicePdfResponse>;
    /**
     * View a preview an Order Invoice
     */
    getOrderInvoicePreview(req: operations.GetOrderInvoicePreviewRequest, config?: AxiosRequestConfig): Promise<operations.GetOrderInvoicePreviewResponse>;
}
