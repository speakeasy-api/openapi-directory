import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class MarketplacesOrdersBatches {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * [DEPRECATED] Send a batch of operations to change your marketplace Order information: accept, ship, etc.  (max 100 items per call)
     *
     * @remarks
     * The purpose of this operation is to reduce the amount of request to the API.
     * Max 100 items per call.
     *
     */
    changeOrderList(req: operations.ChangeOrderListRequest, config?: AxiosRequestConfig): Promise<operations.ChangeOrderListResponse>;
    /**
     * [DEPRECATED] Send a batch of operations to clear an Order's merchant information (max 100 items per call)
     *
     * @remarks
     * The purpose of this operation is to reduce the amount of request to the API.
     */
    clearMerchantOrderInfoList(req: shared.ClearMerchantOrderInfoListRequest, config?: AxiosRequestConfig): Promise<operations.ClearMerchantOrderInfoListResponse>;
    /**
     * [DEPRECATED] Send a batch of operations to set an Order's merchant information  (max 100 items per call)
     *
     * @remarks
     * The purpose of this operation is to reduce the amount of request to the API.
     */
    setMerchantOrderInfoList(req: shared.SetMerchantOrderInfoListRequest, config?: AxiosRequestConfig): Promise<operations.SetMerchantOrderInfoListResponse>;
}
