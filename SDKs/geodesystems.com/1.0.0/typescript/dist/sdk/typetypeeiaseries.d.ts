import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'EIA Series' entry type
 */
export declare class TypeTypeEiaSeries {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'EIA Series' entry type
     *
     * @remarks
     * API to search for entries of type EIA Series
     */
    searchTypeEiaSeries(req: operations.SearchTypeEiaSeriesRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeEiaSeriesResponse>;
}
