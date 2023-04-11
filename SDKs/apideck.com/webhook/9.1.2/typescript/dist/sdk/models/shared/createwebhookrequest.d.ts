import { SpeakeasyBase } from "../../../internal/utils";
import { StatusEnum } from "./statusenum";
import { UnifiedApiIdEnum } from "./unifiedapiidenum";
import { WebhookEventTypeEnum } from "./webhookeventtypeenum";
export declare class CreateWebhookRequest extends SpeakeasyBase {
    /**
     * The delivery url of the webhook endpoint.
     */
    deliveryUrl: string;
    /**
     * A description of the object.
     */
    description?: string;
    /**
     * The list of subscribed events for this webhook. [`*`] indicates that all events are enabled.
     */
    events: WebhookEventTypeEnum[];
    /**
     * The status of the webhook.
     */
    status: StatusEnum;
    /**
     * Name of Apideck Unified API
     */
    unifiedApi: UnifiedApiIdEnum;
}
