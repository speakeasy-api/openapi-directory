import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * System overview
 */
export declare class V1System {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns the health information for the official business registers based on usage.
     *
     * @remarks
     * Returns the health information for the official business registers based on usage.
     */
    healthCheck(config?: AxiosRequestConfig): Promise<operations.HealthCheckResponse>;
    /**
     * Returns a list of countries
     *
     * @remarks
     * Retrieve the list of all currently enabled countries
     */
    systemCountries(config?: AxiosRequestConfig): Promise<operations.SystemCountriesResponse>;
    /**
     * Returns a list of products with prices
     *
     * @remarks
     * Retrieve pricing rules for your subscription plan
     */
    systemPricelist(config?: AxiosRequestConfig): Promise<operations.SystemPricelistResponse>;
}
