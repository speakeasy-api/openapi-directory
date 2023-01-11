import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ChannelCatalogsGlobal {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addChannelCatalog - Add a new channel catalog
    **/
    addChannelCatalog(req: operations.AddChannelCatalogRequest, config?: AxiosRequestConfig): Promise<operations.AddChannelCatalogResponse>;
    /**
     * deleteChannelCatalog - Delete the channel catalog
    **/
    deleteChannelCatalog(req: operations.DeleteChannelCatalogRequest, config?: AxiosRequestConfig): Promise<operations.DeleteChannelCatalogResponse>;
    /**
     * getChannelCatalog - Get the channel catalog information
    **/
    getChannelCatalog(req: operations.GetChannelCatalogRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelCatalogResponse>;
    /**
     * getChannelCatalogFilterOperators - Get channel catalog filter operators
    **/
    getChannelCatalogFilterOperators(config?: AxiosRequestConfig): Promise<operations.GetChannelCatalogFilterOperatorsResponse>;
    /**
     * getChannelCatalogs - List all your current channel catalogs
    **/
    getChannelCatalogs(req: operations.GetChannelCatalogsRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelCatalogsResponse>;
}
