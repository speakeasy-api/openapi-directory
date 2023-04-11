import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Vocabulary Term' entry type
 */
export declare class TypeProjectTerm {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Vocabulary Term' entry type
     *
     * @remarks
     * API to search for entries of type Vocabulary Term
     */
    searchProjectTerm(req: operations.SearchProjectTermRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectTermResponse>;
}
