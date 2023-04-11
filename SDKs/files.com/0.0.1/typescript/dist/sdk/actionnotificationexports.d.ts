import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about action_notification_exports
 */
export declare class ActionNotificationExports {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Show Action Notification Export
     *
     * @remarks
     * Show Action Notification Export
     */
    getActionNotificationExportsId(req: operations.GetActionNotificationExportsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetActionNotificationExportsIdResponse>;
    /**
     * Create Action Notification Export
     *
     * @remarks
     * Create Action Notification Export
     */
    postActionNotificationExports(req: operations.PostActionNotificationExportsRequestBody, config?: AxiosRequestConfig): Promise<operations.PostActionNotificationExportsResponse>;
}
