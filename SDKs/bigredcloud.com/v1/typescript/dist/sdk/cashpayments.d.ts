import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CashPayments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Removes an existing Cash Payment.
     */
    cashPaymentsDelete(req: operations.CashPaymentsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CashPaymentsDeleteResponse>;
    /**
     * Returns a list of company's Cash Payments. Supports OData querying protocol.
     * Filtering is allowed by "entryDate" field.
     * Ordering is allowed by "id" field.
     */
    cashPaymentsGet(config?: AxiosRequestConfig): Promise<operations.CashPaymentsGetResponse>;
    /**
     * Creates a new Cash Payment.
     */
    cashPaymentsPost(req: shared.CashPaymentDto, config?: AxiosRequestConfig): Promise<operations.CashPaymentsPostResponse>;
    /**
     * Processes a batch of Cash Payments.
     */
    cashPaymentsProcessBatch(req: shared.BatchItemCashPaymentDto[], config?: AxiosRequestConfig): Promise<operations.CashPaymentsProcessBatchResponse>;
    /**
     * Updates an existing Cash Payment.
     */
    cashPaymentsPut(req: operations.CashPaymentsPutRequest, config?: AxiosRequestConfig): Promise<operations.CashPaymentsPutResponse>;
    /**
     * Returns information about a single Cash Payment.
     */
    getV1CashPaymentsId(req: operations.GetV1CashPaymentsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetV1CashPaymentsIdResponse>;
}
