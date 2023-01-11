import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class System {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getSystemInfo - Get system information
     *
     * This operation retrieves information about the running registry system, such as the version
     * of the software and when it was built.
    **/
    getSystemInfo(config?: AxiosRequestConfig): Promise<operations.GetSystemInfoResponse>;
}
