import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Premium {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
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
     * getDealersGetDealersByIdGet - Premium. Dealers by ID
     *
     * Premium. Dealership information using the internal ID. Returns name, address, state, zipCode, and ID for a single dealer in the same format as the /getDealers endpoint.
     * Dealer IDs are generally retrieved via the /getDealers or /getDealersByRegion endpoints.
    **/
    getDealersGetDealersByIdGet(req: operations.GetDealersGetDealersByIdGetRequest, config?: AxiosRequestConfig): Promise<operations.GetDealersGetDealersByIdGetResponse>;
    /**
     * getDealersGetDealersByRegionGet - Premium. Dealers in a region.
     *
     * Premium. Dealership information in a given region. Returns name, address, state, zipCode, and IDs. Results are paginated with up to 30 results per page.
    **/
    getDealersGetDealersByRegionGet(req: operations.GetDealersGetDealersByRegionGetRequest, config?: AxiosRequestConfig): Promise<operations.GetDealersGetDealersByRegionGetResponse>;
    /**
     * getDealersGetDealersGet - Premium. Dealers in a zip code.
     *
     * Premium. Dealership information in a given zip code using the first 4 digits. Returns name, address, state, zipCode, and IDs.
     * For example a call with the zip code 92701 would return dealers with zip codes in the range [92700, 92709]
    **/
    getDealersGetDealersGet(req: operations.GetDealersGetDealersGetRequest, config?: AxiosRequestConfig): Promise<operations.GetDealersGetDealersGetResponse>;
    /**
     * getHistory2VehicleHistoryGet - Premium. Simple Vehicle History Report
     *
     * Premium. Provides a simple report detailing a vechicle's sales history at dealerships. Data includes the name of the dealership, dates it was for sale,
     * price, new/used condition, mileage, dealership state, and dealership zip code. Data availability goes back to early 2016.
     *
     * If your use case involves checking if a vehicle has appeared on the open market on or after a given date see
     * the /vehicleSeen endpoint.
    **/
    getHistory2VehicleHistoryGet(req: operations.GetHistory2VehicleHistoryGetRequest, config?: AxiosRequestConfig): Promise<operations.GetHistory2VehicleHistoryGetResponse>;
    /**
     * getMarket3SimilarSalePriceGet - Premium. Simple Vehicle Market Report
     *
     * Premium. Provides the average, stdDev, and count, of the sale price and mileage of similar new and used vehicles in a given region based off the provided VIN.
     * Optionally restricts report to vehicles of the same model year and goes back up to 120 days.
    **/
    getMarket3SimilarSalePriceGet(req: operations.GetMarket3SimilarSalePriceGetRequest, config?: AxiosRequestConfig): Promise<operations.GetMarket3SimilarSalePriceGetResponse>;
    /**
     * getRegionMarketShareGetRegionMarketShareGet - Market share of all brands in region
     *
     * Market share of a all brands in a given region by number of vehicles sold over the last 45 days.
    **/
    getRegionMarketShareGetRegionMarketShareGet(req: operations.GetRegionMarketShareGetRegionMarketShareGetRequest, config?: AxiosRequestConfig): Promise<operations.GetRegionMarketShareGetRegionMarketShareGetResponse>;
}
