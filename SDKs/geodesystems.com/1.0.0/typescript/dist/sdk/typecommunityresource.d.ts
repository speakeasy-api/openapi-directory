import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Facility' entry type
 */
export declare class TypeCommunityResource {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Facility' entry type
     *
     * @remarks
     * API to search for entries of type Facility
     */
    searchCommunityResource(req: operations.SearchCommunityResourceRequest, config?: AxiosRequestConfig): Promise<operations.SearchCommunityResourceResponse>;
}
