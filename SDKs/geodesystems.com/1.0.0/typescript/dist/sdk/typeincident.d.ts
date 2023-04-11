import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Incident' entry type
 */
export declare class TypeIncident {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Incident' entry type
     *
     * @remarks
     * API to search for entries of type Incident
     */
    searchIncident(req: operations.SearchIncidentRequest, config?: AxiosRequestConfig): Promise<operations.SearchIncidentResponse>;
}
