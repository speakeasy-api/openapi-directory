import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The Locale service allows you to customize your app based on your users' location.
 */
export declare class Locale {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get User Locale
     *
     * @remarks
     * Get the current user location based on IP. Returns an object with user country code, country name, continent name, continent code, ip address and suggested currency. You can use the locale header to get the data in a supported language.
     *
     * ([IP Geolocation by DB-IP](https://db-ip.com))
     */
    localeGet(config?: AxiosRequestConfig): Promise<operations.LocaleGetResponse>;
    /**
     * List Continents
     *
     * @remarks
     * List of all continents. You can use the locale header to get the data in a supported language.
     */
    localeGetContinents(config?: AxiosRequestConfig): Promise<operations.LocaleGetContinentsResponse>;
    /**
     * List Countries
     *
     * @remarks
     * List of all countries. You can use the locale header to get the data in a supported language.
     */
    localeGetCountries(config?: AxiosRequestConfig): Promise<operations.LocaleGetCountriesResponse>;
    /**
     * List EU Countries
     *
     * @remarks
     * List of all countries that are currently members of the EU. You can use the locale header to get the data in a supported language.
     */
    localeGetCountriesEU(config?: AxiosRequestConfig): Promise<operations.LocaleGetCountriesEUResponse>;
    /**
     * List Countries Phone Codes
     *
     * @remarks
     * List of all countries phone codes. You can use the locale header to get the data in a supported language.
     */
    localeGetCountriesPhones(config?: AxiosRequestConfig): Promise<operations.LocaleGetCountriesPhonesResponse>;
    /**
     * List Currencies
     *
     * @remarks
     * List of all currencies, including currency symbol, name, plural, and decimal digits for all major and minor currencies. You can use the locale header to get the data in a supported language.
     */
    localeGetCurrencies(config?: AxiosRequestConfig): Promise<operations.LocaleGetCurrenciesResponse>;
    /**
     * List Languages
     *
     * @remarks
     * List of all languages classified by ISO 639-1 including 2-letter code, name in English, and name in the respective language.
     */
    localeGetLanguages(config?: AxiosRequestConfig): Promise<operations.LocaleGetLanguagesResponse>;
}
