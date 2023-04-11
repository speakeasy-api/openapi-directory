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
     * Create Location
     *
     * @remarks
     * Create Location
     */
    locationsAdd(req: operations.LocationsAddRequest, security: operations.LocationsAddSecurity, config?: AxiosRequestConfig): Promise<operations.LocationsAddResponse>;
    /**
     * List Locations
     *
     * @remarks
     * List Locations
     */
    locationsAll(req: operations.LocationsAllRequest, security: operations.LocationsAllSecurity, config?: AxiosRequestConfig): Promise<operations.LocationsAllResponse>;
    /**
     * Delete Location
     *
     * @remarks
     * Delete Location
     */
    locationsDelete(req: operations.LocationsDeleteRequest, security: operations.LocationsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.LocationsDeleteResponse>;
    /**
     * Get Location
     *
     * @remarks
     * Get Location
     */
    locationsOne(req: operations.LocationsOneRequest, security: operations.LocationsOneSecurity, config?: AxiosRequestConfig): Promise<operations.LocationsOneResponse>;
    /**
     * Update Location
     *
     * @remarks
     * Update Location
     */
    locationsUpdate(req: operations.LocationsUpdateRequest, security: operations.LocationsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.LocationsUpdateResponse>;
}
