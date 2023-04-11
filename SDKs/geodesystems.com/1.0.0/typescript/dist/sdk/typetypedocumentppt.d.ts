import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Powerpoint File' entry type
 */
export declare class TypeTypeDocumentPpt {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Powerpoint File' entry type
     *
     * @remarks
     * API to search for entries of type Powerpoint File
     */
    searchTypeDocumentPpt(req: operations.SearchTypeDocumentPptRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeDocumentPptResponse>;
}
