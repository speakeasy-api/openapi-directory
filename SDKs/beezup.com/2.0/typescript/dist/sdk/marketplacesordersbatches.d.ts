import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class MarketplacesOrdersBatches {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * changeOrderList - [DEPRECATED] Send a batch of operations to change your marketplace Order information: accept, ship, etc.  (max 100 items per call)
     *
     * The purpose of this operation is to reduce the amount of request to the API.
     * Max 100 items per call.
     *
    **/
    changeOrderList(req: operations.ChangeOrderListRequest, config?: AxiosRequestConfig): Promise<operations.ChangeOrderListResponse>;
    /**
     * clearMerchantOrderInfoList - [DEPRECATED] Send a batch of operations to clear an Order's merchant information (max 100 items per call)
     *
     * The purpose of this operation is to reduce the amount of request to the API.
    **/
    clearMerchantOrderInfoList(req: operations.ClearMerchantOrderInfoListRequest, config?: AxiosRequestConfig): Promise<operations.ClearMerchantOrderInfoListResponse>;
    /**
     * setMerchantOrderInfoList - [DEPRECATED] Send a batch of operations to set an Order's merchant information  (max 100 items per call)
     *
     * The purpose of this operation is to reduce the amount of request to the API.
    **/
    setMerchantOrderInfoList(req: operations.SetMerchantOrderInfoListRequest, config?: AxiosRequestConfig): Promise<operations.SetMerchantOrderInfoListResponse>;
}
