import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CarsMarketAPI {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Predict fare value of car for UK based on YMMT & miles
     *
     * @remarks
     * Predict fare value of car for UK based on YMMT & miles
     */
    fareValue(req: operations.FareValueRequest, config?: AxiosRequestConfig): Promise<operations.FareValueResponse>;
    /**
     * Price, Miles and Days on Market stats
     *
     * @remarks
     * National, state and city level stats for price, miles and dom
     */
    getDailyStats(req: operations.GetDailyStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetDailyStatsResponse>;
    /**
     * Market Days Supply
     *
     * @remarks
     * Get the basic information on specifications for a car identified by a valid VIN
     */
    getMDS(req: operations.GetMDSRequest, config?: AxiosRequestConfig): Promise<operations.GetMDSResponse>;
    /**
     * Get make model wise top 50 popular cars on national, state, city level
     *
     * @remarks
     * Get make model wise top 50 popular cars on national, state, city level
     */
    getPopularCars(req: operations.GetPopularCarsRequest, config?: AxiosRequestConfig): Promise<operations.GetPopularCarsResponse>;
    /**
     * Get sales count by make, model, year, trim or taxonomy vin
     *
     * @remarks
     * Get a sales count for city, state or national level by make, model, year, trim or taxonomy vin
     */
    getSalesCount(req: operations.GetSalesCountRequest, config?: AxiosRequestConfig): Promise<operations.GetSalesCountResponse>;
    /**
     * Predict car price based on it's specifications
     *
     * @remarks
     * Predict car price based on it's specifications
     */
    predictCarPrice(req: operations.PredictCarPriceRequest, config?: AxiosRequestConfig): Promise<operations.PredictCarPriceResponse>;
    /**
     * Predict car price for UK based on it's specifications
     *
     * @remarks
     * Predict car price for UK based on it's specifications
     */
    predictUkCarPrice(req: operations.PredictUkCarPriceRequest, config?: AxiosRequestConfig): Promise<operations.PredictUkCarPriceResponse>;
}
