import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about notifications
 */
export declare class Notifications {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete Notification
     *
     * @remarks
     * Delete Notification
     */
    deleteNotificationsId(req: operations.DeleteNotificationsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNotificationsIdResponse>;
    /**
     * List Notifications
     *
     * @remarks
     * List Notifications
     */
    getNotifications(req: operations.GetNotificationsRequest, config?: AxiosRequestConfig): Promise<operations.GetNotificationsResponse>;
    /**
     * Show Notification
     *
     * @remarks
     * Show Notification
     */
    getNotificationsId(req: operations.GetNotificationsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetNotificationsIdResponse>;
    /**
     * Update Notification
     *
     * @remarks
     * Update Notification
     */
    patchNotificationsId(req: operations.PatchNotificationsIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchNotificationsIdResponse>;
    /**
     * Create Notification
     *
     * @remarks
     * Create Notification
     */
    postNotifications(req: operations.PostNotificationsRequestBody, config?: AxiosRequestConfig): Promise<operations.PostNotificationsResponse>;
}
