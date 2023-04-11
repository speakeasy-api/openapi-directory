import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Record Text File' entry type
 */
export declare class TypeTypePointText {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Record Text File' entry type
     *
     * @remarks
     * API to search for entries of type Record Text File
     */
    searchTypePointText(req: operations.SearchTypePointTextRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointTextResponse>;
}
