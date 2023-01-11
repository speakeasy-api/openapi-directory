import { SpeakeasyBase } from "../../../internal/utils";
import { ConsumptionAvailabilityStatusEnum } from "./consumptionavailabilitystatusenum";
import { ErrorResponseMessage } from "./errorresponsemessage";
import { SubscriptionLinks } from "./subscriptionlinks";
import { SubscriptionStatusEnum } from "./subscriptionstatusenum";
/**
 * The subscription definition
**/
export declare class SubscriptionIndex extends SpeakeasyBase {
    consumerHealthStatus?: ConsumptionAvailabilityStatusEnum;
    consumerLastRequestSentUri?: string;
    consumerUnvailableSinceUtcDate?: Date;
    id: string;
    lastErrorMessage?: ErrorResponseMessage;
    lastOrderPushedModificationUtcDate?: Date;
    lastRetryUtcDate?: Date;
    lastSuccessfulOrderPushedUtcDate?: Date;
    links?: SubscriptionLinks;
    maxRetryCount?: number;
    merchantApplicationName: string;
    merchantApplicationVersion: string;
    merchantEmailAlert?: string;
    name: string;
    nextScheduledRetryUtcDate?: Date;
    recoverBeginPeriodOrderLastModificationUtcDate?: Date;
    recoverEndPeriodOrderLastModificationUtcDate?: Date;
    retryCount?: number;
    status: SubscriptionStatusEnum;
    targetUrl: string;
}
