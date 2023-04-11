import { SpeakeasyBase } from "../../../internal/utils";
export declare class WebhookSubscription extends SpeakeasyBase {
    /**
     * The date and time the webhook subscription was created downstream
     */
    createdAt?: string;
    /**
     * The list of downstream Events this connection is subscribed to
     */
    downstreamEventTypes?: string[];
    /**
     * The ID of the downstream service
     */
    downstreamId?: string;
    /**
     * The URL the downstream is sending to when the event is triggered
     */
    executeUrl?: string;
    /**
     * The list of Unify Events this connection is subscribed to
     */
    unifyEventTypes?: string[];
}
