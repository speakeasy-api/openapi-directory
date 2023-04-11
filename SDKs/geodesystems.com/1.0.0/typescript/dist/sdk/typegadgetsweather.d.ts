import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Weather' entry type
 */
export declare class TypeGadgetsWeather {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Weather' entry type
     *
     * @remarks
     * API to search for entries of type Weather
     */
    searchGadgetsWeather(req: operations.SearchGadgetsWeatherRequest, config?: AxiosRequestConfig): Promise<operations.SearchGadgetsWeatherResponse>;
}
