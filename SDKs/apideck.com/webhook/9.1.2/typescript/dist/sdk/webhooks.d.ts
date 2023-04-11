import * as operations from "./models/operations";
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
     * Create webhook subscription
     *
     * @remarks
     * Create a webhook subscription to receive events
     */
    webhooksAdd(req: operations.WebhooksAddRequest, security: operations.WebhooksAddSecurity, config?: AxiosRequestConfig): Promise<operations.WebhooksAddResponse>;
    /**
     * List webhook subscriptions
     *
     * @remarks
     * List all webhook subscriptions
     */
    webhooksAll(req: operations.WebhooksAllRequest, security: operations.WebhooksAllSecurity, config?: AxiosRequestConfig): Promise<operations.WebhooksAllResponse>;
    /**
     * Delete webhook subscription
     *
     * @remarks
     * Delete a webhook subscription
     */
    webhooksDelete(req: operations.WebhooksDeleteRequest, security: operations.WebhooksDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.WebhooksDeleteResponse>;
    /**
     * Execute a webhook
     *
     * @remarks
     * Execute a webhook
     */
    webhooksExecute(req: operations.WebhooksExecuteRequest, security: operations.WebhooksExecuteSecurity, config?: AxiosRequestConfig): Promise<operations.WebhooksExecuteResponse>;
    /**
     * Get webhook subscription
     *
     * @remarks
     * Get the webhook subscription details
     */
    webhooksOne(req: operations.WebhooksOneRequest, security: operations.WebhooksOneSecurity, config?: AxiosRequestConfig): Promise<operations.WebhooksOneResponse>;
    /**
     * Resolve and Execute a connection webhook
     *
     * @remarks
     * Resolve a webhook based on lookup_id and then execute it
     */
    webhooksResolve(req: operations.WebhooksResolveRequest, security: operations.WebhooksResolveSecurity, config?: AxiosRequestConfig): Promise<operations.WebhooksResolveResponse>;
    /**
     * Execute a webhook
     *
     * @remarks
     * Execute a webhook
     */
    webhooksShortExecute(req: operations.WebhooksShortExecuteRequest, security: operations.WebhooksShortExecuteSecurity, config?: AxiosRequestConfig): Promise<operations.WebhooksShortExecuteResponse>;
    /**
     * Update webhook subscription
     *
     * @remarks
     * Update a webhook subscription
     */
    webhooksUpdate(req: operations.WebhooksUpdateRequest, security: operations.WebhooksUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.WebhooksUpdateResponse>;
}
