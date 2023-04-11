import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class MarketplacesOrdersOrder {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * [DEPRECATED] Change your marketplace Order Information (accept, ship, etc.)
     */
    changeOrder(req: operations.ChangeOrderRequest, config?: AxiosRequestConfig): Promise<operations.ChangeOrderResponse>;
    /**
     * [DEPRECATED] Clear an Order's merchant information
     */
    clearMerchantOrderInfo(req: operations.ClearMerchantOrderInfoRequest, config?: AxiosRequestConfig): Promise<operations.ClearMerchantOrderInfoResponse>;
    /**
     * [DEPRECATED] DEPRECATED - Get full Order and Order Item(s) properties
     *
     * @remarks
     * DEPRECATED - Use /orders/v3 instead
     */
    getOrder(req: operations.GetOrderRequest, config?: AxiosRequestConfig): Promise<operations.GetOrderResponse>;
    /**
     * [DEPRECATED] Get an Order's harvest and change history
     */
    getOrderHistory(req: operations.GetOrderHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetOrderHistoryResponse>;
    /**
     * [DEPRECATED] Send harvest request for a single Order
     */
    harvestOrder(req: operations.HarvestOrderRequest, config?: AxiosRequestConfig): Promise<operations.HarvestOrderResponse>;
    /**
     * [DEPRECATED] DEPRECATED - Get the meta information about the order (ETag, Last-Modified)
     *
     * @remarks
     * DEPRECATED - Use /orders/v3 instead
     * The purpose of this operation is to reduce the bandwith usage by getting just the meta information about the order (ETag, Last-Modified) with the body.
     * This could be useful
     *
     */
    headOrder(req: operations.HeadOrderRequest, config?: AxiosRequestConfig): Promise<operations.HeadOrderResponse>;
    /**
     * [DEPRECATED] Set an Order's merchant information
     */
    setMerchantOrderInfo(req: operations.SetMerchantOrderInfoRequest, config?: AxiosRequestConfig): Promise<operations.SetMerchantOrderInfoResponse>;
}
