import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'NOAA-ESRL-PSD Monthly Climate Index' entry type
 */
export declare class TypeTypePsdMonthlyClimateIndex {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'NOAA-ESRL-PSD Monthly Climate Index' entry type
     *
     * @remarks
     * API to search for entries of type NOAA-ESRL-PSD Monthly Climate Index
     */
    searchTypePsdMonthlyClimateIndex(req: operations.SearchTypePsdMonthlyClimateIndexRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePsdMonthlyClimateIndexResponse>;
}
