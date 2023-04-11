import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Customers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Removes an existing Customer.
     */
    customersDelete(req: operations.CustomersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CustomersDeleteResponse>;
    /**
     * Returns a list of company's Customers. Supports OData querying protocol.
     * Filtering is forbidden.
     * Ordering is allowed by "id" and "code" fields.
     */
    customersGet(config?: AxiosRequestConfig): Promise<operations.CustomersGetResponse>;
    /**
     * Returns a list of Customer's account transactions.
     */
    customersGetAccountTrans(req: operations.CustomersGetAccountTransRequest, config?: AxiosRequestConfig): Promise<operations.CustomersGetAccountTransResponse>;
    /**
     * Returns a Customer's opening balances, calculated for the next periods: current month, one month old, two months old, three and more months old.
     */
    customersGetOpeningBalance(req: operations.CustomersGetOpeningBalanceRequest, config?: AxiosRequestConfig): Promise<operations.CustomersGetOpeningBalanceResponse>;
    /**
     * Returns a list of Customer's opening balance transactions.
     */
    customersGetOpeningBalanceList(req: operations.CustomersGetOpeningBalanceListRequest, config?: AxiosRequestConfig): Promise<operations.CustomersGetOpeningBalanceListResponse>;
    /**
     * Returns a list of Customer's quotes.
     */
    customersGetQuotes(req: operations.CustomersGetQuotesRequest, config?: AxiosRequestConfig): Promise<operations.CustomersGetQuotesResponse>;
    /**
     * Creates a new Customer.
     */
    customersPost(req: shared.CustomerDto, config?: AxiosRequestConfig): Promise<operations.CustomersPostResponse>;
    /**
     * Processes a batch of Customers.
     */
    customersProcessBatch(req: shared.BatchItemCustomerDto[], config?: AxiosRequestConfig): Promise<operations.CustomersProcessBatchResponse>;
    /**
     * Updates an existing Customer.
     */
    customersPut(req: operations.CustomersPutRequest, config?: AxiosRequestConfig): Promise<operations.CustomersPutResponse>;
    /**
     * Returns information about a single Customer. You may specify that Customer's ledger balance should be calculated.
     */
    getV1CustomersId(req: operations.GetV1CustomersIdRequest, config?: AxiosRequestConfig): Promise<operations.GetV1CustomersIdResponse>;
}
