import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Drivers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteDriver - Delete a driver
    **/
    deleteDriver(req: operations.DeleteDriverRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDriverResponse>;
    /**
     * getDriver - Get a driver's data
    **/
    getDriver(req: operations.GetDriverRequest, config?: AxiosRequestConfig): Promise<operations.GetDriverResponse>;
    /**
     * getDrivers - List all drivers
    **/
    getDrivers(req: operations.GetDriversRequest, config?: AxiosRequestConfig): Promise<operations.GetDriversResponse>;
    /**
     * patchDriver - Update a driver's data
    **/
    patchDriver(req: operations.PatchDriverRequest, config?: AxiosRequestConfig): Promise<operations.PatchDriverResponse>;
    /**
     * postDrivers - Create a new driver
    **/
    postDrivers(req: operations.PostDriversRequest, config?: AxiosRequestConfig): Promise<operations.PostDriversResponse>;
}
