import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ServiceHealth {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Check Service Readiness
     *
     * @remarks
     * Gets the combined health status of the service and all functionalities and dependencies.
     */
    getHealthReady(config?: AxiosRequestConfig): Promise<operations.GetHealthReadyResponse>;
    /**
     * Check Available Vendors
     *
     * @remarks
     * List the supported vendors and their current status.
     */
    getHealthVendors(config?: AxiosRequestConfig): Promise<operations.GetHealthVendorsResponse>;
}
