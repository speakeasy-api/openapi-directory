import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class MarketplacesOrdersList {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * [DEPRECATED] Get a paginated list of all Orders with all Order and Order Item(s) properties
     *
     * @remarks
     * DEPRECATED - Use /orders/v3 instead
     * The purpose of this operation is to reduce the amount of request to the API.\
     * \
     * Previous implmentation of this feature only returned a partial (light) version of the Orders. The purpose of this API is to reduce the number of incoming requests by returning the complete (full) Order and Order Item(s) properties.
     *
     */
    getOrderListFull(req: operations.GetOrderListFullRequest, config?: AxiosRequestConfig): Promise<operations.GetOrderListFullResponse>;
    /**
     * [DEPRECATED] Get a paginated list of all Orders without details
     *
     * @remarks
     * Use /orders/v3 instead
     */
    getOrderListLight(req: shared.OrderListRequest, config?: AxiosRequestConfig): Promise<operations.GetOrderListLightResponse>;
}
