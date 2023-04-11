import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'AMRC Freewave  Data' entry type
 */
export declare class TypeTypePointAmrcFreewave {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'AMRC Freewave  Data' entry type
     *
     * @remarks
     * API to search for entries of type AMRC Freewave  Data
     */
    searchTypePointAmrcFreewave(req: operations.SearchTypePointAmrcFreewaveRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointAmrcFreewaveResponse>;
}
