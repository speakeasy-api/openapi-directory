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
     * postWebhooksFirehoseTest - Test Firehose Webhook
     *
     * Trigger a test payload to be sent to your configured Firehose Webhook url.
    **/
    postWebhooksFirehoseTest(req: operations.PostWebhooksFirehoseTestRequest, config?: AxiosRequestConfig): Promise<operations.PostWebhooksFirehoseTestResponse>;
    /**
     * putWebhooksFirehose - Update Firehose Webhook
    **/
    putWebhooksFirehose(req: operations.PutWebhooksFirehoseRequest, config?: AxiosRequestConfig): Promise<operations.PutWebhooksFirehoseResponse>;
}
