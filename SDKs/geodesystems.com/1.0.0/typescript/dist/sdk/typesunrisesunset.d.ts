import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Sunrise/Sunset Display' entry type
 */
export declare class TypeSunrisesunset {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Sunrise/Sunset Display' entry type
     *
     * @remarks
     * API to search for entries of type Sunrise/Sunset Display
     */
    searchSunrisesunset(req: operations.SearchSunrisesunsetRequest, config?: AxiosRequestConfig): Promise<operations.SearchSunrisesunsetResponse>;
}
