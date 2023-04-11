import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Hazard Data' entry type
 */
export declare class TypeTypeHazarddata {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Hazard Data' entry type
     *
     * @remarks
     * API to search for entries of type Hazard Data
     */
    searchTypeHazarddata(req: operations.SearchTypeHazarddataRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeHazarddataResponse>;
}
