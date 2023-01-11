import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class MarketplacesOrdersGlobal {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getMarketplaceAccountsSynchronization - [DEPRECATED] Get current synchronization status between your marketplaces and BeezUP accounts
     *
     * Use /orders/v3
    **/
    getMarketplaceAccountsSynchronization(req: operations.GetMarketplaceAccountsSynchronizationRequest, config?: AxiosRequestConfig): Promise<operations.GetMarketplaceAccountsSynchronizationResponse>;
    /**
     * getOrderIndex - [DEPRECATED] Get all actions you can do on the order API
    **/
    getOrderIndex(req: operations.GetOrderIndexRequest, config?: AxiosRequestConfig): Promise<operations.GetOrderIndexResponse>;
    /**
     * harvestAll - [DEPRECATED] Send harvest request to all your marketplaces
    **/
    harvestAll(req: operations.HarvestAllRequest, config?: AxiosRequestConfig): Promise<operations.HarvestAllResponse>;
}
