import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class MarketplacesOrdersV3List {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getOrderListFullV3 - Get a paginated list of all Orders with all Order and Order Item(s) properties
     *
     * The purpose of this operation is to reduce the amount of request to the API.\
     * \
     * Previous implmentation of this feature only returned a partial (light) version of the Orders. The purpose of this API is to reduce the number of incoming requests by returning the complete (full) Order and Order Item(s) properties.
     *
    **/
    getOrderListFullV3(req: operations.GetOrderListFullV3Request, config?: AxiosRequestConfig): Promise<operations.GetOrderListFullV3Response>;
    /**
     * getOrderListLightV3 - Get a paginated list of all Orders without details
    **/
    getOrderListLightV3(req: operations.GetOrderListLightV3Request, config?: AxiosRequestConfig): Promise<operations.GetOrderListLightV3Response>;
}
