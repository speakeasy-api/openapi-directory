import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Lat-Lon Image' entry type
 */
export declare class TypeLatlonimage {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Lat-Lon Image' entry type
     *
     * @remarks
     * API to search for entries of type Lat-Lon Image
     */
    searchLatlonimage(req: operations.SearchLatlonimageRequest, config?: AxiosRequestConfig): Promise<operations.SearchLatlonimageResponse>;
}
