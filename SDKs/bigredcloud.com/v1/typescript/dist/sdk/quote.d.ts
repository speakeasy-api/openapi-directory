import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Quote {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Close a Quote.
     */
    quoteClose(req: operations.QuoteCloseRequest, config?: AxiosRequestConfig): Promise<operations.QuoteCloseResponse>;
    /**
     * Removes an existing Quote.
     */
    quoteDelete(req: operations.QuoteDeleteRequest, config?: AxiosRequestConfig): Promise<operations.QuoteDeleteResponse>;
    /**
     * Returns a list of company's Quotes.
     * Filtering is forbidden.
     * Ordering is allowed by "id".
     */
    quoteGet(config?: AxiosRequestConfig): Promise<operations.QuoteGetResponse>;
    /**
     * Creates a new Quote.
     */
    quotePost(req: shared.QuoteDto, config?: AxiosRequestConfig): Promise<operations.QuotePostResponse>;
    /**
     * Creates a new Quote with auto generating reference.
     */
    quotePostCreateQuoteWithGeneratingReference(req: shared.QuoteDto, config?: AxiosRequestConfig): Promise<operations.QuotePostCreateQuoteWithGeneratingReferenceResponse>;
    /**
     * Generate a sale invoice from a Quote.
     * When sale invoice is empty, new sale invoice will be generated from Quote.
     */
    quotePostGenerateSaleInvoice(req: shared.QuoteGeneratingInvoiceDto, config?: AxiosRequestConfig): Promise<operations.QuotePostGenerateSaleInvoiceResponse>;
    /**
     * Processes a batch of Quote.
     */
    quoteProcessBatch(req: shared.BatchItemQuoteDto[], config?: AxiosRequestConfig): Promise<operations.QuoteProcessBatchResponse>;
    /**
     * Updates an existing Quote.
     */
    quotePut(req: operations.QuotePutRequest, config?: AxiosRequestConfig): Promise<operations.QuotePutResponse>;
    /**
     * Reopen a Quote.
     */
    quoteReopen(req: operations.QuoteReopenRequest, config?: AxiosRequestConfig): Promise<operations.QuoteReopenResponse>;
    /**
     * Returns information about a single Quote.
     */
    getV1QuotesId(req: operations.GetV1QuotesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetV1QuotesIdResponse>;
}
