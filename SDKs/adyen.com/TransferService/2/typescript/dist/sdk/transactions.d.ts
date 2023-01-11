import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Transactions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getTransactions - Get all transactions.
     *
     * Returns transactions that match the query parameters. The following query parameters are required when making a request:
     *
     * * One of `accountHolderId`, `balanceAccountId` or `balancePlatform`
     *
     * * `createdUntil`
     *
     * * `createdSince`
     *
     * This endpoint supports cursor-based pagination. The response returns the first page of results, and returns links to the next page when applicable. You can use the links to page through the results. The response also returns links to the previous page when applicable.
    **/
    getTransactions(req: operations.GetTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionsResponse>;
    /**
     * getTransactionsId - Get a transaction.
     *
     * Returns a specific transaction.
    **/
    getTransactionsId(req: operations.GetTransactionsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionsIdResponse>;
}
