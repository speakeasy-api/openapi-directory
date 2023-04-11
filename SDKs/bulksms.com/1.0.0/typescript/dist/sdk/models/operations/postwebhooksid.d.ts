import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostWebhooksIdRequest extends SpeakeasyBase {
    /**
     * Contains the new property values for the webhook
     *
     * @remarks
     *
     */
    webhookEntry: shared.WebhookEntry;
    /**
     * The `id` of the webhook
     */
    id: string;
}
export declare class PostWebhooksIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A webhook with the given id does not exit
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The properties of the updated webhook
     */
    webhook?: shared.Webhook;
}
