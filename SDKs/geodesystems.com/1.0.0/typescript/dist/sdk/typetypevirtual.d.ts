import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Virtual Group' entry type
 */
export declare class TypeTypeVirtual {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Virtual Group' entry type
     *
     * @remarks
     * API to search for entries of type Virtual Group
     */
    searchTypeVirtual(req: operations.SearchTypeVirtualRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeVirtualResponse>;
}
