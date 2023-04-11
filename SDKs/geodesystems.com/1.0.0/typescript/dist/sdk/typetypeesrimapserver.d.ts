import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'ESRI Map Server' entry type
 */
export declare class TypeTypeEsriMapserver {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'ESRI Map Server' entry type
     *
     * @remarks
     * API to search for entries of type ESRI Map Server
     */
    searchTypeEsriMapserver(req: operations.SearchTypeEsriMapserverRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeEsriMapserverResponse>;
}
