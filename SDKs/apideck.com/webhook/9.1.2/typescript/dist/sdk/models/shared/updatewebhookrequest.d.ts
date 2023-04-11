import { SpeakeasyBase } from "../../../internal/utils";
import { StatusEnum } from "./statusenum";
import { WebhookEventTypeEnum } from "./webhookeventtypeenum";
export declare class UpdateWebhookRequest extends SpeakeasyBase {
    /**
     * The delivery url of the webhook endpoint.
     */
    deliveryUrl?: string;
    /**
     * A description of the object.
     */
    description?: string;
    /**
     * The list of subscribed events for this webhook. [`*`] indicates that all events are enabled.
     */
    events?: WebhookEventTypeEnum[];
    /**
     * The status of the webhook.
     */
    status?: StatusEnum;
}
