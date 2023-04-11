import { SpeakeasyBase } from "../../../internal/utils";
export declare class HookDeliveryRequest extends SpeakeasyBase {
    /**
     * The request headers sent with the webhook delivery.
     */
    headers: Record<string, any>;
    /**
     * The webhook payload.
     */
    payload: Record<string, any>;
}
export declare class HookDeliveryResponse extends SpeakeasyBase {
    /**
     * The response headers received when the delivery was made.
     */
    headers: Record<string, any>;
    /**
     * The response payload received.
     */
    payload: string;
}
/**
 * Delivery made by a webhook.
 */
export declare class HookDelivery extends SpeakeasyBase {
    /**
     * The type of activity for the event that triggered the delivery.
     */
    action: string;
    /**
     * Time when the delivery was delivered.
     */
    deliveredAt: Date;
    /**
     * Time spent delivering.
     */
    duration: number;
    /**
     * The event that triggered the delivery.
     */
    event: string;
    /**
     * Unique identifier for the event (shared with all deliveries for all webhooks that subscribe to this event).
     */
    guid: string;
    /**
     * Unique identifier of the delivery.
     */
    id: number;
    /**
     * The id of the GitHub App installation associated with this event.
     */
    installationId: number;
    /**
     * Whether the delivery is a redelivery.
     */
    redelivery: boolean;
    /**
     * The id of the repository associated with this event.
     */
    repositoryId: number;
    request: HookDeliveryRequest;
    response: HookDeliveryResponse;
    /**
     * Description of the status of the attempted delivery
     */
    status: string;
    /**
     * Status code received when delivery was made.
     */
    statusCode: number;
    /**
     * The URL target of the delivery.
     */
    url?: string;
}
