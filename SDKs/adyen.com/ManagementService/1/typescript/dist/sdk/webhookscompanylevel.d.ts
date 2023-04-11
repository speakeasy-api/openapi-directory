import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class WebhooksCompanyLevel {
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
    deleteCompaniesCompanyIdWebhooksWebhookId(req: operations.DeleteCompaniesCompanyIdWebhooksWebhookIdRequest, security: operations.DeleteCompaniesCompanyIdWebhooksWebhookIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteCompaniesCompanyIdWebhooksWebhookIdResponse>;
    /**
     * List all webhooks
     *
     * @remarks
     * Lists all webhook configurations for the company account.
     *
     * To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Webhooks read
     * * Management API—Webhooks read and write
     */
    getCompaniesCompanyIdWebhooks(req: operations.GetCompaniesCompanyIdWebhooksRequest, security: operations.GetCompaniesCompanyIdWebhooksSecurity, config?: AxiosRequestConfig): Promise<operations.GetCompaniesCompanyIdWebhooksResponse>;
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
    getCompaniesCompanyIdWebhooksWebhookId(req: operations.GetCompaniesCompanyIdWebhooksWebhookIdRequest, security: operations.GetCompaniesCompanyIdWebhooksWebhookIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetCompaniesCompanyIdWebhooksWebhookIdResponse>;
    /**
     * Update a webhook
     *
     * @remarks
     * Make changes to the configuration of the webhook identified in the path. The request contains the new values you want to have in the webhook configuration. The response contains the full configuration for the webhook, which includes the new values from the request.
     *
     * To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Webhooks read and write
     */
    patchCompaniesCompanyIdWebhooksWebhookId(req: operations.PatchCompaniesCompanyIdWebhooksWebhookIdRequest, security: operations.PatchCompaniesCompanyIdWebhooksWebhookIdSecurity, config?: AxiosRequestConfig): Promise<operations.PatchCompaniesCompanyIdWebhooksWebhookIdResponse>;
    /**
     * Set up a webhook
     *
     * @remarks
     * Subscribe to receive webhook notifications about events related to your company account. You can add basic authentication to make sure the data is secure.
     *
     * To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Webhooks read and write
     */
    postCompaniesCompanyIdWebhooks(req: operations.PostCompaniesCompanyIdWebhooksRequest, security: operations.PostCompaniesCompanyIdWebhooksSecurity, config?: AxiosRequestConfig): Promise<operations.PostCompaniesCompanyIdWebhooksResponse>;
    /**
     * Generate an HMAC key
     *
     * @remarks
     * Returns an [HMAC key](https://en.wikipedia.org/wiki/HMAC) for the webhook identified in the path. This key allows you to check the integrity and the origin of the notifications you receive.By creating an HMAC key, you start receiving [HMAC-signed notifications](https://docs.adyen.com/development-resources/webhooks/verify-hmac-signatures#enable-hmac-signatures) from Adyen. Find out more about how to [verify HMAC signatures](https://docs.adyen.com/development-resources/webhooks/verify-hmac-signatures).
     *
     * To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Webhooks read and write
     */
    postCompaniesCompanyIdWebhooksWebhookIdGenerateHmac(req: operations.PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacRequest, security: operations.PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacSecurity, config?: AxiosRequestConfig): Promise<operations.PostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacResponse>;
    /**
     * Test a webhook
     *
     * @remarks
     * Sends sample notifications to test if the webhook is set up correctly.
     *
     * We send sample notifications for maximum 20 of the merchant accounts that the webhook is configured for. If the webhook is configured for more than 20 merchant accounts, use the `merchantIds` array to specify a subset of the merchant accounts for which to send test notifications.
     *
     * We send four test notifications for each event code you choose. They cover success and failure scenarios for the hard-coded currencies EUR and GBP, regardless of the currencies configured in the merchant accounts. For custom notifications, we only send the specified custom notification.
     *
     * The response describes the result of the test. The `status` field tells you if the test was successful or not. You can use the other response fields to troubleshoot unsuccessful tests.
     *
     * To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—Webhooks read and write
     */
    postCompaniesCompanyIdWebhooksWebhookIdTest(req: operations.PostCompaniesCompanyIdWebhooksWebhookIdTestRequest, security: operations.PostCompaniesCompanyIdWebhooksWebhookIdTestSecurity, config?: AxiosRequestConfig): Promise<operations.PostCompaniesCompanyIdWebhooksWebhookIdTestResponse>;
}
