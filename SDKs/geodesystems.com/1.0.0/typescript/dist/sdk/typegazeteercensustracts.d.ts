import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Census Tracts' entry type
 */
export declare class TypeGazeteerCensusTracts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Census Tracts' entry type
     *
     * @remarks
     * API to search for entries of type Census Tracts
     */
    searchGazeteerCensusTracts(req: operations.SearchGazeteerCensusTractsRequest, config?: AxiosRequestConfig): Promise<operations.SearchGazeteerCensusTractsResponse>;
}
