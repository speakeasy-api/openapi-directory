import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ChannelCatalogsProductsOverrides {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Copy channel catalog product value override
     */
    configureChannelCatalogProductValueOverrideCopy(req: operations.ConfigureChannelCatalogProductValueOverrideCopyRequest, config?: AxiosRequestConfig): Promise<operations.ConfigureChannelCatalogProductValueOverrideCopyResponse>;
    /**
     * Delete a specific channel catalog product value override
     */
    deleteChannelCatalogProductValueOverride(req: operations.DeleteChannelCatalogProductValueOverrideRequest, config?: AxiosRequestConfig): Promise<operations.DeleteChannelCatalogProductValueOverrideResponse>;
    /**
     * Get channel catalog product value override compatibilities status
     */
    getChannelCatalogProductValueOverrideCopy(req: operations.GetChannelCatalogProductValueOverrideCopyRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelCatalogProductValueOverrideCopyResponse>;
    /**
     * Override channel catalog product values
     */
    overrideChannelCatalogProductValues(req: operations.OverrideChannelCatalogProductValuesRequest, config?: AxiosRequestConfig): Promise<operations.OverrideChannelCatalogProductValuesResponse>;
}
