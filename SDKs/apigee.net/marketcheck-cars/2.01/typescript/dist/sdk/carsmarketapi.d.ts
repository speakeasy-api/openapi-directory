import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CarsMarketApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDailyStats - Price, Miles and Days on Market stats
     *
     * National, state and city level stats for price, miles and dom
    **/
    getDailyStats(req: operations.GetDailyStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetDailyStatsResponse>;
    /**
     * getMds - Market Days Supply
     *
     * Get the basic information on specifications for a car identified by a valid VIN
    **/
    getMds(req: operations.GetMdsRequest, config?: AxiosRequestConfig): Promise<operations.GetMdsResponse>;
    /**
     * getPopularCars - Get make model wise top 50 popular cars on national, state, city level
     *
     * Get make model wise top 50 popular cars on national, state, city level
    **/
    getPopularCars(req: operations.GetPopularCarsRequest, config?: AxiosRequestConfig): Promise<operations.GetPopularCarsResponse>;
    /**
     * getSalesCount - Get sales count by make, model, year, trim or taxonomy vin
     *
     * Get a sales count for city, state or national level by make, model, year, trim or taxonomy vin
    **/
    getSalesCount(req: operations.GetSalesCountRequest, config?: AxiosRequestConfig): Promise<operations.GetSalesCountResponse>;
}
