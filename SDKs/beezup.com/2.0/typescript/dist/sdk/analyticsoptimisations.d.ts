import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AnalyticsOptimisations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Copy product optimisations between 2 channels
     */
    copyOptimisation(req: operations.CopyOptimisationRequest, config?: AxiosRequestConfig): Promise<operations.CopyOptimisationResponse>;
    /**
     * Optimise products by page
     *
     * @remarks
     * /!\ WARNING /!\ \
     * Apply the operation on every product related to this request. \
     * This operation is used at the bottom of the analytics page result.
     *
     */
    optimise(req: operations.OptimiseRequest, config?: AxiosRequestConfig): Promise<operations.OptimiseResponse>;
    /**
     * Optimise all products
     *
     * @remarks
     * /!\ WARNING /!\ \
     * Apply the operation on every product related to this request. \
     * This operation is used at the bottom of the analytics page result.
     *
     */
    optimiseAll(req: operations.OptimiseAllRequest, config?: AxiosRequestConfig): Promise<operations.OptimiseAllResponse>;
    /**
     * Optimise products by category
     *
     * @remarks
     * /!\ WARNING /!\ \
     * This operation will reenable or disable products's category for every channel indicated in the body.
     *
     */
    optimiseByCategory(req: operations.OptimiseByCategoryRequest, config?: AxiosRequestConfig): Promise<operations.OptimiseByCategoryResponse>;
    /**
     * Optimise products by channel
     *
     * @remarks
     * /!\ WARNING /!\ \
     * Apply the operation on every product on this channel.
     *
     */
    optimiseByChannel(req: operations.OptimiseByChannelRequest, config?: AxiosRequestConfig): Promise<operations.OptimiseByChannelResponse>;
    /**
     * Optimise product
     *
     * @remarks
     * /!\ WARNING /!\ \
     * This operation will reenable or disable this product for every channel indicated in the body.
     *
     */
    optimiseByProduct(req: operations.OptimiseByProductRequest, config?: AxiosRequestConfig): Promise<operations.OptimiseByProductResponse>;
}
