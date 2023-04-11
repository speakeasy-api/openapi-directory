import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'ESRI Geometry Server' entry type
 */
export declare class TypeTypeEsriGeometryserver {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'ESRI Geometry Server' entry type
     *
     * @remarks
     * API to search for entries of type ESRI Geometry Server
     */
    searchTypeEsriGeometryserver(req: operations.SearchTypeEsriGeometryserverRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypeEsriGeometryserverResponse>;
}
