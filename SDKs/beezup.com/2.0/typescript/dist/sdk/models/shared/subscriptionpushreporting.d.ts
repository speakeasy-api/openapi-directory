import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorResponseMessage } from "./errorresponsemessage";
/**
 * The subscription push reporting
 */
export declare class SubscriptionPushReporting extends SpeakeasyBase {
    /**
     * The duration of the push operation
     */
    duration: string;
    errorMessage?: ErrorResponseMessage;
    /**
     * The message identifier. It's a guid.
     */
    eventId: string;
    /**
     * The HTTP status received from the consumer
     */
    httpStatus?: number;
    /**
     * This modification date correspond to the last order pushed by your subscription consumer
     */
    lastOrderModificationUtcDate: Date;
    /**
     * The maximum BeezUP will retry to push orders. When we the retry count will reach maximum retry count, the subscription will be deactivated.
     */
    maxRetryCount?: number;
    /**
     * The next scheduled  date we retry to send orders
     */
    nextScheduledRetryUtcDate?: Date;
    /**
     * The order count sent
     */
    orderCount: number;
    /**
     * The URL <a href="https://en.wikipedia.org/wiki/URL">https://en.wikipedia.org/wiki/URL</a>
     */
    requestUri?: string;
    /**
     * The URL <a href="https://en.wikipedia.org/wiki/URL">https://en.wikipedia.org/wiki/URL</a>
     */
    responseUri?: string;
    /**
     * The retry count. When we the retry count will reach maximum retry count, the subscription will be deactivated.
     */
    retryCount?: number;
    /**
     * The identifier of the subscription to the orders for a merchant
     */
    subscriptionId: string;
    /**
     * Indicates if the push operation has succeed
     */
    succeed: boolean;
}
