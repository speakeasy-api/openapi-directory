import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Transit Stop Collection' entry type
 */
export declare class TypeTypeGtfsStops {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Transit Stop Collection' entry type
     *
     * @remarks
     * API to search for entries of type Transit Stop Collection
     */
    searchTypeGtfsStops(req: operations.SearchTypeGtfsStopsRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeGtfsStopsResponse>;
}
