import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class MarketplacesChannelCatalogsSettings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get the marketplace properties for a channel catalog
     */
    getChannelCatalogMarketplaceProperties(req: operations.GetChannelCatalogMarketplacePropertiesRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelCatalogMarketplacePropertiesResponse>;
    /**
     * Get the marketplace settings for a channel catalog
     */
    getChannelCatalogMarketplaceSettings(req: operations.GetChannelCatalogMarketplaceSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelCatalogMarketplaceSettingsResponse>;
    /**
     * Save new marketplace settings for a channel catalog
     *
     * @remarks
     * Allow you to configure your marketplace settings.
     * Partial update accepted.
     *
     */
    setChannelCatalogMarketplaceSettings(req: operations.SetChannelCatalogMarketplaceSettingsRequest, config?: AxiosRequestConfig): Promise<operations.SetChannelCatalogMarketplaceSettingsResponse>;
}
