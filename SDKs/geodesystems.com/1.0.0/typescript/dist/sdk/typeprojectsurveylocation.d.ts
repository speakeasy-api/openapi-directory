import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Survey Location' entry type
 */
export declare class TypeProjectSurveylocation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Survey Location' entry type
     *
     * @remarks
     * API to search for entries of type Survey Location
     */
    searchProjectSurveylocation(req: operations.SearchProjectSurveylocationRequest, config?: AxiosRequestConfig): Promise<operations.SearchProjectSurveylocationResponse>;
}
