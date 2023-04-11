import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Transactions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get all transactions
     *
     * @remarks
     * Returns all transactions related to a balance account with a payment instrument of type **bankAccount**.
     *
     * This endpoint supports cursor-based pagination. The response returns the first page of results, and returns links to the next page when applicable. You can use the links to page through the results. The response also returns links to the previous page when applicable.
     */
    getTransactions(req: operations.GetTransactionsRequest, security: operations.GetTransactionsSecurity, config?: AxiosRequestConfig): Promise<operations.GetTransactionsResponse>;
    /**
     * Get a transaction
     *
     * @remarks
     * Returns a transaction.
     */
    getTransactionsId(req: operations.GetTransactionsIdRequest, security: operations.GetTransactionsIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetTransactionsIdResponse>;
}
