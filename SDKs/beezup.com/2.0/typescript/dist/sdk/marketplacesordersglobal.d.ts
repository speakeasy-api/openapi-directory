import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class MarketplacesOrdersGlobal {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * [DEPRECATED] Get current synchronization status between your marketplaces and BeezUP accounts
     *
     * @remarks
     * Use /orders/v3
     */
    getMarketplaceAccountsSynchronization(req: operations.GetMarketplaceAccountsSynchronizationRequest, config?: AxiosRequestConfig): Promise<operations.GetMarketplaceAccountsSynchronizationResponse>;
    /**
     * [DEPRECATED] Get all actions you can do on the order API
     */
    getOrderIndex(req: operations.GetOrderIndexRequest, config?: AxiosRequestConfig): Promise<operations.GetOrderIndexResponse>;
    /**
     * [DEPRECATED] Send harvest request to all your marketplaces
     */
    harvestAll(req: operations.HarvestAllRequest, config?: AxiosRequestConfig): Promise<operations.HarvestAllResponse>;
}
