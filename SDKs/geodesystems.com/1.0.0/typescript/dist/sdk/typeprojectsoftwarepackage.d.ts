import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Software Tool' entry type
 */
export declare class TypeProjectSoftwarepackage {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Software Tool' entry type
     *
     * @remarks
     * API to search for entries of type Software Tool
     */
    searchProjectSoftwarepackage(req: operations.SearchProjectSoftwarepackageRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectSoftwarepackageResponse>;
}
