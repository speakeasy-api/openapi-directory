import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Amz {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * keywordSearch - fetch results auf a keyword search on Amazon
    **/
    keywordSearch(req: operations.KeywordSearchRequest, config?: AxiosRequestConfig): Promise<operations.KeywordSearchResponse>;
    /**
     * requestBuyRecommendation - request buy recommendations to a given product
    **/
    requestBuyRecommendation(req: operations.RequestBuyRecommendationRequest, config?: AxiosRequestConfig): Promise<operations.RequestBuyRecommendationResponse>;
    /**
     * requestProduct - lookup product information
    **/
    requestProduct(req: operations.RequestProductRequest, config?: AxiosRequestConfig): Promise<operations.RequestProductResponse>;
    /**
     * sortOptions - request available sort options to use in keyword search
    **/
    sortOptions(config?: AxiosRequestConfig): Promise<operations.SortOptionsResponse>;
}
