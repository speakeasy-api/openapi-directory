import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class MarketplacesChannelCatalogsGlobal {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get your marketplace channel catalog list
     */
    getMarketplaceChannelCatalogs(req: operations.GetMarketplaceChannelCatalogsRequest, config?: AxiosRequestConfig): Promise<operations.GetMarketplaceChannelCatalogsResponse>;
}
