import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SmartCharging {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a smart charging schedule
     */
    deletechargingschedule(req: operations.DeletechargingscheduleRequestBody, config?: AxiosRequestConfig): Promise<operations.DeletechargingscheduleResponse>;
    /**
     * Set one of charging power or current of a specific chargestation connector
     */
    setchargingschedule(req: operations.SetchargingscheduleRequestBody, config?: AxiosRequestConfig): Promise<operations.SetchargingscheduleResponse>;
}
