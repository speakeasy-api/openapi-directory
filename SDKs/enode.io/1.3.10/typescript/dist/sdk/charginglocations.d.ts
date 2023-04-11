import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Charging Locations are created by a user to denote locations where they pay for the power used to charge their vehicle. Smart Charging is active at these locations only.
 */
export declare class ChargingLocations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete Charging Location
     *
     * @remarks
     * Delete a Charging Location
     */
    deleteCharginglocationsCharginglocationid(req: operations.DeleteCharginglocationsCharginglocationidRequest, security: operations.DeleteCharginglocationsCharginglocationidSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteCharginglocationsCharginglocationidResponse>;
    /**
     * List Charging Locations
     *
     * @remarks
     * Returns a list of Charging Locations registered to the User
     */
    getCharginglocations(config?: AxiosRequestConfig): Promise<operations.GetCharginglocationsResponse>;
    /**
     * Get Charging Location
     */
    getCharginglocationsCharginglocationid(req: operations.GetCharginglocationsCharginglocationidRequest, security: operations.GetCharginglocationsCharginglocationidSecurity, config?: AxiosRequestConfig): Promise<operations.GetCharginglocationsCharginglocationidResponse>;
    /**
     * Create Charging Location
     */
    postCharginglocations(req: operations.PostCharginglocationsRequestBodyInput, security: operations.PostCharginglocationsSecurity, config?: AxiosRequestConfig): Promise<operations.PostCharginglocationsResponse>;
    /**
     * Update Charging Location
     *
     * @remarks
     * Updates a charging location with new configuration
     */
    putCharginglocationsCharginglocationid(req: operations.PutCharginglocationsCharginglocationidRequest, security: operations.PutCharginglocationsCharginglocationidSecurity, config?: AxiosRequestConfig): Promise<operations.PutCharginglocationsCharginglocationidResponse>;
}
