import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ChannelCatalogsProductsOptimisation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * disableChannelCatalogProduct - Disable channel catalog product
     *
     * By default a all your catalog products are exposed to the channel.
     * You can disable a product by using this operation.
     * /!\ In case of massive optimisation we recommand you to use the analytics api
     *
    **/
    disableChannelCatalogProduct(req: operations.DisableChannelCatalogProductRequest, config?: AxiosRequestConfig): Promise<operations.DisableChannelCatalogProductResponse>;
    /**
     * reenableChannelCatalogProduct - Reenable channel catalog product
     *
     * By default a all your catalog products are exposed to the channel.
     * You can reenable a product by using this operation.
     * /!\ In case of massive optimisation we recommand you to use the analytics api
     *
    **/
    reenableChannelCatalogProduct(req: operations.ReenableChannelCatalogProductRequest, config?: AxiosRequestConfig): Promise<operations.ReenableChannelCatalogProductResponse>;
}
