import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Notifications {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get the notifications that belong to the current user
     */
    getNotifications(config?: AxiosRequestConfig): Promise<operations.GetNotificationsResponse>;
    /**
     * Mark notifications as read
     */
    markNotificationsAsRead(req: operations.MarkNotificationsAsReadRequestBody, config?: AxiosRequestConfig): Promise<operations.MarkNotificationsAsReadResponse>;
}
