import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class General {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return all of the platform supported countries
     */
    generalApiCountries(req: operations.GeneralApiCountriesRequest, config?: AxiosRequestConfig): Promise<operations.GeneralApiCountriesResponse>;
    /**
     * Return all of the platform supported currencies
     */
    generalApiCurrencies(req: operations.GeneralApiCurrenciesRequest, config?: AxiosRequestConfig): Promise<operations.GeneralApiCurrenciesResponse>;
    /**
     * Return all of the platform supported Date Formats
     */
    generalApiDateFormats(req: operations.GeneralApiDateFormatsRequest, config?: AxiosRequestConfig): Promise<operations.GeneralApiDateFormatsResponse>;
    /**
     * Return all of the platform supported UI languages
     */
    generalApiUiLanguages(req: operations.GeneralApiUiLanguagesRequest, config?: AxiosRequestConfig): Promise<operations.GeneralApiUiLanguagesResponse>;
}
