import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Data Hub' entry type
 */
export declare class TypeCommunityDatahub {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Data Hub' entry type
     *
     * @remarks
     * API to search for entries of type Data Hub
     */
    searchCommunityDatahub(req: operations.SearchCommunityDatahubRequest, config?: AxiosRequestConfig): Promise<operations.SearchCommunityDatahubResponse>;
}
