import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of error in case of a failure
 */
export declare enum StatusMessageErrorCodeEnum {
    NoAppKey = "NO_APP_KEY",
    InvalidAppKey = "INVALID_APP_KEY",
    NoSession = "NO_SESSION",
    InvalidSessionInformation = "INVALID_SESSION_INFORMATION",
    NotAuthorized = "NOT_AUTHORIZED",
    InvalidInput = "INVALID_INPUT",
    InvalidClock = "INVALID_CLOCK",
    UnexpectedError = "UNEXPECTED_ERROR",
    Timeout = "TIMEOUT",
    SubscriptionLimitExceeded = "SUBSCRIPTION_LIMIT_EXCEEDED",
    InvalidRequest = "INVALID_REQUEST",
    ConnectionFailed = "CONNECTION_FAILED",
    MaxConnectionLimitExceeded = "MAX_CONNECTION_LIMIT_EXCEEDED",
    TooManyRequests = "TOO_MANY_REQUESTS"
}
/**
 * The status of the last request
 */
export declare enum StatusMessageStatusCodeEnum {
    Success = "SUCCESS",
    Failure = "FAILURE"
}
export declare class StatusMessage extends SpeakeasyBase {
    /**
     * Is the connection now closed
     */
    connectionClosed?: boolean;
    /**
     * The connection id
     */
    connectionId?: string;
    /**
     * The number of connections available for this account at this moment in time. Present on responses to Authentication messages only.
     */
    connectionsAvailable?: number;
    /**
     * The type of error in case of a failure
     */
    errorCode?: StatusMessageErrorCodeEnum;
    /**
     * Additional message in case of a failure
     */
    errorMessage?: string;
    /**
     * Client generated unique id to link request with response (like json rpc)
     */
    id?: number;
    /**
     * The operation type
     */
    op?: string;
    /**
     * The status of the last request
     */
    statusCode?: StatusMessageStatusCodeEnum;
}
