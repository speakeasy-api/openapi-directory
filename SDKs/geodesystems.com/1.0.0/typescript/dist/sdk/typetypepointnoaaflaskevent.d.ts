import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'NOAA Flask Event Measurements' entry type
 */
export declare class TypeTypePointNoaaFlaskEvent {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'NOAA Flask Event Measurements' entry type
     *
     * @remarks
     * API to search for entries of type NOAA Flask Event Measurements
     */
    searchTypePointNoaaFlaskEvent(req: operations.SearchTypePointNoaaFlaskEventRequest, config?: AxiosRequestConfig): Promise<operations.SearchTypePointNoaaFlaskEventResponse>;
}
