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
     * getTransactionsById - List transactions for an account
     *
     * Retrieve a list of transactions against an account.
    **/
    getTransactionsById(req: operations.GetTransactionsByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionsByIdResponse>;
    /**
     * getTransactionsFilteredById - Filtered list of transactions for an account
     *
     * Retrieve a filtered list of transactions against an account.
     * * `dateRangeFrom` - A millisecond epoch time specifying the date range start date.
     * * `dateRangeTo` - A millisecond epoch time specifying the date range end date.
     * * `searchKeyword` - Search term to filter by from the reference field (`myRef`).
     * * `transactionTypes` - One or more of the transaction types above. This field can be repeated multiple times to allow for multiple transaction types.
     *
    **/
    getTransactionsFilteredById(req: operations.GetTransactionsFilteredByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionsFilteredByIdResponse>;
}
