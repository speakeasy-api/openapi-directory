import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorResponseMessage } from "./errorresponsemessage";
/**
 * The subscription push reporting
**/
export declare class SubscriptionPushReporting extends SpeakeasyBase {
    duration: string;
    errorMessage?: ErrorResponseMessage;
    eventId: string;
    httpStatus?: number;
    lastOrderModificationUtcDate: Date;
    maxRetryCount?: number;
    nextScheduledRetryUtcDate?: Date;
    orderCount: number;
    requestUri?: string;
    responseUri?: string;
    retryCount?: number;
    subscriptionId: string;
    succeed: boolean;
}
