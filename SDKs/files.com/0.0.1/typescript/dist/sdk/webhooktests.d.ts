import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about webhook_tests
 */
export declare class WebhookTests {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Webhook Test
     *
     * @remarks
     * Create Webhook Test
     */
    postWebhookTests(req: operations.PostWebhookTestsRequestBody, config?: AxiosRequestConfig): Promise<operations.PostWebhookTestsResponse>;
}
