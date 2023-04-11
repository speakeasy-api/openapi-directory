import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Locations' entry type
 */
export declare class TypeLocations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Locations' entry type
     *
     * @remarks
     * API to search for entries of type Locations
     */
    searchLocations(req: operations.SearchLocationsRequest, config?: AxiosRequestConfig): Promise<operations.SearchLocationsResponse>;
}
