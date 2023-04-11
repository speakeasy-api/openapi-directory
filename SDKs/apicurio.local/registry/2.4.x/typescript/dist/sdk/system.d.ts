import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * System level functionality, including versioning and status information.
 */
export declare class System {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get resource limits information
     *
     * @remarks
     * This operation retrieves the list of limitations on used resources, that are applied on the current instance of Registry.
     */
    getResourceLimits(config?: AxiosRequestConfig): Promise<operations.GetResourceLimitsResponse>;
    /**
     * Get system information
     *
     * @remarks
     * This operation retrieves information about the running registry system, such as the version
     * of the software and when it was built.
     */
    getSystemInfo(config?: AxiosRequestConfig): Promise<operations.GetSystemInfoResponse>;
}
