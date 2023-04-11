import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * While there are many types of transactions, they are all represented by the same JSON object with a different txnType.
 */
export declare class Transactions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List transactions for an account (v1)
     *
     * @remarks
     * Retrieve a list of transactions against an account. Recommended to use the v3 endpoint instead.
     */
    getTransactionsByIdv1(req: operations.GetTransactionsByIdv1Request, config?: AxiosRequestConfig): Promise<operations.GetTransactionsByIdv1Response>;
    /**
     * List transactions for an account (v3)
     *
     * @remarks
     * Retrieve a list of transactions against an account. Initially, use the optional `limit`, `dateRangeFrom` and `dateRangeTo` query params to limit your query, then use the embedded `next` or `prev` links in the response to get newer or older pages.
     *
     */
    getTransactionsByIdv3(req: operations.GetTransactionsByIdv3Request, config?: AxiosRequestConfig): Promise<operations.GetTransactionsByIdv3Response>;
    /**
     * Filtered list of transactions for an account (v1)
     *
     * @remarks
     * Retrieve a filtered list of transactions against an account. Recommended to use the v3 endpoint instead.
     * * `dateRangeFrom` - A millisecond epoch time specifying the date range start date.
     * * `dateRangeTo` - A millisecond epoch time specifying the date range end date.
     * * `searchKeyword` - Search term to filter by from the reference field (`myRef`).
     * * `transactionTypes` - One or more of the transaction types above. This field can be repeated multiple times to allow for multiple transaction types.
     * * `offset` - The page offset. Defaults to 0. This is the record number that the returned list will start at. E.g. offset = 40 and limit = 20 will return records 40 to 59.
     *
     */
    getTransactionsFilteredById(req: operations.GetTransactionsFilteredByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionsFilteredByIdResponse>;
}
