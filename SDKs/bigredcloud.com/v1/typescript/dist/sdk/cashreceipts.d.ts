import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CashReceipts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Removes an existing Cash Receipt.
     */
    cashReceiptsDelete(req: operations.CashReceiptsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CashReceiptsDeleteResponse>;
    /**
     * Returns a list of company's Cash Receipts. Supports OData querying protocol.
     * Filtering is allowed by "entryDate" field.
     * Ordering is allowed by "id" field.
     */
    cashReceiptsGet(config?: AxiosRequestConfig): Promise<operations.CashReceiptsGetResponse>;
    /**
     * Creates a new Cash Receipt.
     */
    cashReceiptsPost(req: shared.CashReceiptDto, config?: AxiosRequestConfig): Promise<operations.CashReceiptsPostResponse>;
    /**
     * Processes a batch of Cash Receipts.
     */
    cashReceiptsProcessBatch(req: shared.BatchItemCashReceiptDto[], config?: AxiosRequestConfig): Promise<operations.CashReceiptsProcessBatchResponse>;
    /**
     * Updates an existing Cash Receipt.
     */
    cashReceiptsPut(req: operations.CashReceiptsPutRequest, config?: AxiosRequestConfig): Promise<operations.CashReceiptsPutResponse>;
    /**
     * Returns information about a single Cash Receipt.
     */
    getV1CashReceiptsId(req: operations.GetV1CashReceiptsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetV1CashReceiptsIdResponse>;
}
