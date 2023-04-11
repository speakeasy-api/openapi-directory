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
     * Test Firehose Webhook
     *
     * @remarks
     * Trigger a test payload to be sent to your configured Firehose Webhook url.
     */
    postWebhooksFirehoseTest(config?: AxiosRequestConfig): Promise<operations.PostWebhooksFirehoseTestResponse>;
    /**
     * Update Firehose Webhook
     */
    putWebhooksFirehose(req: operations.PutWebhooksFirehoseRequestBody, security: operations.PutWebhooksFirehoseSecurity, config?: AxiosRequestConfig): Promise<operations.PutWebhooksFirehoseResponse>;
}
