import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Locations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a location
     */
    deleteLocation(req: operations.DeleteLocationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLocationResponse>;
    /**
     * Get a location's data
     */
    getLocation(req: operations.GetLocationRequest, config?: AxiosRequestConfig): Promise<operations.GetLocationResponse>;
    /**
     * Get Locations data
     */
    getLocations(req: operations.GetLocationsRequest, config?: AxiosRequestConfig): Promise<operations.GetLocationsResponse>;
    /**
     * Update a location's data
     */
    patchLocation(req: operations.PatchLocationRequest, config?: AxiosRequestConfig): Promise<operations.PatchLocationResponse>;
    /**
     * Create a new location
     */
    postLocations(req: operations.PostLocationsRequestBody, config?: AxiosRequestConfig): Promise<operations.PostLocationsResponse>;
}
