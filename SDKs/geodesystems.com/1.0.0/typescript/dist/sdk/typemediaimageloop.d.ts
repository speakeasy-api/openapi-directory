import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Image Loop' entry type
 */
export declare class TypeMediaImageloop {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Image Loop' entry type
     *
     * @remarks
     * API to search for entries of type Image Loop
     */
    searchMediaImageloop(req: operations.SearchMediaImageloopRequest, config?: AxiosRequestConfig): Promise<operations.SearchMediaImageloopResponse>;
}
