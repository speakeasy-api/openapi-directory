import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Locations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteLocation - Delete a location
    **/
    deleteLocation(req: operations.DeleteLocationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLocationResponse>;
    /**
     * getLocation - Get a location's data
    **/
    getLocation(req: operations.GetLocationRequest, config?: AxiosRequestConfig): Promise<operations.GetLocationResponse>;
    /**
     * getLocations - Get Locations data
    **/
    getLocations(req: operations.GetLocationsRequest, config?: AxiosRequestConfig): Promise<operations.GetLocationsResponse>;
    /**
     * patchLocation - Update a location's data
    **/
    patchLocation(req: operations.PatchLocationRequest, config?: AxiosRequestConfig): Promise<operations.PatchLocationResponse>;
    /**
     * postLocations - Create a new location
    **/
    postLocations(req: operations.PostLocationsRequest, config?: AxiosRequestConfig): Promise<operations.PostLocationsResponse>;
}
