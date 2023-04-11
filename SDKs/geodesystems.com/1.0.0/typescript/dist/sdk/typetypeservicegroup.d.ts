import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Service Group' entry type
 */
export declare class TypeTypeServiceGroup {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Service Group' entry type
     *
     * @remarks
     * API to search for entries of type Service Group
     */
    searchTypeServiceGroup(req: operations.SearchTypeServiceGroupRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeServiceGroupResponse>;
}
