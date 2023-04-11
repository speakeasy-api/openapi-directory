import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SalesInvoices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Removes an existing Sales Invoice.
     */
    salesInvoicesDelete(req: operations.SalesInvoicesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SalesInvoicesDeleteResponse>;
    /**
     * Returns a list of company's Sales Invoices. Supports OData querying protocol.
     * Filtering is allowed by "entryDate" field.
     * Ordering is allowed by "id" field.
     */
    salesInvoicesGet(config?: AxiosRequestConfig): Promise<operations.SalesInvoicesGetResponse>;
    /**
     * Creates a new Sales Invoice.
     */
    salesInvoicesPost(req: shared.SalesInvoiceCreditNoteDto, config?: AxiosRequestConfig): Promise<operations.SalesInvoicesPostResponse>;
    /**
     * Creates a new Sale Invoice with auto generating reference.
     */
    salesInvoicesPostCreateSaleInvoiceWithGeneratingReference(req: shared.SalesInvoiceCreditNoteDto, config?: AxiosRequestConfig): Promise<operations.SalesInvoicesPostCreateSaleInvoiceWithGeneratingReferenceResponse>;
    /**
     * Processes a batch of Sales Invoices.
     */
    salesInvoicesProcessBatch(req: shared.BatchItemSalesInvoiceCreditNoteDto[], config?: AxiosRequestConfig): Promise<operations.SalesInvoicesProcessBatchResponse>;
    /**
     * Updates an existing Sales Invoice.
     */
    salesInvoicesPut(req: operations.SalesInvoicesPutRequest, config?: AxiosRequestConfig): Promise<operations.SalesInvoicesPutResponse>;
    /**
     * Returns information about a single Sales Invoice.
     */
    getV1SalesInvoicesId(req: operations.GetV1SalesInvoicesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetV1SalesInvoicesIdResponse>;
}
