import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostWebhooksIdWebhookRequestBody extends SpeakeasyBase {
    /**
     * a date to delete the webhook or 'null' to enable it
     */
    deleted?: string;
    /**
     * The webhook event
     */
    event?: string;
    /**
     * The webhook authentication process to use
     */
    idAuth?: number;
    /**
     * The service ID to associate with the webhook
     */
    idService?: number;
    /**
     * The user ID to associate with the webhook
     */
    idUser?: number;
    /**
     * The webhook callback url
     */
    url?: string;
}
export declare class PostWebhooksIdWebhookRequest extends SpeakeasyBase {
    requestBody?: PostWebhooksIdWebhookRequestBody;
    expand?: string;
    idWebhook: number;
}
export declare class PostWebhooksIdWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful POST on Webhook resource
     */
    webhook?: shared.Webhook;
}
