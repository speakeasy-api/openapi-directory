import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare const ServerList: readonly ["http://cdcgov.local"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
    /**
     * deleteSettingsOrganizationsOrganizationName - Delete an organization (and the associated receivers and senders)
    **/
    deleteSettingsOrganizationsOrganizationName(req: operations.DeleteSettingsOrganizationsOrganizationNameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSettingsOrganizationsOrganizationNameResponse>;
    /**
     * deleteSettingsOrganizationsOrganizationNameReceiversReceiverName - Delete a receiver
    **/
    deleteSettingsOrganizationsOrganizationNameReceiversReceiverName(req: operations.DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse>;
    /**
     * deleteSettingsOrganizationsOrganizationNameSendersSenderName - Delete a sender
    **/
    deleteSettingsOrganizationsOrganizationNameSendersSenderName(req: operations.DeleteSettingsOrganizationsOrganizationNameSendersSenderNameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSettingsOrganizationsOrganizationNameSendersSenderNameResponse>;
    /**
     * getSettingsOrganizations - The settings for all organizations of the system. Must have admin access.
    **/
    getSettingsOrganizations(req: operations.GetSettingsOrganizationsRequest, config?: AxiosRequestConfig): Promise<operations.GetSettingsOrganizationsResponse>;
    /**
     * getSettingsOrganizationsOrganizationName - A single organization settings
    **/
    getSettingsOrganizationsOrganizationName(req: operations.GetSettingsOrganizationsOrganizationNameRequest, config?: AxiosRequestConfig): Promise<operations.GetSettingsOrganizationsOrganizationNameResponse>;
    /**
     * getSettingsOrganizationsOrganizationNameReceivers - A list of receivers and their current settings
    **/
    getSettingsOrganizationsOrganizationNameReceivers(req: operations.GetSettingsOrganizationsOrganizationNameReceiversRequest, config?: AxiosRequestConfig): Promise<operations.GetSettingsOrganizationsOrganizationNameReceiversResponse>;
    /**
     * getSettingsOrganizationsOrganizationNameReceiversReceiverName - The settings of a single of receiver
    **/
    getSettingsOrganizationsOrganizationNameReceiversReceiverName(req: operations.GetSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest, config?: AxiosRequestConfig): Promise<operations.GetSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse>;
    /**
     * getSettingsOrganizationsOrganizationNameSenders - A list of senders
    **/
    getSettingsOrganizationsOrganizationNameSenders(req: operations.GetSettingsOrganizationsOrganizationNameSendersRequest, config?: AxiosRequestConfig): Promise<operations.GetSettingsOrganizationsOrganizationNameSendersResponse>;
    /**
     * getSettingsOrganizationsOrganizationNameSendersSenderName - The settings of a single of sender
    **/
    getSettingsOrganizationsOrganizationNameSendersSenderName(req: operations.GetSettingsOrganizationsOrganizationNameSendersSenderNameRequest, config?: AxiosRequestConfig): Promise<operations.GetSettingsOrganizationsOrganizationNameSendersSenderNameResponse>;
    /**
     * headSettingsOrganizations - Retrived the last modified for all settings of the system. Must have admin access.
    **/
    headSettingsOrganizations(req: operations.HeadSettingsOrganizationsRequest, config?: AxiosRequestConfig): Promise<operations.HeadSettingsOrganizationsResponse>;
    /**
     * postReports - Post a report to the data hub
    **/
    postReports(req: operations.PostReportsRequest, config?: AxiosRequestConfig): Promise<operations.PostReportsResponse>;
    /**
     * putSettingsOrganizationsOrganizationName - Create or update the direct settings associated with an organization
    **/
    putSettingsOrganizationsOrganizationName(req: operations.PutSettingsOrganizationsOrganizationNameRequest, config?: AxiosRequestConfig): Promise<operations.PutSettingsOrganizationsOrganizationNameResponse>;
    /**
     * putSettingsOrganizationsOrganizationNameReceiversReceiverName - Update a single reciever
    **/
    putSettingsOrganizationsOrganizationNameReceiversReceiverName(req: operations.PutSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest, config?: AxiosRequestConfig): Promise<operations.PutSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse>;
    /**
     * putSettingsOrganizationsOrganizationNameSendersSenderName - Update a single sender
    **/
    putSettingsOrganizationsOrganizationNameSendersSenderName(req: operations.PutSettingsOrganizationsOrganizationNameSendersSenderNameRequest, config?: AxiosRequestConfig): Promise<operations.PutSettingsOrganizationsOrganizationNameSendersSenderNameResponse>;
}
