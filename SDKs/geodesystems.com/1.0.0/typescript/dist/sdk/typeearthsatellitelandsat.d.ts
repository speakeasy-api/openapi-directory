import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Landsat Satellite Data' entry type
 */
export declare class TypeEarthSatelliteLandsat {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Landsat Satellite Data' entry type
     *
     * @remarks
     * API to search for entries of type Landsat Satellite Data
     */
    searchEarthSatelliteLandsat(req: operations.SearchEarthSatelliteLandsatRequest, config?: AxiosRequestConfig): Promise<operations.SearchEarthSatelliteLandsatResponse>;
}
