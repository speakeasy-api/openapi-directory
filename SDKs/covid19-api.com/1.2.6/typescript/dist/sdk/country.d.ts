import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Country {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDailyReportAllCountries - getDailyReportAllCountries
     *
     * Get daily report for all countries. Date is mandatory parametar. Date format is by ISO 8601 standard, but you can provide different format with date-format parameter.
    **/
    getDailyReportAllCountries(req: operations.GetDailyReportAllCountriesRequest, config?: AxiosRequestConfig): Promise<operations.GetDailyReportAllCountriesResponse>;
    /**
     * getDailyReportByCountryCode - getDailyReportByCountryCode
     *
     * Get daily report for specific country. Country code and date are mandatory in parametars. Country code is in ISO 3166-1 standard. It can be 2 chars (Alpha-2) or 3 chars (Alpha-3) type. Date format is by ISO 8601 standard, but you can provide different format with date-format parameter
    **/
    getDailyReportByCountryCode(req: operations.GetDailyReportByCountryCodeRequest, config?: AxiosRequestConfig): Promise<operations.GetDailyReportByCountryCodeResponse>;
    /**
     * getDailyReportByCountryName - getDailyReportByCountryName
     *
     * Get daily report for specific country. Country name and date are mandatory in parametars. Date format is by ISO 8601 standard, but you can provide different format with date-format parameter
    **/
    getDailyReportByCountryName(req: operations.GetDailyReportByCountryNameRequest, config?: AxiosRequestConfig): Promise<operations.GetDailyReportByCountryNameResponse>;
    /**
     * getLatestAllCountries - getLatestAllCountries
     *
     * Get latest data from all countries.
    **/
    getLatestAllCountries(req: operations.GetLatestAllCountriesRequest, config?: AxiosRequestConfig): Promise<operations.GetLatestAllCountriesResponse>;
    /**
     * getLatestCountryDataByCode - getLatestCountryDataByCode
     *
     * Get latest data for specific country. Country code and format are in parametars. Country code is in ISO 3166-1 standard. It can be 2 chars (Alpha-2) or 3 chars (Alpha-3) type.
    **/
    getLatestCountryDataByCode(req: operations.GetLatestCountryDataByCodeRequest, config?: AxiosRequestConfig): Promise<operations.GetLatestCountryDataByCodeResponse>;
    /**
     * getLatestCountryDataByName - getLatestCountryDataByName
     *
     * Get latest data for specific country. Country name and format are in parametars.
    **/
    getLatestCountryDataByName(req: operations.GetLatestCountryDataByNameRequest, config?: AxiosRequestConfig): Promise<operations.GetLatestCountryDataByNameResponse>;
}
