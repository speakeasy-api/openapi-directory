import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about bundle_notifications
 */
export declare class BundleNotifications {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete Bundle Notification
     *
     * @remarks
     * Delete Bundle Notification
     */
    deleteBundleNotificationsId(req: operations.DeleteBundleNotificationsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBundleNotificationsIdResponse>;
    /**
     * List Bundle Notifications
     *
     * @remarks
     * List Bundle Notifications
     */
    getBundleNotifications(req: operations.GetBundleNotificationsRequest, config?: AxiosRequestConfig): Promise<operations.GetBundleNotificationsResponse>;
    /**
     * Show Bundle Notification
     *
     * @remarks
     * Show Bundle Notification
     */
    getBundleNotificationsId(req: operations.GetBundleNotificationsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetBundleNotificationsIdResponse>;
    /**
     * Update Bundle Notification
     *
     * @remarks
     * Update Bundle Notification
     */
    patchBundleNotificationsId(req: operations.PatchBundleNotificationsIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchBundleNotificationsIdResponse>;
    /**
     * Create Bundle Notification
     *
     * @remarks
     * Create Bundle Notification
     */
    postBundleNotifications(req: operations.PostBundleNotificationsRequestBody, config?: AxiosRequestConfig): Promise<operations.PostBundleNotificationsResponse>;
}
