import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PricingData {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAvgListPriceListPriceGet - Stats on ask price of new vehicles
     *
     * Average, median, standard deviation, and population variance of the ask price of new vehicles over the last 15 days for a given brand and region.
     *
     * The available brand and region names can be retrieved from their respective endpoints.
    **/
    getAvgListPriceListPriceGet(req: operations.GetAvgListPriceListPriceGetRequest, config?: AxiosRequestConfig): Promise<operations.GetAvgListPriceListPriceGetResponse>;
    /**
     * getAvgSalePriceSalePriceGet - Stats on sale price of new vehicles
     *
     * Average, median, standard deviation, and population variance of the sale price of new vehicles over the last 15 days for a given brand and region.
     *
     * The available brand and region names can be retrieved from their respective endpoints.
    **/
    getAvgSalePriceSalePriceGet(req: operations.GetAvgSalePriceSalePriceGetRequest, config?: AxiosRequestConfig): Promise<operations.GetAvgSalePriceSalePriceGetResponse>;
    /**
     * getMarket3SimilarSalePriceGet - Premium. Simple Vehicle Market Report
     *
     * Premium. Provides the average, stdDev, and count, of the sale price and mileage of similar new and used vehicles in a given region based off the provided VIN.
     * Optionally restricts report to vehicles of the same model year and goes back up to 120 days.
    **/
    getMarket3SimilarSalePriceGet(req: operations.GetMarket3SimilarSalePriceGetRequest, config?: AxiosRequestConfig): Promise<operations.GetMarket3SimilarSalePriceGetResponse>;
    /**
     * getModelSaleBucketsSalePriceHistogramGet - Histogram of sales price of new vehicles by model
     *
     * Histogram of the sale price of vehicles over the last 45 days for a given model and region.
     * Price buckets are grouped in units of $1000
     * The available brand, model, and region names can be retrieved from their respective endpoints.
    **/
    getModelSaleBucketsSalePriceHistogramGet(req: operations.GetModelSaleBucketsSalePriceHistogramGetRequest, config?: AxiosRequestConfig): Promise<operations.GetModelSaleBucketsSalePriceHistogramGetResponse>;
}
