import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class MarketplacesChannelCatalogsGlobal {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getMarketplaceChannelCatalogs - Get your marketplace channel catalog list
    **/
    getMarketplaceChannelCatalogs(req: operations.GetMarketplaceChannelCatalogsRequest, config?: AxiosRequestConfig): Promise<operations.GetMarketplaceChannelCatalogsResponse>;
}
