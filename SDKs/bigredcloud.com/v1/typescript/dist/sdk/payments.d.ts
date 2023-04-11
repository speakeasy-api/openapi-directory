import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Payments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Removes an existing Payment.
     */
    paymentsDelete(req: operations.PaymentsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PaymentsDeleteResponse>;
    /**
     * Returns a list of company's Payments. Supports OData querying protocol.
     * Filtering is allowed by "entryDate" field.
     * Ordering is allowed by "id" field.
     */
    paymentsGet(config?: AxiosRequestConfig): Promise<operations.PaymentsGetResponse>;
    /**
     * Creates a new Payment.
     */
    paymentsPost(req: shared.PaymentDto, config?: AxiosRequestConfig): Promise<operations.PaymentsPostResponse>;
    /**
     * Processes a batch of Payments.
     */
    paymentsProcessBatch(req: shared.BatchItemPaymentDto[], config?: AxiosRequestConfig): Promise<operations.PaymentsProcessBatchResponse>;
    /**
     * Updates an existing Payment.
     */
    paymentsPut(req: operations.PaymentsPutRequest, config?: AxiosRequestConfig): Promise<operations.PaymentsPutResponse>;
    /**
     * Returns information about a single Payments.
     */
    getV1PaymentsId(req: operations.GetV1PaymentsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetV1PaymentsIdResponse>;
}
