import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Helper services and endpoints for smarthome and home automation systems.
 */
export declare class SmartHome {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get best hour (with most regional green energy) in a given timeframe.
     *
     * @remarks
     * Simple Wrapper around the GreenPowerIndex for easy integration into almost any SmartHome system that allows access to a JSON/REST Service This endpoint is designed to indicate if a device should be turned on or off. (Switch state).
     *
     */
    gsiBesthour(req: operations.GsiBesthourRequest, config?: AxiosRequestConfig): Promise<operations.GsiBesthourResponse>;
}
