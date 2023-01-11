import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class StandardPlanOrGreater {
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
     * getBrandNamesGetBrandsGet - Get a list of brand names
     *
     * Get vehicle brand names.
     *
     * These names are used as arguments for other endpoints. The names are generally not case sensitive
     * when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.
    **/
    getBrandNamesGetBrandsGet(req: operations.GetBrandNamesGetBrandsGetRequest, config?: AxiosRequestConfig): Promise<operations.GetBrandNamesGetBrandsGetResponse>;
    /**
     * getMarket3SimilarSalePriceGet - Premium. Simple Vehicle Market Report
     *
     * Premium. Provides the average, stdDev, and count, of the sale price and mileage of similar new and used vehicles in a given region based off the provided VIN.
     * Optionally restricts report to vehicles of the same model year and goes back up to 120 days.
    **/
    getMarket3SimilarSalePriceGet(req: operations.GetMarket3SimilarSalePriceGetRequest, config?: AxiosRequestConfig): Promise<operations.GetMarket3SimilarSalePriceGetResponse>;
    /**
     * getModelNamesAllGetInactiveModelsGet - Get a list of model names including discontinued models
     *
     * Get all model names including discontinued models. Because these models are no longer built, or have very poor market performance
     * they are not incuded in the normal getModels endpoint. Many users itterate through the model names with our new vehicle sales
     * endpoints and waste some of their quota making self contradictory requests. This endpoint was created to aleviate the use case where
     * someone requests information on new vehicle sales for a model that has not been sold new for a long, long, time.
     *
     * These names are used as arguments for other endpoints. The names are generally not case sensitive
     * when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.
    **/
    getModelNamesAllGetInactiveModelsGet(req: operations.GetModelNamesAllGetInactiveModelsGetRequest, config?: AxiosRequestConfig): Promise<operations.GetModelNamesAllGetInactiveModelsGetResponse>;
    /**
     * getModelNamesGetModelsGet - Get a list of model names
     *
     * Get brand model names for currently active models. This endpoint does not return model names that have been discontinued or have
     * sold less than 10 vehicles in the last month and a half.
     *
     * These names are used as arguments for other endpoints. The names are generally not case sensitive
     * when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.
    **/
    getModelNamesGetModelsGet(req: operations.GetModelNamesGetModelsGetRequest, config?: AxiosRequestConfig): Promise<operations.GetModelNamesGetModelsGetResponse>;
    /**
     * getModelSaleBucketsSalePriceHistogramGet - Histogram of sales price of new vehicles by model
     *
     * Histogram of the sale price of vehicles over the last 45 days for a given model and region.
     * Price buckets are grouped in units of $1000
     * The available brand, model, and region names can be retrieved from their respective endpoints.
    **/
    getModelSaleBucketsSalePriceHistogramGet(req: operations.GetModelSaleBucketsSalePriceHistogramGetRequest, config?: AxiosRequestConfig): Promise<operations.GetModelSaleBucketsSalePriceHistogramGetResponse>;
    /**
     * getModelUsedDistModelYearDistGet - Used market share of model year by model
     *
     * Market share of used vehicles over the last 45 days by model and year. All values are relative to vehicles of the same model.
     * For example: a percentOfMarket value of 25, year of 2017, and modelName of Camry means that 25% of used Camrys on the market
     * in the given region over the last 45 days were from the 2017 model year.
    **/
    getModelUsedDistModelYearDistGet(req: operations.GetModelUsedDistModelYearDistGetRequest, config?: AxiosRequestConfig): Promise<operations.GetModelUsedDistModelYearDistGetResponse>;
    /**
     * getRegionsGetRegionsGet - Get a list of region names
     *
     * Get region names. These names are used as arguments for other endpoints. The names are generally not case sensitive
     * when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.
    **/
    getRegionsGetRegionsGet(req: operations.GetRegionsGetRegionsGetRequest, config?: AxiosRequestConfig): Promise<operations.GetRegionsGetRegionsGetResponse>;
    /**
     * getTopModelsTopModelsGet - Top models in a given region
     *
     * Sales ranking of different models by region over the last 45 days.
     * The <strong>percentOfTopSales</strong> value is the percent of the top seller the model represents.
     *
     * For example: a value of 80% means that model sold 8 vehicles for every 10 of the top model sold.
     *
     * The other fields represent the model percent of X. The <strong>brandMarketShare</strong> field is that brand's market share of the region
     * over the report's time interval.
    **/
    getTopModelsTopModelsGet(req: operations.GetTopModelsTopModelsGetRequest, config?: AxiosRequestConfig): Promise<operations.GetTopModelsTopModelsGetResponse>;
    /**
     * vinDecodeVinDecodeGet - Vin decoder and Recall Info
     *
     * Decodes the provided North American vin and provides recall information if available.
     * We require at least the first 12 out of 17 characters in the vin to attempt a decode. The vin is not case sensitive.
     * If passEmpty (default False) is True we will also include the empty fields in the response json.
     * If includeRecall (default True) is True we will include recall data reported to the NHTSA. Set False for a faster response.
    **/
    vinDecodeVinDecodeGet(req: operations.VinDecodeVinDecodeGetRequest, config?: AxiosRequestConfig): Promise<operations.VinDecodeVinDecodeGetResponse>;
}
