import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * What version of webhook request should be sent to the endpoint URL when messages are sent
 */
export declare enum AddWebhookAddWebhookRequestBodyResponseVersionEnum {
    V1 = "v1",
    V2 = "v2"
}
export declare class AddWebhookAddWebhookRequestBody extends SpeakeasyBase {
    /**
     * The endpoint is where the webhook request will be sent.
     */
    endpointUrl: string;
    /**
     * Resource identifier for the top folder this webhook is associated with
     */
    resource?: string;
    /**
     * What version of webhook request should be sent to the endpoint URL when messages are sent
     */
    responseVersion?: AddWebhookAddWebhookRequestBodyResponseVersionEnum;
    triggers?: shared.WebhookTriggers;
}
export declare class AddWebhookRequest extends SpeakeasyBase {
    requestBody?: AddWebhookAddWebhookRequestBody;
    /**
     * Access token required to make the API call.
     */
    evAccessToken: string;
    /**
     * API key required to make the API call.
     */
    evApiKey: string;
}
export declare class AddWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    webhookResponse?: shared.WebhookResponse;
}
