import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Help {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getListOfCountries - getListOfCountries
     *
     * Get name name, alpha-2, alpha-3 code, latitude and longitude for every country.
    **/
    getListOfCountries(req: operations.GetListOfCountriesRequest, config?: AxiosRequestConfig): Promise<operations.GetListOfCountriesResponse>;
}
