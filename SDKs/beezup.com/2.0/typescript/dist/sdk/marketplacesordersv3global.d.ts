import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class MarketplacesOrdersV3Global {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getMarketplaceAccountsSynchronizationV3 - Get current synchronization status between your marketplaces and BeezUP accounts
    **/
    getMarketplaceAccountsSynchronizationV3(req: operations.GetMarketplaceAccountsSynchronizationV3Request, config?: AxiosRequestConfig): Promise<operations.GetMarketplaceAccountsSynchronizationV3Response>;
    /**
     * getOrderManagementReadyMarketplaceBusinessCode - Get the list of MarketplaceBusinessCode ready for Order Management
    **/
    getOrderManagementReadyMarketplaceBusinessCode(req: operations.GetOrderManagementReadyMarketplaceBusinessCodeRequest, config?: AxiosRequestConfig): Promise<operations.GetOrderManagementReadyMarketplaceBusinessCodeResponse>;
    /**
     * harvestAllV3 - Send harvest request to all your marketplaces
    **/
    harvestAllV3(req: operations.HarvestAllV3Request, config?: AxiosRequestConfig): Promise<operations.HarvestAllV3Response>;
}
