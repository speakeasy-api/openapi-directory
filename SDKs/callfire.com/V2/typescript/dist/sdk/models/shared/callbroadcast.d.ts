import { SpeakeasyBase } from "../../../internal/utils";
import { CallBroadcastSounds } from "./callbroadcastsounds";
import { LocalTimeRestriction } from "./localtimerestriction";
import { Recipient } from "./recipient";
import { RetryConfig } from "./retryconfig";
import { Schedule } from "./schedule";
/**
 * Specifies which action should be taken if answering machine was detected, default value: AM_AND_LIVE. Available values: AM_ONLY - run AMD (Answering Machine Detection), hang up if LA (Live Answer); AM_AND_LIVE - run AMD, play separate live vs. machine sound; LIVE_WITH_AMD, run AMD, hang up if machine answers; LIVE_IMMEDIATE - no AMD, play live sound immediately
 */
export declare enum CallBroadcastAnsweringMachineConfigEnum {
    AmOnly = "AM_ONLY",
    AmAndLive = "AM_AND_LIVE",
    LiveWithAmd = "LIVE_WITH_AMD",
    LiveImmediate = "LIVE_IMMEDIATE"
}
/**
 * Call broadcast can be used to send out a voice message to a group of numbers. It supports IVR scripting, scheduling, retry logic, playing pre-recorded sounds, answering machine detection
 */
export declare class CallBroadcastInput extends SpeakeasyBase {
    /**
     * Specifies which action should be taken if answering machine was detected, default value: AM_AND_LIVE. Available values: AM_ONLY - run AMD (Answering Machine Detection), hang up if LA (Live Answer); AM_AND_LIVE - run AMD, play separate live vs. machine sound; LIVE_WITH_AMD, run AMD, hang up if machine answers; LIVE_IMMEDIATE - no AMD, play live sound immediately
     */
    answeringMachineConfig?: CallBroadcastAnsweringMachineConfigEnum;
    /**
     * IVR xml is a document which describes the dialplan to setup the IVR broadcast
     */
    dialplanXml?: string;
    /**
     * Phone number in E.164 format (11-digit) or short code for text. Example: 12132000384, 67076
     */
    fromNumber?: string;
    /**
     * A unique id of broadcast (readonly)
     */
    id?: number;
    /**
     * Labels of a broadcast
     */
    labels?: string[];
    /**
     * Represents a range of time during which CallFire will send a call or text to recipients. Timeframe uses the local timezone of recipient's number
     */
    localTimeRestriction?: LocalTimeRestriction;
    /**
     * Sets a maximum number of calls to be dialed by CallFire at once
     */
    maxActive?: number;
    /**
     * A maximum number of active transfers
     */
    maxActiveTransfers?: number;
    /**
     * A name of a broadcast
     */
    name?: string;
    /**
     * Recipients of a call broadcast, can be either existing contacts or a new ones
     */
    recipients?: Recipient[];
    /**
     * If true resumes the unfinished campaign to the next day
     */
    resumeNextDay?: boolean;
    /**
     * Retry configuration will help you to resend a call or text if it was not delivered first time
     */
    retryConfig?: RetryConfig;
    /**
     * A list of schedule objects which specifies a range of time when broadcast should be started and stopped. Supports the scheduling per day of week
     */
    schedules?: Schedule[];
    /**
     * A set of sounds assigned to a voice broadcast to play according to an answering machine configuration. You can add the existing sounds from the account's sound library or to provide a text which will be converted into a speech. There are four sound options available for a Voice Broadcast campaign
     */
    sounds?: CallBroadcastSounds;
}
/**
 * A status of a broadcast (read only). SETUP - campaign isn't configured yet; START_PENDING - waiting for contact batch population; RUNNING - campaign is running; STOPPED - campaign is stopped; FINISHED - campaign is finished; ARCHIVED - campaign was archived
 */
export declare enum CallBroadcastStatusEnum {
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
 * Call broadcast can be used to send out a voice message to a group of numbers. It supports IVR scripting, scheduling, retry logic, playing pre-recorded sounds, answering machine detection
 */
export declare class CallBroadcast extends SpeakeasyBase {
    /**
     * Specifies which action should be taken if answering machine was detected, default value: AM_AND_LIVE. Available values: AM_ONLY - run AMD (Answering Machine Detection), hang up if LA (Live Answer); AM_AND_LIVE - run AMD, play separate live vs. machine sound; LIVE_WITH_AMD, run AMD, hang up if machine answers; LIVE_IMMEDIATE - no AMD, play live sound immediately
     */
    answeringMachineConfig?: CallBroadcastAnsweringMachineConfigEnum;
    /**
     * IVR xml is a document which describes the dialplan to setup the IVR broadcast
     */
    dialplanXml?: string;
    /**
     * Phone number in E.164 format (11-digit) or short code for text. Example: 12132000384, 67076
     */
    fromNumber?: string;
    /**
     * A unique id of broadcast (readonly)
     */
    id?: number;
    /**
     * Labels of a broadcast
     */
    labels?: string[];
    /**
     * The time when a given resource was updated, formatted in unix time milliseconds (read only). Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT
     */
    lastModified?: number;
    /**
     * Represents a range of time during which CallFire will send a call or text to recipients. Timeframe uses the local timezone of recipient's number
     */
    localTimeRestriction?: LocalTimeRestriction;
    /**
     * Sets a maximum number of calls to be dialed by CallFire at once
     */
    maxActive?: number;
    /**
     * A maximum number of active transfers
     */
    maxActiveTransfers?: number;
    /**
     * A name of a broadcast
     */
    name?: string;
    /**
     * Recipients of a call broadcast, can be either existing contacts or a new ones
     */
    recipients?: Recipient[];
    /**
     * If true resumes the unfinished campaign to the next day
     */
    resumeNextDay?: boolean;
    /**
     * Retry configuration will help you to resend a call or text if it was not delivered first time
     */
    retryConfig?: RetryConfig;
    /**
     * A list of schedule objects which specifies a range of time when broadcast should be started and stopped. Supports the scheduling per day of week
     */
    schedules?: Schedule[];
    /**
     * A set of sounds assigned to a voice broadcast to play according to an answering machine configuration. You can add the existing sounds from the account's sound library or to provide a text which will be converted into a speech. There are four sound options available for a Voice Broadcast campaign
     */
    sounds?: CallBroadcastSounds;
    /**
     * A status of a broadcast (read only). SETUP - campaign isn't configured yet; START_PENDING - waiting for contact batch population; RUNNING - campaign is running; STOPPED - campaign is stopped; FINISHED - campaign is finished; ARCHIVED - campaign was archived
     */
    status?: CallBroadcastStatusEnum;
}
