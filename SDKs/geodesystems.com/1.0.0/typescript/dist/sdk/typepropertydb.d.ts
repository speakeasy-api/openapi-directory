import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Property Database' entry type
 */
export declare class TypePropertydb {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Property Database' entry type
     *
     * @remarks
     * API to search for entries of type Property Database
     */
    searchPropertydb(req: operations.SearchPropertydbRequest, config?: AxiosRequestConfig): Promise<operations.SearchPropertydbResponse>;
}
