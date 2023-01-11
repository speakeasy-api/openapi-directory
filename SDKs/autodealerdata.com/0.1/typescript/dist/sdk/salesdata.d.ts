import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SalesData {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDealerSalesRegionDailySalesGet - Brand sales by region and Day
     *
     * Get regional sales by brand and day. Most recent data is typically only 2 days old for this endpoint.
     *
     * The Day field is in YYYY-MM-DD format. For example if you wanted sales data from April 5th of 2020 the day field would be '2020-04-05'
     *
     * Data availability depends on region and goes back up to 2016.
    **/
    getDealerSalesRegionDailySalesGet(req: operations.GetDealerSalesRegionDailySalesGetRequest, config?: AxiosRequestConfig): Promise<operations.GetDealerSalesRegionDailySalesGetResponse>;
    /**
     * getDealerSalesRegionSalesGet - Premium. Brand sales by region and month
     *
     * Premium. Get regional sales by brand and month, broken down by day. Most recent data is typically only 2 days old for this endpoint.
     *
     * The month field is in YYYY-MM-DD format. For example if you wanted sales data from April of 2020 the month field would be '2020-04-01'
     *
     * Data availability depends on region and goes back up to 2016.
    **/
    getDealerSalesRegionSalesGet(req: operations.GetDealerSalesRegionSalesGetRequest, config?: AxiosRequestConfig): Promise<operations.GetDealerSalesRegionSalesGetResponse>;
    /**
     * getModelUsedDistModelYearDistGet - Used market share of model year by model
     *
     * Market share of used vehicles over the last 45 days by model and year. All values are relative to vehicles of the same model.
     * For example: a percentOfMarket value of 25, year of 2017, and modelName of Camry means that 25% of used Camrys on the market
     * in the given region over the last 45 days were from the 2017 model year.
    **/
    getModelUsedDistModelYearDistGet(req: operations.GetModelUsedDistModelYearDistGetRequest, config?: AxiosRequestConfig): Promise<operations.GetModelUsedDistModelYearDistGetResponse>;
    /**
     * getRegionBrandMarketShareGetRegionBrandMarketShareGet - Market share of a brand in region
     *
     * Market share of a given brand in a given region by number of vehicles sold over the last 45 days.
    **/
    getRegionBrandMarketShareGetRegionBrandMarketShareGet(req: operations.GetRegionBrandMarketShareGetRegionBrandMarketShareGetRequest, config?: AxiosRequestConfig): Promise<operations.GetRegionBrandMarketShareGetRegionBrandMarketShareGetResponse>;
    /**
     * getRegionMarketShareGetRegionMarketShareGet - Market share of all brands in region
     *
     * Market share of a all brands in a given region by number of vehicles sold over the last 45 days.
    **/
    getRegionMarketShareGetRegionMarketShareGet(req: operations.GetRegionMarketShareGetRegionMarketShareGetRequest, config?: AxiosRequestConfig): Promise<operations.GetRegionMarketShareGetRegionMarketShareGetResponse>;
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
}
