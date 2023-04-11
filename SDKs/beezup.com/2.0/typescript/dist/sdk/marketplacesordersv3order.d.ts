import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class MarketplacesOrdersV3Order {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Change your marketplace Order Information (accept, ship, etc.)
     */
    changeOrderV3(req: operations.ChangeOrderV3Request, config?: AxiosRequestConfig): Promise<operations.ChangeOrderV3Response>;
    /**
     * Clear an Order's merchant information
     */
    clearMerchantOrderInfoV3(req: operations.ClearMerchantOrderInfoV3Request, config?: AxiosRequestConfig): Promise<operations.ClearMerchantOrderInfoV3Response>;
    /**
     * Get the order change reporting
     *
     * @remarks
     * This operation will help you to know the status of your order change operation
     */
    getOrderChangeReportingV3(req: operations.GetOrderChangeReportingV3Request, config?: AxiosRequestConfig): Promise<operations.GetOrderChangeReportingV3Response>;
    /**
     * Get an Order's harvest and change history
     */
    getOrderHistoryV3(req: operations.GetOrderHistoryV3Request, config?: AxiosRequestConfig): Promise<operations.GetOrderHistoryV3Response>;
    /**
     * Get full Order and Order Item(s) properties
     */
    getOrderV3(req: operations.GetOrderV3Request, config?: AxiosRequestConfig): Promise<operations.GetOrderV3Response>;
    /**
     * Send harvest request for an Account
     */
    harvestAccount(req: operations.HarvestAccountRequest, config?: AxiosRequestConfig): Promise<operations.HarvestAccountResponse>;
    /**
     * Send harvest request for a single Order
     */
    harvestOrderV3(req: operations.HarvestOrderV3Request, config?: AxiosRequestConfig): Promise<operations.HarvestOrderV3Response>;
    /**
     * Get the meta information about the order (ETag, Last-Modified)
     *
     * @remarks
     * The purpose of this operation is to reduce the bandwith usage by getting just the meta information about the order (ETag, Last-Modified) with the body.
     * This could be useful
     *
     */
    headOrderV3(req: operations.HeadOrderV3Request, config?: AxiosRequestConfig): Promise<operations.HeadOrderV3Response>;
    /**
     * Set an Order's merchant information
     */
    setMerchantOrderInfoV3(req: operations.SetMerchantOrderInfoV3Request, config?: AxiosRequestConfig): Promise<operations.SetMerchantOrderInfoV3Response>;
}
