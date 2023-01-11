import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SupplyData {
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
}
