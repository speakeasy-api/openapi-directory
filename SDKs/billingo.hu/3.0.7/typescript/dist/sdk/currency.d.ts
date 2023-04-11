import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Currency {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get currencies exchange rate.
     *
     * @remarks
     * Return with the exchange value of given currencies.
     */
    getConversionRate(req: operations.GetConversionRateRequest, config?: AxiosRequestConfig): Promise<operations.GetConversionRateResponse>;
}
