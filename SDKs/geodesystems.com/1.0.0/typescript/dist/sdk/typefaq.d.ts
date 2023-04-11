import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'FAQ' entry type
 */
export declare class TypeFaq {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'FAQ' entry type
     *
     * @remarks
     * API to search for entries of type FAQ
     */
    searchFaq(req: operations.SearchFaqRequest, config?: AxiosRequestConfig): Promise<operations.SearchFaqResponse>;
}
