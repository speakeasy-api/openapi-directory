import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Transit Stop' entry type
 */
export declare class TypeTypeGtfsStop {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Transit Stop' entry type
     *
     * @remarks
     * API to search for entries of type Transit Stop
     */
    searchTypeGtfsStop(req: operations.SearchTypeGtfsStopRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeGtfsStopResponse>;
}
