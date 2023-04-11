import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about sites
 */
export declare class Site {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Show site settings
     *
     * @remarks
     * Show site settings
     */
    getSite(config?: AxiosRequestConfig): Promise<operations.GetSiteResponse>;
    /**
     * List Api Keys
     *
     * @remarks
     * List Api Keys
     */
    getSiteApiKeys(req: operations.GetSiteApiKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetSiteApiKeysResponse>;
    /**
     * Show site DNS configuration.
     *
     * @remarks
     * Show site DNS configuration.
     */
    getSiteDnsRecords(req: operations.GetSiteDnsRecordsRequest, config?: AxiosRequestConfig): Promise<operations.GetSiteDnsRecordsResponse>;
    /**
     * List IP Addresses associated with the current site
     *
     * @remarks
     * List IP Addresses associated with the current site
     */
    getSiteIpAddresses(req: operations.GetSiteIpAddressesRequest, config?: AxiosRequestConfig): Promise<operations.GetSiteIpAddressesResponse>;
    /**
     * Get the most recent usage snapshot (usage data for billing purposes) for a Site.
     *
     * @remarks
     * Get the most recent usage snapshot (usage data for billing purposes) for a Site.
     */
    getSiteUsage(config?: AxiosRequestConfig): Promise<operations.GetSiteUsageResponse>;
    /**
     * Update site settings.
     *
     * @remarks
     * Update site settings.
     */
    patchSite(req: operations.PatchSiteRequestBody, config?: AxiosRequestConfig): Promise<operations.PatchSiteResponse>;
    /**
     * Create Api Key
     *
     * @remarks
     * Create Api Key
     */
    postSiteApiKeys(req: operations.PostSiteApiKeysRequestBody, config?: AxiosRequestConfig): Promise<operations.PostSiteApiKeysResponse>;
    /**
     * Test webhook.
     *
     * @remarks
     * Test webhook.
     */
    postSiteTestWebhook(req: operations.PostSiteTestWebhookRequestBody, config?: AxiosRequestConfig): Promise<operations.PostSiteTestWebhookResponse>;
}
