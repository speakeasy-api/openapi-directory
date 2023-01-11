import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ProPlanOrGreater {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * daysSupplyDaysSupplyGet - Days worth of supply left on dealer lots
     *
     * Average, median, standard deviation, population variance, and whole region average of the
     * days of supply left on dealer lots for a given brand and region. The average, median, stdDev, and pVar fields are calculated on
     * a dealer by dealer basis while the whole region average treats the entire region like a single dealership.
     * The average field may differ from the whole region average, especially when dealers are out of
     * a given model.
     *
     * The available brand and region names can be retrieved from their respective endpoints.
    **/
    daysSupplyDaysSupplyGet(req: operations.DaysSupplyDaysSupplyGetRequest, config?: AxiosRequestConfig): Promise<operations.DaysSupplyDaysSupplyGetResponse>;
    /**
     * daysToSellDaysToSellGet - Days a vehicle takes to sell
     *
     * Average, median, standard deviation, population variance, and whole region average of the
     * number of days a vehicle spends on dealer lots for a given brand and region. The average, median, stdDev, and pVar fields are calculated on
     * a dealer by dealer basis while the whole region average treats the entire region like a single dealership.
     * The average field may differ from the whole region average.
     *
     * The available brand and region names can be retrieved from their respective endpoints.
    **/
    daysToSellDaysToSellGet(req: operations.DaysToSellDaysToSellGetRequest, config?: AxiosRequestConfig): Promise<operations.DaysToSellDaysToSellGetResponse>;
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
}
