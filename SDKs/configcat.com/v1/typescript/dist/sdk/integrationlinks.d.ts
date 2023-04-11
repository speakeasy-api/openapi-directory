import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class IntegrationLinks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add or update Integration link
     */
    addOrUpdateIntegrationLink(req: operations.AddOrUpdateIntegrationLinkRequest, config?: AxiosRequestConfig): Promise<operations.AddOrUpdateIntegrationLinkResponse>;
    /**
     * Delete Integration link
     */
    deleteIntegrationLink(req: operations.DeleteIntegrationLinkRequest, config?: AxiosRequestConfig): Promise<operations.DeleteIntegrationLinkResponse>;
    /**
     * Get Integration link
     */
    getIntegrationLinkDetails(req: operations.GetIntegrationLinkDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetIntegrationLinkDetailsResponse>;
    jiraAddOrUpdateIntegrationLink(req: operations.JiraAddOrUpdateIntegrationLinkRequest, config?: AxiosRequestConfig): Promise<operations.JiraAddOrUpdateIntegrationLinkResponse>;
    postV1JiraConnect(req: shared.ConnectRequest, config?: AxiosRequestConfig): Promise<operations.PostV1JiraConnectResponse>;
}
