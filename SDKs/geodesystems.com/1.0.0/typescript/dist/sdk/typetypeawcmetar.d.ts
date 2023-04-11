import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'AWC Weather Observations' entry type
 */
export declare class TypeTypeAwcMetar {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'AWC Weather Observations' entry type
     *
     * @remarks
     * API to search for entries of type AWC Weather Observations
     */
    searchTypeAwcMetar(req: operations.SearchTypeAwcMetarRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeAwcMetarResponse>;
}
