import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ChargingLocations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteCharginglocationsCharginglocationid - Delete Charging Location
     *
     * Delete a Charging Location
    **/
    deleteCharginglocationsCharginglocationid(req: operations.DeleteCharginglocationsCharginglocationidRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCharginglocationsCharginglocationidResponse>;
    /**
     * getCharginglocations - List Charging Locations
     *
     * Returns a list of Charging Locations registered to the User
    **/
    getCharginglocations(req: operations.GetCharginglocationsRequest, config?: AxiosRequestConfig): Promise<operations.GetCharginglocationsResponse>;
    /**
     * getCharginglocationsCharginglocationid - Get Charging Location
    **/
    getCharginglocationsCharginglocationid(req: operations.GetCharginglocationsCharginglocationidRequest, config?: AxiosRequestConfig): Promise<operations.GetCharginglocationsCharginglocationidResponse>;
    /**
     * postCharginglocations - Create Charging Location
    **/
    postCharginglocations(req: operations.PostCharginglocationsRequest, config?: AxiosRequestConfig): Promise<operations.PostCharginglocationsResponse>;
    /**
     * putCharginglocationsCharginglocationid - Update Charging Location
     *
     * Updates a charging location with new configuration
    **/
    putCharginglocationsCharginglocationid(req: operations.PutCharginglocationsCharginglocationidRequest, config?: AxiosRequestConfig): Promise<operations.PutCharginglocationsCharginglocationidResponse>;
}
