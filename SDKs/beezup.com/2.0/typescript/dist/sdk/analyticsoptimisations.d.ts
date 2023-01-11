import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AnalyticsOptimisations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * copyOptimisation - Copy product optimisations between 2 channels
    **/
    copyOptimisation(req: operations.CopyOptimisationRequest, config?: AxiosRequestConfig): Promise<operations.CopyOptimisationResponse>;
    /**
     * optimise - Optimise products by page
     *
     * /!\ WARNING /!\ \
     * Apply the operation on every product related to this request. \
     * This operation is used at the bottom of the analytics page result.
     *
    **/
    optimise(req: operations.OptimiseRequest, config?: AxiosRequestConfig): Promise<operations.OptimiseResponse>;
    /**
     * optimiseAll - Optimise all products
     *
     * /!\ WARNING /!\ \
     * Apply the operation on every product related to this request. \
     * This operation is used at the bottom of the analytics page result.
     *
    **/
    optimiseAll(req: operations.OptimiseAllRequest, config?: AxiosRequestConfig): Promise<operations.OptimiseAllResponse>;
    /**
     * optimiseByCategory - Optimise products by category
     *
     * /!\ WARNING /!\ \
     * This operation will reenable or disable products's category for every channel indicated in the body.
     *
    **/
    optimiseByCategory(req: operations.OptimiseByCategoryRequest, config?: AxiosRequestConfig): Promise<operations.OptimiseByCategoryResponse>;
    /**
     * optimiseByChannel - Optimise products by channel
     *
     * /!\ WARNING /!\ \
     * Apply the operation on every product on this channel.
     *
    **/
    optimiseByChannel(req: operations.OptimiseByChannelRequest, config?: AxiosRequestConfig): Promise<operations.OptimiseByChannelResponse>;
    /**
     * optimiseByProduct - Optimise product
     *
     * /!\ WARNING /!\ \
     * This operation will reenable or disable this product for every channel indicated in the body.
     *
    **/
    optimiseByProduct(req: operations.OptimiseByProductRequest, config?: AxiosRequestConfig): Promise<operations.OptimiseByProductResponse>;
}
