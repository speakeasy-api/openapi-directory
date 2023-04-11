import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'OWL Class' entry type
 */
export declare class TypeOwlClass {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'OWL Class' entry type
     *
     * @remarks
     * API to search for entries of type OWL Class
     */
    searchOwlClass(req: operations.SearchOwlClassRequest, config?: AxiosRequestConfig): Promise<operations.SearchOwlClassResponse>;
}
