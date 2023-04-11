import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'NOAA Extremes Data' entry type
 */
export declare class TypeTypeExtremes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'NOAA Extremes Data' entry type
     *
     * @remarks
     * API to search for entries of type NOAA Extremes Data
     */
    searchTypeExtremes(req: operations.SearchTypeExtremesRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeExtremesResponse>;
}
