import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Trip Report' entry type
 */
export declare class TypeTripReport {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Trip Report' entry type
     *
     * @remarks
     * API to search for entries of type Trip Report
     */
    searchTripReport(req: operations.SearchTripReportRequest, config?: AxiosRequestConfig): Promise<operations.SearchTripReportResponse>;
}
