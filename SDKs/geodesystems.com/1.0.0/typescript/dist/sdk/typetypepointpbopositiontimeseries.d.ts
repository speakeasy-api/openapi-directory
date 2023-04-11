import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'PBO Position Time Series' entry type
 */
export declare class TypeTypePointPboPositionTimeSeries {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'PBO Position Time Series' entry type
     *
     * @remarks
     * API to search for entries of type PBO Position Time Series
     */
    searchTypePointPboPositionTimeSeries(req: operations.SearchTypePointPboPositionTimeSeriesRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointPboPositionTimeSeriesResponse>;
}
