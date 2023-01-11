import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SmartCharging {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deletechargingschedule - Delete a smart charging schedule
    **/
    deletechargingschedule(req: operations.DeletechargingscheduleRequest, config?: AxiosRequestConfig): Promise<operations.DeletechargingscheduleResponse>;
    /**
     * setchargingschedule - Set one of charging power or current of a specific chargestation connector
    **/
    setchargingschedule(req: operations.SetchargingscheduleRequest, config?: AxiosRequestConfig): Promise<operations.SetchargingscheduleResponse>;
}
