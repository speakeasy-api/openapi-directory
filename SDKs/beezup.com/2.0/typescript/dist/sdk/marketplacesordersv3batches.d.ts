import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class MarketplacesOrdersV3Batches {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * changeOrderListV2 - Send a batch of operations to change your marketplace Order information: accept, ship, etc.  (max 100 items per call)
     *
     * The purpose of this operation is to reduce the amount of request to the API.
     * Max 100 items per call.
     *
    **/
    changeOrderListV2(req: operations.ChangeOrderListV2Request, config?: AxiosRequestConfig): Promise<operations.ChangeOrderListV2Response>;
    /**
     * changeOrderListV3 - Send a batch of operations to change your marketplace Order information: accept, ship, etc.  (max 100 items per call)
     *
     * The purpose of this operation is to reduce the amount of request to the API.
     * Max 100 items per call.
     *
    **/
    changeOrderListV3(req: operations.ChangeOrderListV3Request, config?: AxiosRequestConfig): Promise<operations.ChangeOrderListV3Response>;
    /**
     * clearMerchantOrderInfoListV3 - Send a batch of operations to clear an Order's merchant information (max 100 items per call)
     *
     * The purpose of this operation is to reduce the amount of request to the API.
    **/
    clearMerchantOrderInfoListV3(req: operations.ClearMerchantOrderInfoListV3Request, config?: AxiosRequestConfig): Promise<operations.ClearMerchantOrderInfoListV3Response>;
    /**
     * setMerchantOrderInfoListV3 - Send a batch of operations to set an Order's merchant information  (max 100 items per call)
     *
     * The purpose of this operation is to reduce the amount of request to the API.
    **/
    setMerchantOrderInfoListV3(req: operations.SetMerchantOrderInfoListV3Request, config?: AxiosRequestConfig): Promise<operations.SetMerchantOrderInfoListV3Response>;
}
