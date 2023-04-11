import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Webhooks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a webhook
     *
     * @remarks
     * Create a Webhook for notification in the CallFire system. Use the webhooks API to receive notifications of important CallFire events. Select the resource to listen to, and then choose the resource events to receive notifications on. When an event triggers, a POST will be made to the callback URL with a payload of notification information. Available resources and their events include 'CccCampaign': ['started', 'stopped', 'finished'], 'CallBroadcast': ['started', 'stopped', 'finished'], 'TextBroadcast': ['started', 'stopped', 'finished'], 'OutboundCall': ['finished'], 'InboundCall': ['finished'], 'OutboundText': ['finished'], 'InboundText': ['finished'], 'ContactList': ['validationFinished', 'validationFailed'], 'MonthlyRenewal': ['failed', 'finished'], 'LowBalance': ['failed', 'finished']. Webhooks support secret token which is used as signing key to HmacSHA1 hash of json payload which is returned in 'X-CallFire-Signature' header. This header can be used to verify callback POST is coming from CallFire. See [security guide](https://developers.callfire.com/security-guide.html)
     */
    createWebhook(req: shared.WebhookInput, security: operations.CreateWebhookSecurity, config?: AxiosRequestConfig): Promise<operations.CreateWebhookResponse>;
    /**
     * Delete a webhook
     *
     * @remarks
     * Deletes a webhook instance. Will be removed permanently
     */
    deleteWebhook(req: operations.DeleteWebhookRequest, security: operations.DeleteWebhookSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteWebhookResponse>;
    /**
     * Find webhook resources
     *
     * @remarks
     * Searches for webhook resources. Available resources include 'CccCampaign': ['started', 'stopped', 'finished'], 'CallBroadcast': ['started', 'stopped', 'finished'], 'TextBroadcast': ['started', 'stopped', 'finished'], 'OutboundCall': ['finished'], 'InboundCall': ['finished'], 'OutboundText': ['finished'], 'InboundText': ['finished'], 'ContactList': ['validationFinished', 'validationFailed'], 'MonthlyRenewal': ['failed', 'finished'], 'LowBalance': ['failed', 'finished']
     */
    findWebhookResources(req: operations.FindWebhookResourcesRequest, security: operations.FindWebhookResourcesSecurity, config?: AxiosRequestConfig): Promise<operations.FindWebhookResourcesResponse>;
    /**
     * Find webhooks
     *
     * @remarks
     * Searches all webhooks available for a current user. Searches by name, resource, event, callback URL, or whether they are enabled. Returns a paged list of Webhooks
     */
    findWebhooks(req: operations.FindWebhooksRequest, security: operations.FindWebhooksSecurity, config?: AxiosRequestConfig): Promise<operations.FindWebhooksResponse>;
    /**
     * Find a specific webhook
     *
     * @remarks
     * Returns a single Webhook instance for a given webhook id
     */
    getWebhook(req: operations.GetWebhookRequest, security: operations.GetWebhookSecurity, config?: AxiosRequestConfig): Promise<operations.GetWebhookResponse>;
    /**
     * Find specific webhook resource
     *
     * @remarks
     * Returns information about supported events for a given webhook resource
     */
    getWebhookResource(req: operations.GetWebhookResourceRequest, security: operations.GetWebhookResourceSecurity, config?: AxiosRequestConfig): Promise<operations.GetWebhookResourceResponse>;
    /**
     * Update a webhook
     *
     * @remarks
     * Updates the information in existing webhook
     */
    updateWebhook(req: operations.UpdateWebhookRequest, security: operations.UpdateWebhookSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateWebhookResponse>;
}
