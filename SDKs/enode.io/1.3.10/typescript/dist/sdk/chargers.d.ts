import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Chargers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Control Charging
     *
     * @remarks
     * Instruct the charger to start or stop charging
     */
    controlChargerCharging(req: operations.ControlChargerChargingRequest, security: operations.ControlChargerChargingSecurity, config?: AxiosRequestConfig): Promise<operations.ControlChargerChargingResponse>;
    /**
     * Get Charger
     */
    getCharger(req: operations.GetChargerRequest, security: operations.GetChargerSecurity, config?: AxiosRequestConfig): Promise<operations.GetChargerResponse>;
    /**
     * List Chargers
     */
    getChargers(req: operations.GetChargersRequest, security: operations.GetChargersSecurity, config?: AxiosRequestConfig): Promise<operations.GetChargersResponse>;
}
