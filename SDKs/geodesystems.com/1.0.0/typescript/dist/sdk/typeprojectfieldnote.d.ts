import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Field Note' entry type
 */
export declare class TypeProjectFieldnote {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Field Note' entry type
     *
     * @remarks
     * API to search for entries of type Field Note
     */
    searchProjectFieldnote(req: operations.SearchProjectFieldnoteRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectFieldnoteResponse>;
}
