import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'HipChat Group' entry type
 */
export declare class TypeHipchatGroup {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'HipChat Group' entry type
     *
     * @remarks
     * API to search for entries of type HipChat Group
     */
    searchHipchatGroup(req: operations.SearchHipchatGroupRequest, config?: AxiosRequestConfig): Promise<operations.SearchHipchatGroupResponse>;
}
