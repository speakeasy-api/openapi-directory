import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about action_webhook_failures
 */
export declare class ActionWebhookFailures {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * retry Action Webhook Failure
     *
     * @remarks
     * retry Action Webhook Failure
     */
    postActionWebhookFailuresIdRetry(req: operations.PostActionWebhookFailuresIdRetryRequest, config?: AxiosRequestConfig): Promise<operations.PostActionWebhookFailuresIdRetryResponse>;
}
