import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Site Visit' entry type
 */
export declare class TypeProjectVisit {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Site Visit' entry type
     *
     * @remarks
     * API to search for entries of type Site Visit
     */
    searchProjectVisit(req: operations.SearchProjectVisitRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectVisitResponse>;
}
