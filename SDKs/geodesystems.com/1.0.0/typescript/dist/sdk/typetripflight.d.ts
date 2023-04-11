import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search API for 'Flight Leg' entry type
 */
export declare class TypeTripFlight {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search API for 'Flight Leg' entry type
     *
     * @remarks
     * API to search for entries of type Flight Leg
     */
    searchTripFlight(req: operations.SearchTripFlightRequest, config?: AxiosRequestConfig): Promise<operations.SearchTripFlightResponse>;
}
