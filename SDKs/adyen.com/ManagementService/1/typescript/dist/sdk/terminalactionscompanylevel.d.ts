import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TerminalActionsCompanyLevel {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a list of Android apps
     *
     * @remarks
     * Returns a list of the Android apps that are available for the company identified in the path.
     * These apps have been uploaded to Adyen and can be installed or uninstalled on Android payment terminals through [terminal actions](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api).
     *
     * To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Terminal actions read
     * * Management API—Terminal actions read and write
     */
    getCompaniesCompanyIdAndroidApps(req: operations.GetCompaniesCompanyIdAndroidAppsRequest, security: operations.GetCompaniesCompanyIdAndroidAppsSecurity, config?: AxiosRequestConfig): Promise<operations.GetCompaniesCompanyIdAndroidAppsResponse>;
    /**
     * Get a list of Android certificates
     *
     * @remarks
     * Returns a list of the Android certificates that are available for the company identified in the path.
     * Typically, these certificates enable running apps on Android payment terminals. The certifcates in the list have been uploaded to Adyen and can be installed or uninstalled on Android terminals through [terminal actions](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api).
     *
     * To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Terminal actions read
     * * Management API—Terminal actions read and write
     */
    getCompaniesCompanyIdAndroidCertificates(req: operations.GetCompaniesCompanyIdAndroidCertificatesRequest, security: operations.GetCompaniesCompanyIdAndroidCertificatesSecurity, config?: AxiosRequestConfig): Promise<operations.GetCompaniesCompanyIdAndroidCertificatesResponse>;
    /**
     * Get a list of terminal actions
     *
     * @remarks
     * Returns the [terminal actions](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api) that have been scheduled for the company identified in the path.The response doesn't include actions that are scheduled by Adyen.
     * To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Terminal actions read
     * * Management API—Terminal actions read and write
     */
    getCompaniesCompanyIdTerminalActions(req: operations.GetCompaniesCompanyIdTerminalActionsRequest, security: operations.GetCompaniesCompanyIdTerminalActionsSecurity, config?: AxiosRequestConfig): Promise<operations.GetCompaniesCompanyIdTerminalActionsResponse>;
    /**
     * Get terminal action
     *
     * @remarks
     * Returns the details of the [terminal action](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api) identified in the path.
     * To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Terminal actions read
     * * Management API—Terminal actions read and write
     */
    getCompaniesCompanyIdTerminalActionsActionId(req: operations.GetCompaniesCompanyIdTerminalActionsActionIdRequest, security: operations.GetCompaniesCompanyIdTerminalActionsActionIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetCompaniesCompanyIdTerminalActionsActionIdResponse>;
}
