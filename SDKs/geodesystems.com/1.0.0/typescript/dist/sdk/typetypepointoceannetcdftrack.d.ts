import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'NetCDF Track Data' entry type
 */
export declare class TypeTypePointOceanNetcdfTrack {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'NetCDF Track Data' entry type
     *
     * @remarks
     * API to search for entries of type NetCDF Track Data
     */
    searchTypePointOceanNetcdfTrack(req: operations.SearchTypePointOceanNetcdfTrackRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointOceanNetcdfTrackResponse>;
}
