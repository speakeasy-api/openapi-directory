import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class MarketplacesChannelCatalogsSettings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getChannelCatalogMarketplaceProperties - Get the marketplace properties for a channel catalog
    **/
    getChannelCatalogMarketplaceProperties(req: operations.GetChannelCatalogMarketplacePropertiesRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelCatalogMarketplacePropertiesResponse>;
    /**
     * getChannelCatalogMarketplaceSettings - Get the marketplace settings for a channel catalog
    **/
    getChannelCatalogMarketplaceSettings(req: operations.GetChannelCatalogMarketplaceSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelCatalogMarketplaceSettingsResponse>;
    /**
     * setChannelCatalogMarketplaceSettings - Save new marketplace settings for a channel catalog
     *
     * Allow you to configure your marketplace settings.
     * Partial update accepted.
     *
    **/
    setChannelCatalogMarketplaceSettings(req: operations.SetChannelCatalogMarketplaceSettingsRequest, config?: AxiosRequestConfig): Promise<operations.SetChannelCatalogMarketplaceSettingsResponse>;
}
