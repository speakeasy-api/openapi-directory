import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * APIs for request on Amazon
 *
 * @see {@link http://api.axesso.de/} - Find out more
 */
export declare class Amz {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * fetch results auf a keyword search on Amazon
     */
    keywordSearch(req: operations.KeywordSearchRequest, config?: AxiosRequestConfig): Promise<operations.KeywordSearchResponse>;
    /**
     * request buy recommendations to a given product
     */
    requestBuyRecommendation(req: operations.RequestBuyRecommendationRequest, config?: AxiosRequestConfig): Promise<operations.RequestBuyRecommendationResponse>;
    /**
     * lookup product information
     */
    requestProduct(req: operations.RequestProductRequest, config?: AxiosRequestConfig): Promise<operations.RequestProductResponse>;
    /**
     * request available sort options to use in keyword search
     */
    sortOptions(config?: AxiosRequestConfig): Promise<operations.SortOptionsResponse>;
}
