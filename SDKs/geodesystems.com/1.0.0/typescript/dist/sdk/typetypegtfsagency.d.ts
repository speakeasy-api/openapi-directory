import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Transit Agency' entry type
 */
export declare class TypeTypeGtfsAgency {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Transit Agency' entry type
     *
     * @remarks
     * API to search for entries of type Transit Agency
     */
    searchTypeGtfsAgency(req: operations.SearchTypeGtfsAgencyRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeGtfsAgencyResponse>;
}
