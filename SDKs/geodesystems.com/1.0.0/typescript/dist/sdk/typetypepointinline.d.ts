import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Inline Point File' entry type
 */
export declare class TypeTypePointInline {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Inline Point File' entry type
     *
     * @remarks
     * API to search for entries of type Inline Point File
     */
    searchTypePointInline(req: operations.SearchTypePointInlineRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointInlineResponse>;
}
