import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SalesEntries {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Removes an existing Sales Entry.
     */
    salesEntriesDelete(req: operations.SalesEntriesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SalesEntriesDeleteResponse>;
    /**
     * Returns a list of company's Sales Entries. Supports OData querying protocol.
     * Filtering is allowed by "entryDate" field.
     * Ordering is allowed by "id" field.
     */
    salesEntriesGet(config?: AxiosRequestConfig): Promise<operations.SalesEntriesGetResponse>;
    /**
     * Creates a new Sales Entry.
     */
    salesEntriesPost(req: shared.SalesEntryDto, config?: AxiosRequestConfig): Promise<operations.SalesEntriesPostResponse>;
    /**
     * Processes a batch of Sales Entries.
     */
    salesEntriesProcessBatch(req: shared.BatchItemSalesEntryDto[], config?: AxiosRequestConfig): Promise<operations.SalesEntriesProcessBatchResponse>;
    /**
     * Updates an existing Sales Entry.
     */
    salesEntriesPut(req: operations.SalesEntriesPutRequest, config?: AxiosRequestConfig): Promise<operations.SalesEntriesPutResponse>;
    /**
     * Returns information about a single Sales Entry.
     */
    getV1SalesEntriesId(req: operations.GetV1SalesEntriesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetV1SalesEntriesIdResponse>;
}
