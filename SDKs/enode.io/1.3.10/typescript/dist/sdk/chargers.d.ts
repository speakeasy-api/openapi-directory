import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Chargers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * controlChargerCharging - Control Charging
     *
     * Instruct the charger to start or stop charging
    **/
    controlChargerCharging(req: operations.ControlChargerChargingRequest, config?: AxiosRequestConfig): Promise<operations.ControlChargerChargingResponse>;
    /**
     * getCharger - Get Charger
    **/
    getCharger(req: operations.GetChargerRequest, config?: AxiosRequestConfig): Promise<operations.GetChargerResponse>;
    /**
     * getChargers - List Chargers
    **/
    getChargers(req: operations.GetChargersRequest, config?: AxiosRequestConfig): Promise<operations.GetChargersResponse>;
}
