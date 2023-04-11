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
     * Get a specific transaction
     */
    getTransaction(req: operations.GetTransactionRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionResponse>;
    /**
     * Get a specific transaction's cost
     */
    getTransactionCost(req: operations.GetTransactionCostRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionCostResponse>;
    /**
     * Get a list of transactions
     */
    getTransactions(req: operations.GetTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionsResponse>;
}
