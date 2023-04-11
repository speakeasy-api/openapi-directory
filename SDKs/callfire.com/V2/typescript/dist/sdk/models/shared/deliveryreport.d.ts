import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ~
 */
export declare enum DeliveryReportDeliveryCategoryEnum {
    NoData = "NO_DATA",
    OptedOut = "OPTED_OUT",
    Bounced = "BOUNCED",
    NoCredits = "NO_CREDITS",
    Delivered = "DELIVERED"
}
/**
 * ~
 */
export declare enum DeliveryReportDeliveryStateEnum {
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
/**
 * ~
 */
export declare class DeliveryReport extends SpeakeasyBase {
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
    deliveryCategory?: DeliveryReportDeliveryCategoryEnum;
    /**
     * ~
     */
    deliveryState?: DeliveryReportDeliveryStateEnum;
    /**
     * ~
     */
    fromNumber?: string;
    /**
     * ~
     */
    messageText?: string;
    /**
     * ~
     */
    toNumber?: string;
    /**
     * ~
     */
    updated?: Date;
}
