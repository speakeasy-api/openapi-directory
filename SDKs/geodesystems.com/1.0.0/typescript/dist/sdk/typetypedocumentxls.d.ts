import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Excel File' entry type
 */
export declare class TypeTypeDocumentXls {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Excel File' entry type
     *
     * @remarks
     * API to search for entries of type Excel File
     */
    searchTypeDocumentXls(req: operations.SearchTypeDocumentXlsRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeDocumentXlsResponse>;
}
