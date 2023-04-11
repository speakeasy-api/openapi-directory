import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Database Table' entry type
 */
export declare class TypeTypeDbTable {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Database Table' entry type
     *
     * @remarks
     * API to search for entries of type Database Table
     */
    searchTypeDbTable(req: operations.SearchTypeDbTableRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeDbTableResponse>;
}
