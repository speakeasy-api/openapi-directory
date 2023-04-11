import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Text Point Data' entry type
 */
export declare class TypePointText {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Text Point Data' entry type
     *
     * @remarks
     * API to search for entries of type Text Point Data
     */
    searchPointText(req: operations.SearchPointTextRequest, config?: AxiosRequestConfig): Promise<operations.SearchPointTextResponse>;
}
