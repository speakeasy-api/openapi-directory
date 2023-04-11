import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Access to status information of an existing metering change and allocation process.
 */
export declare class WiMWechselprozesseImMesswesenStromStatusAPI {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * WiM Proess Informtion
     *
     * @remarks
     * Access to status information of an existing metering change and allocation process.
     *
     */
    wimstatus(req: operations.WimstatusRequest, config?: AxiosRequestConfig): Promise<operations.WimstatusResponse>;
}
