import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ChannelCatalogsLegacyTrackingGlobal {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getLegacyTrackingChannelCatalog - Get the channel catalog configured to use legacy tracking format information
    **/
    getLegacyTrackingChannelCatalog(req: operations.GetLegacyTrackingChannelCatalogRequest, config?: AxiosRequestConfig): Promise<operations.GetLegacyTrackingChannelCatalogResponse>;
    /**
     * getLegacyTrackingChannelCatalogs - List all your current channel catalogs configured to use legacy tracking format
    **/
    getLegacyTrackingChannelCatalogs(req: operations.GetLegacyTrackingChannelCatalogsRequest, config?: AxiosRequestConfig): Promise<operations.GetLegacyTrackingChannelCatalogsResponse>;
    /**
     * migrateLegacyTrackingChannelCatalog - Migrate a channel catalog to current tracking format
    **/
    migrateLegacyTrackingChannelCatalog(req: operations.MigrateLegacyTrackingChannelCatalogRequest, config?: AxiosRequestConfig): Promise<operations.MigrateLegacyTrackingChannelCatalogResponse>;
}
