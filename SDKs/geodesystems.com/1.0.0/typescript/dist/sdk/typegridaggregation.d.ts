import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Grid Aggregation' entry type
 */
export declare class TypeGridaggregation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Grid Aggregation' entry type
     *
     * @remarks
     * API to search for entries of type Grid Aggregation
     */
    searchGridaggregation(req: operations.SearchGridaggregationRequest, config?: AxiosRequestConfig): Promise<operations.SearchGridaggregationResponse>;
}
