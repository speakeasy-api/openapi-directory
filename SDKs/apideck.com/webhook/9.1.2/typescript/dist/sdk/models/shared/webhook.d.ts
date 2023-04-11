import { SpeakeasyBase } from "../../../internal/utils";
import { StatusEnum } from "./statusenum";
import { UnifiedApiIdEnum } from "./unifiedapiidenum";
import { WebhookEventTypeEnum } from "./webhookeventtypeenum";
/**
 * Indicates if the webhook has has been disabled as it reached its retry limit or if account is over the usage allocated by it's plan.
 */
export declare enum WebhookDisabledReasonEnum {
    None = "none",
    RetryLimit = "retry_limit",
    UsageLimit = "usage_limit"
}
export declare class Webhook extends SpeakeasyBase {
    /**
     * The date and time when the object was created.
     */
    createdAt?: Date;
    /**
     * The delivery url of the webhook endpoint.
     */
    deliveryUrl: string;
    /**
     * A description of the object.
     */
    description?: string;
    /**
     * Indicates if the webhook has has been disabled as it reached its retry limit or if account is over the usage allocated by it's plan.
     */
    disabledReason?: WebhookDisabledReasonEnum;
    /**
     * The list of subscribed events for this webhook. [`*`] indicates that all events are enabled.
     */
    events: WebhookEventTypeEnum[];
    /**
     * The Unify Base URL events from connectors will be sent to after service id is appended.
     */
    executeBaseUrl: string;
    id?: string;
    /**
     * The status of the webhook.
     */
    status: StatusEnum;
    /**
     * Name of Apideck Unified API
     */
    unifiedApi: UnifiedApiIdEnum;
    /**
     * The date and time when the object was last updated.
     */
    updatedAt?: Date;
}
