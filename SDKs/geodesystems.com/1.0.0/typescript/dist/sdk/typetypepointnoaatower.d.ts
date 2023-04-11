import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'NOAA Tower Network' entry type
 */
export declare class TypeTypePointNoaaTower {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'NOAA Tower Network' entry type
     *
     * @remarks
     * API to search for entries of type NOAA Tower Network
     */
    searchTypePointNoaaTower(req: operations.SearchTypePointNoaaTowerRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointNoaaTowerResponse>;
}
