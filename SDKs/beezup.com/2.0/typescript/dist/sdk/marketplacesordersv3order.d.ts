import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class MarketplacesOrdersV3Order {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * changeOrderV3 - Change your marketplace Order Information (accept, ship, etc.)
    **/
    changeOrderV3(req: operations.ChangeOrderV3Request, config?: AxiosRequestConfig): Promise<operations.ChangeOrderV3Response>;
    /**
     * clearMerchantOrderInfoV3 - Clear an Order's merchant information
    **/
    clearMerchantOrderInfoV3(req: operations.ClearMerchantOrderInfoV3Request, config?: AxiosRequestConfig): Promise<operations.ClearMerchantOrderInfoV3Response>;
    /**
     * getOrderChangeReportingV3 - Get the order change reporting
     *
     * This operation will help you to know the status of your order change operation
    **/
    getOrderChangeReportingV3(req: operations.GetOrderChangeReportingV3Request, config?: AxiosRequestConfig): Promise<operations.GetOrderChangeReportingV3Response>;
    /**
     * getOrderHistoryV3 - Get an Order's harvest and change history
    **/
    getOrderHistoryV3(req: operations.GetOrderHistoryV3Request, config?: AxiosRequestConfig): Promise<operations.GetOrderHistoryV3Response>;
    /**
     * getOrderV3 - Get full Order and Order Item(s) properties
    **/
    getOrderV3(req: operations.GetOrderV3Request, config?: AxiosRequestConfig): Promise<operations.GetOrderV3Response>;
    /**
     * harvestAccount - Send harvest request for an Account
    **/
    harvestAccount(req: operations.HarvestAccountRequest, config?: AxiosRequestConfig): Promise<operations.HarvestAccountResponse>;
    /**
     * harvestOrderV3 - Send harvest request for a single Order
    **/
    harvestOrderV3(req: operations.HarvestOrderV3Request, config?: AxiosRequestConfig): Promise<operations.HarvestOrderV3Response>;
    /**
     * headOrderV3 - Get the meta information about the order (ETag, Last-Modified)
     *
     * The purpose of this operation is to reduce the bandwith usage by getting just the meta information about the order (ETag, Last-Modified) with the body.
     * This could be useful
     *
    **/
    headOrderV3(req: operations.HeadOrderV3Request, config?: AxiosRequestConfig): Promise<operations.HeadOrderV3Response>;
    /**
     * setMerchantOrderInfoV3 - Set an Order's merchant information
    **/
    setMerchantOrderInfoV3(req: operations.SetMerchantOrderInfoV3Request, config?: AxiosRequestConfig): Promise<operations.SetMerchantOrderInfoV3Response>;
}
