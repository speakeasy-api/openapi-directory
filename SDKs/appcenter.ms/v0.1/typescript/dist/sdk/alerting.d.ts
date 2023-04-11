import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Alerting {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get project issue related to a crash group
     */
    bugTrackerGetRepoIssueFromCrash(req: operations.BugTrackerGetRepoIssueFromCrashRequest, security: operations.BugTrackerGetRepoIssueFromCrashSecurity, config?: AxiosRequestConfig): Promise<operations.BugTrackerGetRepoIssueFromCrashResponse>;
    /**
     * Get bug tracker settings for a particular app
     */
    bugtrackerGetSettings(req: operations.BugtrackerGetSettingsRequest, security: operations.BugtrackerGetSettingsSecurity, config?: AxiosRequestConfig): Promise<operations.BugtrackerGetSettingsResponse>;
    /**
     * Get Email notification settings of user for a particular app
     */
    notificationsGetAppEmailSettings(req: operations.NotificationsGetAppEmailSettingsRequest, security: operations.NotificationsGetAppEmailSettingsSecurity, config?: AxiosRequestConfig): Promise<operations.NotificationsGetAppEmailSettingsResponse>;
    /**
     * Get Default email notification settings for the user
     */
    notificationsGetUserEmailSettings(config?: AxiosRequestConfig): Promise<operations.NotificationsGetUserEmailSettingsResponse>;
    /**
     * Get web hooks configured for a particular app
     */
    webhooksList(req: operations.WebhooksListRequest, security: operations.WebhooksListSecurity, config?: AxiosRequestConfig): Promise<operations.WebhooksListResponse>;
}
