import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Weblog' entry type
 */
export declare class TypeWeblog {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Weblog' entry type
     *
     * @remarks
     * API to search for entries of type Weblog
     */
    searchWeblog(req: operations.SearchWeblogRequest, config?: AxiosRequestConfig): Promise<operations.SearchWeblogResponse>;
}
