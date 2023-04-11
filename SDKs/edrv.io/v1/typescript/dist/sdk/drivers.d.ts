import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Drivers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a driver
     */
    deleteDriver(req: operations.DeleteDriverRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDriverResponse>;
    /**
     * Get a driver's data
     */
    getDriver(req: operations.GetDriverRequest, config?: AxiosRequestConfig): Promise<operations.GetDriverResponse>;
    /**
     * List all drivers
     */
    getDrivers(req: operations.GetDriversRequest, config?: AxiosRequestConfig): Promise<operations.GetDriversResponse>;
    /**
     * Update a driver's data
     */
    patchDriver(req: operations.PatchDriverRequest, config?: AxiosRequestConfig): Promise<operations.PatchDriverResponse>;
    /**
     * Create a new driver
     */
    postDrivers(req: operations.PostDriversRequestBody, config?: AxiosRequestConfig): Promise<operations.PostDriversResponse>;
}
