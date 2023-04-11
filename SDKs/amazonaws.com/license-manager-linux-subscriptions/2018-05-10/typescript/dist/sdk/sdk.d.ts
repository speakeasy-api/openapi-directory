import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://license-manager-linux-subscriptions.{region}.amazonaws.com", "https://license-manager-linux-subscriptions.{region}.amazonaws.com", "http://license-manager-linux-subscriptions.{region}.amazonaws.com.cn", "https://license-manager-linux-subscriptions.{region}.amazonaws.com.cn"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * With License Manager, you can discover and track your commercial Linux subscriptions on running Amazon EC2 instances.
 *
 * @see {@link https://docs.aws.amazon.com/license-manager-linux-subscriptions/} - Amazon Web Services documentation
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Lists the Linux subscriptions service settings.
     */
    getServiceSettings(req: operations.GetServiceSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetServiceSettingsResponse>;
    /**
     * Lists the running Amazon EC2 instances that were discovered with commercial Linux subscriptions.
     */
    listLinuxSubscriptionInstances(req: operations.ListLinuxSubscriptionInstancesRequest, config?: AxiosRequestConfig): Promise<operations.ListLinuxSubscriptionInstancesResponse>;
    /**
     * Lists the Linux subscriptions that have been discovered. If you have linked your organization, the returned results will include data aggregated across your accounts in Organizations.
     */
    listLinuxSubscriptions(req: operations.ListLinuxSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.ListLinuxSubscriptionsResponse>;
    /**
     * Updates the service settings for Linux subscriptions.
     */
    updateServiceSettings(req: operations.UpdateServiceSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateServiceSettingsResponse>;
}
