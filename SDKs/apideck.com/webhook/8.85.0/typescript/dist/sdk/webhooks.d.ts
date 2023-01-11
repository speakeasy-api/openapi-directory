import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Webhooks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * webhooksAdd - Create webhook subscription
     *
     * Create a webhook subscription to receive events
    **/
    webhooksAdd(req: operations.WebhooksAddRequest, config?: AxiosRequestConfig): Promise<operations.WebhooksAddResponse>;
    /**
     * webhooksAll - List webhook subscriptions
     *
     * List all webhook subscriptions
    **/
    webhooksAll(req: operations.WebhooksAllRequest, config?: AxiosRequestConfig): Promise<operations.WebhooksAllResponse>;
    /**
     * webhooksDelete - Delete webhook subscription
     *
     * Delete a webhook subscription
    **/
    webhooksDelete(req: operations.WebhooksDeleteRequest, config?: AxiosRequestConfig): Promise<operations.WebhooksDeleteResponse>;
    /**
     * webhooksExecute - Execute a webhook
     *
     * Execute a webhook
    **/
    webhooksExecute(req: operations.WebhooksExecuteRequest, config?: AxiosRequestConfig): Promise<operations.WebhooksExecuteResponse>;
    /**
     * webhooksOne - Get webhook subscription
     *
     * Get the webhook subscription details
    **/
    webhooksOne(req: operations.WebhooksOneRequest, config?: AxiosRequestConfig): Promise<operations.WebhooksOneResponse>;
    /**
     * webhooksResolve - Resolve and Execute a connection webhook
     *
     * Resolve a webhook based on lookup_id and then execute it
    **/
    webhooksResolve(req: operations.WebhooksResolveRequest, config?: AxiosRequestConfig): Promise<operations.WebhooksResolveResponse>;
    /**
     * webhooksShortExecute - Execute a webhook
     *
     * Execute a webhook
    **/
    webhooksShortExecute(req: operations.WebhooksShortExecuteRequest, config?: AxiosRequestConfig): Promise<operations.WebhooksShortExecuteResponse>;
    /**
     * webhooksUpdate - Update webhook subscription
     *
     * Update a webhook subscription
    **/
    webhooksUpdate(req: operations.WebhooksUpdateRequest, config?: AxiosRequestConfig): Promise<operations.WebhooksUpdateResponse>;
}
