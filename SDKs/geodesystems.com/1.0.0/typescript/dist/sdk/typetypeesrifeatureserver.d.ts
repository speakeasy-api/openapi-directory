import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'ESRI Feature Server' entry type
 */
export declare class TypeTypeEsriFeatureserver {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'ESRI Feature Server' entry type
     *
     * @remarks
     * API to search for entries of type ESRI Feature Server
     */
    searchTypeEsriFeatureserver(req: operations.SearchTypeEsriFeatureserverRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeEsriFeatureserverResponse>;
}
