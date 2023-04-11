import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'US Places' entry type
 */
export declare class TypeUsPlaces {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'US Places' entry type
     *
     * @remarks
     * API to search for entries of type US Places
     */
    searchUsPlaces(req: operations.SearchUsPlacesRequest, config?: AxiosRequestConfig): Promise<operations.SearchUsPlacesResponse>;
}
