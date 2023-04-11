import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'NITF File' entry type
 */
export declare class TypeTypeNitf {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'NITF File' entry type
     *
     * @remarks
     * API to search for entries of type NITF File
     */
    searchTypeNitf(req: operations.SearchTypeNitfRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeNitfResponse>;
}
