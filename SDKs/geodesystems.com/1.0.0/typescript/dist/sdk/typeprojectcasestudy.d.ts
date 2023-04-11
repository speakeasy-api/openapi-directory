import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Case Study' entry type
 */
export declare class TypeProjectCasestudy {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Case Study' entry type
     *
     * @remarks
     * API to search for entries of type Case Study
     */
    searchProjectCasestudy(req: operations.SearchProjectCasestudyRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectCasestudyResponse>;
}
