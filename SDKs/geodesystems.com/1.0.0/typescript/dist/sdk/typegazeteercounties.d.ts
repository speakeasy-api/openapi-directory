import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Census Gazeteer Counties' entry type
 */
export declare class TypeGazeteerCounties {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Census Gazeteer Counties' entry type
     *
     * @remarks
     * API to search for entries of type Census Gazeteer Counties
     */
    searchGazeteerCounties(req: operations.SearchGazeteerCountiesRequest, config?: AxiosRequestConfig): Promise<operations.SearchGazeteerCountiesResponse>;
}
