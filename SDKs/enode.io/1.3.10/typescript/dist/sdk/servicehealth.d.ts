import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ServiceHealth {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getHealthReady - Check Service Readiness
     *
     * Gets the combined health status of the service and all functionalities and dependencies.
    **/
    getHealthReady(config?: AxiosRequestConfig): Promise<operations.GetHealthReadyResponse>;
    /**
     * getHealthVendors - Check Available Vendors
     *
     * List the supported vendors and their current status.
    **/
    getHealthVendors(config?: AxiosRequestConfig): Promise<operations.GetHealthVendorsResponse>;
}
