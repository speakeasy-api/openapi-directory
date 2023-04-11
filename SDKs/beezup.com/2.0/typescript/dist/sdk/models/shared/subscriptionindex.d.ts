import { SpeakeasyBase } from "../../../internal/utils";
import { ConsumptionAvailabilityStatusEnum } from "./consumptionavailabilitystatusenum";
import { ErrorResponseMessage } from "./errorresponsemessage";
import { SubscriptionLinks } from "./subscriptionlinks";
import { SubscriptionStatusEnum } from "./subscriptionstatusenum";
/**
 * The subscription definition
 */
export declare class SubscriptionIndex extends SpeakeasyBase {
    /**
     * The subscription consumption status
     */
    consumerHealthStatus?: ConsumptionAvailabilityStatusEnum;
    /**
     * The URL <a href="https://en.wikipedia.org/wiki/URL">https://en.wikipedia.org/wiki/URL</a>
     */
    consumerLastRequestSentUri?: string;
    /**
     * This date indicates since when the subscription consumer is unavailable
     */
    consumerUnvailableSinceUtcDate?: Date;
    /**
     * The identifier of the subscription to the orders for a merchant
     */
    id: string;
    lastErrorMessage?: ErrorResponseMessage;
    /**
     * This modification date correspond to the last order pushed by your subscription consumer
     */
    lastOrderPushedModificationUtcDate?: Date;
    /**
     * The last date we retry to send orders
     */
    lastRetryUtcDate?: Date;
    /**
     * The date of the last pushed order successfully received by your subscription consumer
     */
    lastSuccessfulOrderPushedUtcDate?: Date;
    links?: SubscriptionLinks;
    /**
     * The maximum BeezUP will retry to push orders. When we the retry count will reach maximum retry count, the subscription will be deactivated.
     */
    maxRetryCount?: number;
    /**
     * The name of your application
     */
    merchantApplicationName: string;
    /**
     * The version of your application
     */
    merchantApplicationVersion: string;
    /**
     * The email
     */
    merchantEmailAlert?: string;
    /**
     * The subscription name you want to use
     */
    name: string;
    /**
     * The next scheduled  date we retry to send orders
     */
    nextScheduledRetryUtcDate?: Date;
    /**
     * Recover existing orders using the begin period order last modification date. If not set then you will receive new/updated orders in real-time.
     */
    recoverBeginPeriodOrderLastModificationUtcDate?: Date;
    /**
     * Recover existing orders using the begin and the end period order last modification date.
     *
     * @remarks
     * Otherwise, you will receive new/updated orders in real-time.
     *
     */
    recoverEndPeriodOrderLastModificationUtcDate?: Date;
    /**
     * The retry count. When we the retry count will reach maximum retry count, the subscription will be deactivated.
     */
    retryCount?: number;
    /**
     * The status of your subscription
     */
    status: SubscriptionStatusEnum;
    /**
     * The URL <a href="https://en.wikipedia.org/wiki/URL">https://en.wikipedia.org/wiki/URL</a>
     */
    targetUrl: string;
}
