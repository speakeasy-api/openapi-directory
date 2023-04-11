import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SalesCreditNotes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Removes an existing Sales Credit Note.
     */
    salesCreditNotesDelete(req: operations.SalesCreditNotesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SalesCreditNotesDeleteResponse>;
    /**
     * Returns a list of company's Sales Credit Notes. Supports OData querying protocol.
     * Filtering is allowed by "entryDate" field.
     * Ordering is allowed by "id" field.
     */
    salesCreditNotesGet(config?: AxiosRequestConfig): Promise<operations.SalesCreditNotesGetResponse>;
    /**
     * Creates a new Sales Credit Note.
     */
    salesCreditNotesPost(req: shared.SalesInvoiceCreditNoteDto, config?: AxiosRequestConfig): Promise<operations.SalesCreditNotesPostResponse>;
    /**
     * Processes a batch of Sales Credit Notes.
     */
    salesCreditNotesProcessBatch(req: shared.BatchItemSalesInvoiceCreditNoteDto[], config?: AxiosRequestConfig): Promise<operations.SalesCreditNotesProcessBatchResponse>;
    /**
     * Updates an existing Sales Credit Note.
     */
    salesCreditNotesPut(req: operations.SalesCreditNotesPutRequest, config?: AxiosRequestConfig): Promise<operations.SalesCreditNotesPutResponse>;
    /**
     * Returns information about a single Sales Credit Note.
     */
    getV1SalesCreditNotesId(req: operations.GetV1SalesCreditNotesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetV1SalesCreditNotesIdResponse>;
}
