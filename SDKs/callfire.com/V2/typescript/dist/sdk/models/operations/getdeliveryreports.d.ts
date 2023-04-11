import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDeliveryReportsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * ~
 */
export declare enum GetDeliveryReportsDeliveryCategoryEnum {
    NoData = "NO_DATA",
    OptedOut = "OPTED_OUT",
    Bounced = "BOUNCED",
    NoCredits = "NO_CREDITS",
    Delivered = "DELIVERED"
}
/**
 * ~
 */
export declare enum GetDeliveryReportsDeliveryStateEnum {
    Delivered = "DELIVERED",
    UnsentOptedOutGlobal = "UNSENT_OPTED_OUT_GLOBAL",
    UnsentOptedOutLocal = "UNSENT_OPTED_OUT_LOCAL",
    UnsentNoCredits = "UNSENT_NO_CREDITS",
    GatewayRejected = "GATEWAY_REJECTED",
    CarrierRejected = "CARRIER_REJECTED",
    NotDelivered = "NOT_DELIVERED",
    UnsentInvalidNumber = "UNSENT_INVALID_NUMBER",
    UnsentBadData = "UNSENT_BAD_DATA",
    UnsentForceStopped = "UNSENT_FORCE_STOPPED",
    UnsentPeriodLimit = "UNSENT_PERIOD_LIMIT",
    UnsentInternational = "UNSENT_INTERNATIONAL",
    UnsentInvalidTimezoneOrDnc = "UNSENT_INVALID_TIMEZONE_OR_DNC",
    UnsentAlreadyScrubbed = "UNSENT_ALREADY_SCRUBBED",
    UnsentSystemError = "UNSENT_SYSTEM_ERROR",
    UnsentNoWirelessCarrier = "UNSENT_NO_WIRELESS_CARRIER",
    UnsentMessageTooLong = "UNSENT_MESSAGE_TOO_LONG",
    UnsentMessageBlocked = "UNSENT_MESSAGE_BLOCKED",
    UnsentQueueLimitReached = "UNSENT_QUEUE_LIMIT_REACHED",
    UnsentTokenLimitReached = "UNSENT_TOKEN_LIMIT_REACHED",
    UnsentTimeLimitReached = "UNSENT_TIME_LIMIT_REACHED",
    UnsentSchedulerCapacityExceeded = "UNSENT_SCHEDULER_CAPACITY_EXCEEDED",
    SpamDetected = "SPAM_DETECTED",
    UnsentNoGateway = "UNSENT_NO_GATEWAY",
    UnsentDailyLimitReached = "UNSENT_DAILY_LIMIT_REACHED",
    Originated = "ORIGINATED",
    Submitted = "SUBMITTED",
    Forwarded = "FORWARDED",
    NotGiven = "NOT_GIVEN",
    Unknown = "UNKNOWN",
    RetryMmsAsSms = "RETRY_MMS_AS_SMS",
    Queued = "QUEUED",
    QueuedTranscode = "QUEUED_TRANSCODE",
    Original = "ORIGINAL",
    Dupe = "DUPE",
    Truncated = "TRUNCATED",
    RequeuedRateLimited = "REQUEUED_RATE_LIMITED",
    Buffered = "BUFFERED",
    RateLimitExceeded = "RATE_LIMIT_EXCEEDED",
    ServiceUnavailable = "SERVICE_UNAVAILABLE",
    SendMmsAsSms = "SEND_MMS_AS_SMS",
    RequeuedRecoverableError = "REQUEUED_RECOVERABLE_ERROR",
    SendWithAdditionalSpid = "SEND_WITH_ADDITIONAL_SPID",
    UnsentFreeTrial = "UNSENT_FREE_TRIAL"
}
export declare class GetDeliveryReportsRequest extends SpeakeasyBase {
    /**
     * ~
     */
    campaignId?: number;
    /**
     * ~
     */
    carrier?: string;
    /**
     * ~
     */
    deliveryCategory?: GetDeliveryReportsDeliveryCategoryEnum;
    /**
     * ~
     */
    deliveryState?: GetDeliveryReportsDeliveryStateEnum;
    /**
     * ~
     */
    endDate?: string;
    /**
     * ~
     */
    fromNumber?: string;
    /**
     * To set the maximum number of records to return in a paged list response. The default is 100
     */
    limit?: number;
    /**
     * ~
     */
    messageText?: string;
    /**
     * Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.
     */
    offset?: number;
    /**
     * ~
     */
    startDate?: string;
    /**
     * ~
     */
    toNumber?: string;
}
export declare class GetDeliveryReportsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * successful operation
     */
    pageDeliveryReport?: shared.PageDeliveryReport;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
