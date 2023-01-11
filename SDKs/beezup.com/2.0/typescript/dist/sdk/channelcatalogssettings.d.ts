import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ChannelCatalogsSettings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * configureChannelCatalogCostSettings - Configure channel catalog cost settings
    **/
    configureChannelCatalogCostSettings(req: operations.ConfigureChannelCatalogCostSettingsRequest, config?: AxiosRequestConfig): Promise<operations.ConfigureChannelCatalogCostSettingsResponse>;
    /**
     * configureChannelCatalogGeneralSettings - Configure channel catalog general settings
    **/
    configureChannelCatalogGeneralSettings(req: operations.ConfigureChannelCatalogGeneralSettingsRequest, config?: AxiosRequestConfig): Promise<operations.ConfigureChannelCatalogGeneralSettingsResponse>;
    /**
     * disableChannelCatalog - Disable a channel catalog
    **/
    disableChannelCatalog(req: operations.DisableChannelCatalogRequest, config?: AxiosRequestConfig): Promise<operations.DisableChannelCatalogResponse>;
    /**
     * enableChannelCatalog - Enable a channel catalog
    **/
    enableChannelCatalog(req: operations.EnableChannelCatalogRequest, config?: AxiosRequestConfig): Promise<operations.EnableChannelCatalogResponse>;
}
