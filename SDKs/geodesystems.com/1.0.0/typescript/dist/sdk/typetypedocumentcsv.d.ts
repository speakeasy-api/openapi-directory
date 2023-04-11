import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'CSV File' entry type
 */
export declare class TypeTypeDocumentCsv {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'CSV File' entry type
     *
     * @remarks
     * API to search for entries of type CSV File
     */
    searchTypeDocumentCsv(req: operations.SearchTypeDocumentCsvRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeDocumentCsvResponse>;
}
