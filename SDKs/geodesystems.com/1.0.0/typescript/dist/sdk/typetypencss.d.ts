import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'NetCDF Point Subset' entry type
 */
export declare class TypeTypeNcss {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'NetCDF Point Subset' entry type
     *
     * @remarks
     * API to search for entries of type NetCDF Point Subset
     */
    searchTypeNcss(req: operations.SearchTypeNcssRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeNcssResponse>;
}
