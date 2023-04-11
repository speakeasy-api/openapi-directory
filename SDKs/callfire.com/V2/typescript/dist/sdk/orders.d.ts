import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Orders {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Find orders
     *
     * @remarks
     * Searches for account orders
     */
    findOrders(req: operations.FindOrdersRequest, security: operations.FindOrdersSecurity, config?: AxiosRequestConfig): Promise<operations.FindOrdersResponse>;
    /**
     * Find a specific order
     *
     * @remarks
     * Returns a single NumberOrder instance for a given order id. Order contains information about purchased keywords, local, toll-free numbers
     */
    getOrder(req: operations.GetOrderRequest, security: operations.GetOrderSecurity, config?: AxiosRequestConfig): Promise<operations.GetOrderResponse>;
    /**
     * Purchase keywords
     *
     * @remarks
     * Purchase keywords. Send a list of available keywords into this API to purchase them using CallFire credits. Make sure the account has enough credits before trying to purchase the keywords. Keyword should only consist of uppercase and lowercase letters and numbers. Number of characters must be greater than 2, but less than 65.
     */
    orderKeywords(req: operations.OrderKeywordsRequest, security: operations.OrderKeywordsSecurity, config?: AxiosRequestConfig): Promise<operations.OrderKeywordsResponse>;
    /**
     * Purchase numbers
     *
     * @remarks
     * Purchase numbers. There are many ways to purchase a number. Set either 'tollFreeCount' or 'localCount' along with some querying fields to purchase numbers by bulk query. Set the list of numbers to purchase by list. Available numbers will be purchased using CallFire credits owned by the user. Make sure the account has enough credits before trying to purchase
     */
    orderNumbers(req: operations.OrderNumbersRequest, security: operations.OrderNumbersSecurity, config?: AxiosRequestConfig): Promise<operations.OrderNumbersResponse>;
}
