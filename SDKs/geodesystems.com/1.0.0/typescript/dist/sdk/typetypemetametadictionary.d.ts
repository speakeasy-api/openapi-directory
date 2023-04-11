import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Metadata Dictionary' entry type
 */
export declare class TypeTypeMetametaDictionary {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Metadata Dictionary' entry type
     *
     * @remarks
     * API to search for entries of type Metadata Dictionary
     */
    searchTypeMetametaDictionary(req: operations.SearchTypeMetametaDictionaryRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeMetametaDictionaryResponse>;
}
