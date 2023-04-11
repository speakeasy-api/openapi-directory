import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Version of the webhooks message to send to the endpoint
 */
export declare enum UpdateWebhookUpdateWebhookRequestBodyResponseVersionEnum {
    V2 = "v2",
    V1 = "v1"
}
export declare class UpdateWebhookUpdateWebhookRequestBody extends SpeakeasyBase {
    /**
     * New endpoint URL to use for the webhook configuration
     */
    endpointUrl?: string;
    /**
     * Resource identifier of the top folder watched by this webhook.
     */
    resource?: string;
    /**
     * Version of the webhooks message to send to the endpoint
     */
    responseVersion?: UpdateWebhookUpdateWebhookRequestBodyResponseVersionEnum;
    triggers?: shared.WebhookTriggers;
}
export declare class UpdateWebhookRequest extends SpeakeasyBase {
    requestBody?: UpdateWebhookUpdateWebhookRequestBody;
    /**
     * Access token required to make the API call.
     */
    evAccessToken: string;
    /**
     * API key required to make the API call.
     */
    evApiKey: string;
    /**
     * Webhook endpoint ID
     */
    id: number;
}
export declare class UpdateWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful Operation
     */
    webhookResponse?: shared.WebhookResponse;
}
