import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CustomerAlerts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get store's alerts
     */
    getStoreAlerts(req: operations.GetStoreAlertsRequest, config?: AxiosRequestConfig): Promise<operations.GetStoreAlertsResponse>;
    /**
     * Save store alerts
     *
     * @remarks
     * You just have to send the alert you want to update, does not need all alerts. (PARTIAL UPDATE ACCEPTED)
     */
    saveStoreAlerts(req: operations.SaveStoreAlertsRequest, config?: AxiosRequestConfig): Promise<operations.SaveStoreAlertsResponse>;
}
