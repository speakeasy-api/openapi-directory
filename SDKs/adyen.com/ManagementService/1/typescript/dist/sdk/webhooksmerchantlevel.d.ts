import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class WebhooksMerchantLevel {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Remove a webhook
     *
     * @remarks
     * Remove the configuration for the webhook identified in the path.
     *
     * To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Webhooks read and write
     */
    deleteMerchantsMerchantIdWebhooksWebhookId(req: operations.DeleteMerchantsMerchantIdWebhooksWebhookIdRequest, security: operations.DeleteMerchantsMerchantIdWebhooksWebhookIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteMerchantsMerchantIdWebhooksWebhookIdResponse>;
    /**
     * List all webhooks
     *
     * @remarks
     * Lists all webhook configurations for the merchant account.
     *
     * To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Webhooks read
     * * Management API—Webhooks read and write
     */
    getMerchantsMerchantIdWebhooks(req: operations.GetMerchantsMerchantIdWebhooksRequest, security: operations.GetMerchantsMerchantIdWebhooksSecurity, config?: AxiosRequestConfig): Promise<operations.GetMerchantsMerchantIdWebhooksResponse>;
    /**
     * Get a webhook
     *
     * @remarks
     * Returns the configuration for the webhook identified in the path.
     *
     * To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Webhooks read
     * * Management API—Webhooks read and write
     */
    getMerchantsMerchantIdWebhooksWebhookId(req: operations.GetMerchantsMerchantIdWebhooksWebhookIdRequest, security: operations.GetMerchantsMerchantIdWebhooksWebhookIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetMerchantsMerchantIdWebhooksWebhookIdResponse>;
    /**
     * Update a webhook
     *
     * @remarks
     * Make changes to the configuration of the webhook identified in the path. The request contains the new values you want to have in the webhook configuration. The response contains the full configuration for the webhook, which includes the new values from the request.
     *
     * To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Webhooks read and write
     */
    patchMerchantsMerchantIdWebhooksWebhookId(req: operations.PatchMerchantsMerchantIdWebhooksWebhookIdRequest, security: operations.PatchMerchantsMerchantIdWebhooksWebhookIdSecurity, config?: AxiosRequestConfig): Promise<operations.PatchMerchantsMerchantIdWebhooksWebhookIdResponse>;
    /**
     * Set up a webhook
     *
     * @remarks
     * Subscribe to receive webhook notifications about events related to your merchant account. You can add basic authentication to make sure the data is secure.
     *
     * To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Webhooks read and write
     */
    postMerchantsMerchantIdWebhooks(req: operations.PostMerchantsMerchantIdWebhooksRequest, security: operations.PostMerchantsMerchantIdWebhooksSecurity, config?: AxiosRequestConfig): Promise<operations.PostMerchantsMerchantIdWebhooksResponse>;
    /**
     * Generate an HMAC key
     *
     * @remarks
     * Returns an [HMAC key](https://en.wikipedia.org/wiki/HMAC) for the webhook identified in the path. This key allows you to check the integrity and the origin of the notifications you receive.By creating an HMAC key, you start receiving [HMAC-signed notifications](https://docs.adyen.com/development-resources/webhooks/verify-hmac-signatures#enable-hmac-signatures) from Adyen. Find out more about how to [verify HMAC signatures](https://docs.adyen.com/development-resources/webhooks/verify-hmac-signatures).
     *
     * To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Webhooks read and write
     */
    postMerchantsMerchantIdWebhooksWebhookIdGenerateHmac(req: operations.PostMerchantsMerchantIdWebhooksWebhookIdGenerateHmacRequest, security: operations.PostMerchantsMerchantIdWebhooksWebhookIdGenerateHmacSecurity, config?: AxiosRequestConfig): Promise<operations.PostMerchantsMerchantIdWebhooksWebhookIdGenerateHmacResponse>;
    /**
     * Test a webhook
     *
     * @remarks
     * Sends sample notifications to test if the webhook is set up correctly.
     *
     * We send four test notifications for each event code you choose. They cover success and failure scenarios for the hard-coded currencies EUR and GBP, regardless of the currencies configured in the merchant accounts. For custom notifications, we only send the specified custom notification.
     *
     * The response describes the result of the test. The `status` field tells you if the test was successful or not. You can use the other fields to troubleshoot unsuccessful tests.
     *
     * To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Webhooks read and write
     */
    postMerchantsMerchantIdWebhooksWebhookIdTest(req: operations.PostMerchantsMerchantIdWebhooksWebhookIdTestRequest, security: operations.PostMerchantsMerchantIdWebhooksWebhookIdTestSecurity, config?: AxiosRequestConfig): Promise<operations.PostMerchantsMerchantIdWebhooksWebhookIdTestResponse>;
}
