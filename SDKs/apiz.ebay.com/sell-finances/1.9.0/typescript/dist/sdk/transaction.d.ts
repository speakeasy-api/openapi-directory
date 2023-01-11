import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Transaction {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getTransactionSummary - This method is used to retrieve cumulative values for five types of monetary transactions (order sales, seller credits, buyer refunds, buyer-initiated payment disputes, eBay shipping label purchases, and transfers). If applicable, the number of payment holds and the amount of the holds are also returned. See the description for the filter query parameter for more information on the available filters. Note: Unless the transactionType filter is used to retrieve a specific type of monetary transaction (sale, buyer refund, seller credit, payment dispute, shipping label, transfer), the creditCount and creditAmount response fields account for both order sales and seller credits (the count and value is not distinguished between the two monetary transaction types).
    **/
    getTransactionSummary(req: operations.GetTransactionSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionSummaryResponse>;
    /**
     * getTransactions - This method allows a seller to retrieve one or monetary transactions. In this case, 'monetary transactions' include sales orders, buyer refunds, seller credits, buyer-initiated payment disputes, eBay shipping label purchases, and transfers. There are numerous input filters available for use, including filters to retrieve specific types of monetary transactions, to retrieve monetary transactions processed within a specific date range, or to retrieve monetary transactions in a specific state. See the filter field for more information on each filter, and how each one is used. There are also pagination and sort query parameters that allow users to further control the monetary transactions that are returned in the response. If no monetary transactions match the input criteria, an http status code of 204 No Content is returned with no response payload.
    **/
    getTransactions(req: operations.GetTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionsResponse>;
}
