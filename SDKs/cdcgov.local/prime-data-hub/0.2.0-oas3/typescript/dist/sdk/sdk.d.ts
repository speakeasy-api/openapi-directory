import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://cdcgov.local"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
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
 * A router of public health data from multiple senders and receivers
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
     * Delete an organization (and the associated receivers and senders)
     */
    deleteSettingsOrganizationsOrganizationName(req: operations.DeleteSettingsOrganizationsOrganizationNameRequest, security: operations.DeleteSettingsOrganizationsOrganizationNameSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteSettingsOrganizationsOrganizationNameResponse>;
    /**
     * Delete a receiver
     */
    deleteSettingsOrganizationsOrganizationNameReceiversReceiverName(req: operations.DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest, security: operations.DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse>;
    /**
     * Delete a sender
     */
    deleteSettingsOrganizationsOrganizationNameSendersSenderName(req: operations.DeleteSettingsOrganizationsOrganizationNameSendersSenderNameRequest, security: operations.DeleteSettingsOrganizationsOrganizationNameSendersSenderNameSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteSettingsOrganizationsOrganizationNameSendersSenderNameResponse>;
    /**
     * The settings for all organizations of the system. Must have admin access.
     */
    getSettingsOrganizations(config?: AxiosRequestConfig): Promise<operations.GetSettingsOrganizationsResponse>;
    /**
     * A single organization settings
     */
    getSettingsOrganizationsOrganizationName(req: operations.GetSettingsOrganizationsOrganizationNameRequest, security: operations.GetSettingsOrganizationsOrganizationNameSecurity, config?: AxiosRequestConfig): Promise<operations.GetSettingsOrganizationsOrganizationNameResponse>;
    /**
     * A list of receivers and their current settings
     */
    getSettingsOrganizationsOrganizationNameReceivers(req: operations.GetSettingsOrganizationsOrganizationNameReceiversRequest, security: operations.GetSettingsOrganizationsOrganizationNameReceiversSecurity, config?: AxiosRequestConfig): Promise<operations.GetSettingsOrganizationsOrganizationNameReceiversResponse>;
    /**
     * The settings of a single of receiver
     */
    getSettingsOrganizationsOrganizationNameReceiversReceiverName(req: operations.GetSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest, security: operations.GetSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity, config?: AxiosRequestConfig): Promise<operations.GetSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse>;
    /**
     * A list of senders
     */
    getSettingsOrganizationsOrganizationNameSenders(req: operations.GetSettingsOrganizationsOrganizationNameSendersRequest, security: operations.GetSettingsOrganizationsOrganizationNameSendersSecurity, config?: AxiosRequestConfig): Promise<operations.GetSettingsOrganizationsOrganizationNameSendersResponse>;
    /**
     * The settings of a single of sender
     */
    getSettingsOrganizationsOrganizationNameSendersSenderName(req: operations.GetSettingsOrganizationsOrganizationNameSendersSenderNameRequest, security: operations.GetSettingsOrganizationsOrganizationNameSendersSenderNameSecurity, config?: AxiosRequestConfig): Promise<operations.GetSettingsOrganizationsOrganizationNameSendersSenderNameResponse>;
    /**
     * Retrived the last modified for all settings of the system. Must have admin access.
     */
    headSettingsOrganizations(config?: AxiosRequestConfig): Promise<operations.HeadSettingsOrganizationsResponse>;
    /**
     * Post a report to the data hub
     */
    postReports(req: operations.PostReportsRequest, security: operations.PostReportsSecurity, config?: AxiosRequestConfig): Promise<operations.PostReportsResponse>;
    /**
     * Create or update the direct settings associated with an organization
     */
    putSettingsOrganizationsOrganizationName(req: operations.PutSettingsOrganizationsOrganizationNameRequest, security: operations.PutSettingsOrganizationsOrganizationNameSecurity, config?: AxiosRequestConfig): Promise<operations.PutSettingsOrganizationsOrganizationNameResponse>;
    /**
     * Update a single reciever
     */
    putSettingsOrganizationsOrganizationNameReceiversReceiverName(req: operations.PutSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest, security: operations.PutSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity, config?: AxiosRequestConfig): Promise<operations.PutSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse>;
    /**
     * Update a single sender
     */
    putSettingsOrganizationsOrganizationNameSendersSenderName(req: operations.PutSettingsOrganizationsOrganizationNameSendersSenderNameRequest, security: operations.PutSettingsOrganizationsOrganizationNameSendersSenderNameSecurity, config?: AxiosRequestConfig): Promise<operations.PutSettingsOrganizationsOrganizationNameSendersSenderNameResponse>;
}
