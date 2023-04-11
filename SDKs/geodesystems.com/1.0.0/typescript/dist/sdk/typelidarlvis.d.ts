import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'LVIS Lidar Data' entry type
 */
export declare class TypeLidarLvis {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'LVIS Lidar Data' entry type
     *
     * @remarks
     * API to search for entries of type LVIS Lidar Data
     */
    searchLidarLvis(req: operations.SearchLidarLvisRequest, config?: AxiosRequestConfig): Promise<operations.SearchLidarLvisResponse>;
}
