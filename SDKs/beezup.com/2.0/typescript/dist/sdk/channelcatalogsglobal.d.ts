import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ChannelCatalogsGlobal {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a new channel catalog
     */
    addChannelCatalog(req: shared.AddChannelCatalogRequest, config?: AxiosRequestConfig): Promise<operations.AddChannelCatalogResponse>;
    /**
     * Delete the channel catalog
     */
    deleteChannelCatalog(req: operations.DeleteChannelCatalogRequest, config?: AxiosRequestConfig): Promise<operations.DeleteChannelCatalogResponse>;
    /**
     * Get the channel catalog information
     */
    getChannelCatalog(req: operations.GetChannelCatalogRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelCatalogResponse>;
    /**
     * Get channel catalog filter operators
     */
    getChannelCatalogFilterOperators(config?: AxiosRequestConfig): Promise<operations.GetChannelCatalogFilterOperatorsResponse>;
    /**
     * List all your current channel catalogs
     */
    getChannelCatalogs(req: operations.GetChannelCatalogsRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelCatalogsResponse>;
}
