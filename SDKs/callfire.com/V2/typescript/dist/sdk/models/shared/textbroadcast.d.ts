import { SpeakeasyBase } from "../../../internal/utils";
import { LocalTimeRestriction } from "./localtimerestriction";
import { Media } from "./media";
import { Schedule } from "./schedule";
import { TextRecipient } from "./textrecipient";
/**
 * If message length exceeds 160 characters, multiple messages will be sent, SEND_MULTIPLE strategy is chosen by default. Available values: SEND_MULTIPLE - send text as multiple messages, DO_NOT_SEND - do not send text if it exceeds 160 characters, TRIM - trims text message to 160 characters
 */
export declare enum TextBroadcastBigMessageStrategyEnum {
    SendMultiple = "SEND_MULTIPLE",
    DoNotSend = "DO_NOT_SEND",
    Trim = "TRIM",
    Mms = "MMS"
}
/**
 * A text campaign allows you to send a text message to a number of recipients. It supports scheduling, retry logic and pattern-based messages
 */
export declare class TextBroadcastInput extends SpeakeasyBase {
    /**
     * If message length exceeds 160 characters, multiple messages will be sent, SEND_MULTIPLE strategy is chosen by default. Available values: SEND_MULTIPLE - send text as multiple messages, DO_NOT_SEND - do not send text if it exceeds 160 characters, TRIM - trims text message to 160 characters
     */
    bigMessageStrategy?: TextBroadcastBigMessageStrategyEnum;
    /**
     * A phone number in E.164 format (11-digit) or short code. Example: 12132000384, 67076, etc
     */
    fromNumber?: string;
    /**
     * A unique id of a broadcast
     */
    id?: number;
    /**
     * A labels of a broadcast
     */
    labels?: string[];
    /**
     * Represents a range of time during which CallFire will send a call or text to recipients. Timeframe uses the local timezone of recipient's number
     */
    localTimeRestriction?: LocalTimeRestriction;
    /**
     * A maximum number of texts that CallFire dials at once
     */
    maxActive?: number;
    /**
     * ~
     */
    media?: Media[];
    /**
     * A text message
     */
    message?: string;
    /**
     * A name of a broadcast
     */
    name?: string;
    /**
     * Recipients of a text campaign, can be an existing contacts or a new one
     */
    recipients?: TextRecipient[];
    /**
     * ~
     */
    resumeNextDay?: boolean;
    /**
     * ~
     */
    schedules?: Schedule[];
}
/**
 * A status of a broadcast. SETUP - campaign isn't configured yet; START_PENDING - waiting for contact batch population; RUNNING - campaign is running; STOPPED - campaign is stopped; FINISHED - campaign is finished; ARCHIVED - campaign was archived
 */
export declare enum TextBroadcastStatusEnum {
    Test = "TEST",
    Setup = "SETUP",
    StartPending = "START_PENDING",
    Running = "RUNNING",
    Scheduled = "SCHEDULED",
    Stopped = "STOPPED",
    Suspended = "SUSPENDED",
    Finished = "FINISHED",
    Archived = "ARCHIVED",
    ValidatingStart = "VALIDATING_START",
    ValidatingEmail = "VALIDATING_EMAIL",
    BlockedSuspicious = "BLOCKED_SUSPICIOUS",
    Declined = "DECLINED",
    Approved = "APPROVED"
}
/**
 * A text campaign allows you to send a text message to a number of recipients. It supports scheduling, retry logic and pattern-based messages
 */
export declare class TextBroadcast extends SpeakeasyBase {
    /**
     * If message length exceeds 160 characters, multiple messages will be sent, SEND_MULTIPLE strategy is chosen by default. Available values: SEND_MULTIPLE - send text as multiple messages, DO_NOT_SEND - do not send text if it exceeds 160 characters, TRIM - trims text message to 160 characters
     */
    bigMessageStrategy?: TextBroadcastBigMessageStrategyEnum;
    /**
     * A phone number in E.164 format (11-digit) or short code. Example: 12132000384, 67076, etc
     */
    fromNumber?: string;
    /**
     * A unique id of a broadcast
     */
    id?: number;
    /**
     * A labels of a broadcast
     */
    labels?: string[];
    /**
     * A time when the given resource was updated, formatted in unix time milliseconds (read only). Example: 1473781817000
     */
    lastModified?: number;
    /**
     * Represents a range of time during which CallFire will send a call or text to recipients. Timeframe uses the local timezone of recipient's number
     */
    localTimeRestriction?: LocalTimeRestriction;
    /**
     * A maximum number of texts that CallFire dials at once
     */
    maxActive?: number;
    /**
     * ~
     */
    media?: Media[];
    /**
     * A text message
     */
    message?: string;
    /**
     * A name of a broadcast
     */
    name?: string;
    /**
     * Recipients of a text campaign, can be an existing contacts or a new one
     */
    recipients?: TextRecipient[];
    /**
     * ~
     */
    resumeNextDay?: boolean;
    /**
     * ~
     */
    schedules?: Schedule[];
    /**
     * A status of a broadcast. SETUP - campaign isn't configured yet; START_PENDING - waiting for contact batch population; RUNNING - campaign is running; STOPPED - campaign is stopped; FINISHED - campaign is finished; ARCHIVED - campaign was archived
     */
    status?: TextBroadcastStatusEnum;
}
