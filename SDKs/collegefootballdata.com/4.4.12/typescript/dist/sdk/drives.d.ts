import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Drive data
 */
export declare class Drives {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Drive data and results
     *
     * @remarks
     * Get game drives
     */
    getDrives(req: operations.GetDrivesRequest, config?: AxiosRequestConfig): Promise<operations.GetDrivesResponse>;
}
