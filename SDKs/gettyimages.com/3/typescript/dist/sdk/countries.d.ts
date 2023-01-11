import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Countries {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getV3Countries - Gets countries codes and names.
     *
     * Returns a list of country objects that contains country name, two letter ISO abbreviation and three letter ISO abbreviation.
     *
     * You'll need an API key and access token to use this resource.
     *
    **/
    getV3Countries(req: operations.GetV3CountriesRequest, config?: AxiosRequestConfig): Promise<operations.GetV3CountriesResponse>;
}
