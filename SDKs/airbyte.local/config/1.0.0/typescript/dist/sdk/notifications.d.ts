import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Notifications {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * tryNotificationConfig - Try sending a notifications
    **/
    tryNotificationConfig(req: operations.TryNotificationConfigRequest, config?: AxiosRequestConfig): Promise<operations.TryNotificationConfigResponse>;
}
