import { SpeakeasyBase } from "../../../internal/utils";
import { CallRecord } from "./callrecord";
import { Contact } from "./contact";
import { Note } from "./note";
/**
 * Result of a call (LA, AM, BUSY, DNC, XFER, NO_ANS, XFER_LEG, INTERNAL_ERROR, CARRIER_ERROR, CARRIER_TEMP_ERROR, UNDIALED, SD, POSTPONED, ABANDONED, SKIPPED). See [call states and results](https://developers.callfire.com/results-responses-errors.html)
 */
export declare enum CallFinalCallResultEnum {
    La = "LA",
    Am = "AM",
    Busy = "BUSY",
    Dnc = "DNC",
    Xfer = "XFER",
    NoAns = "NO_ANS",
    XferLeg = "XFER_LEG",
    InternalError = "INTERNAL_ERROR",
    CarrierError = "CARRIER_ERROR",
    CarrierTempError = "CARRIER_TEMP_ERROR",
    Undialed = "UNDIALED",
    Sd = "SD",
    Postponed = "POSTPONED",
    Abandoned = "ABANDONED",
    Skipped = "SKIPPED"
}
/**
 * State of an action (READY, SELECTED, CALLBACK, DISABLED, FINISHED, DNC, DUP, INVALID, TIMEOUT, PERIOD_LIMIT). See [call states and results](https://developers.callfire.com/results-responses-errors.html)
 */
export declare enum CallStateEnum {
    Ready = "READY",
    Selected = "SELECTED",
    Callback = "CALLBACK",
    Finished = "FINISHED",
    Disabled = "DISABLED",
    Skipped = "SKIPPED",
    Dnc = "DNC",
    Dup = "DUP",
    Invalid = "INVALID",
    Timeout = "TIMEOUT",
    PeriodLimit = "PERIOD_LIMIT",
    RestrictedNumber = "RESTRICTED_NUMBER"
}
/**
 * Represents a call action sent or received by CallFire platform
 */
export declare class Call extends SpeakeasyBase {
    /**
     * An internal call to an agent
     */
    agentCall?: boolean;
    /**
     * Map of user-defined string attributes associated with an action
     */
    attributes?: Record<string, string>;
    /**
     * An id of contact batch associated with an action
     */
    batchId?: number;
    /**
     * An id of broadcast associated with an action if call is sent as part of call broadcast
     */
    campaignId?: number;
    /**
     * Represents a contact in CallFire platform. Contains info about the people you want to contact. It allows you to store a user-defined properties for each contact
     */
    contact?: Contact;
    /**
     * The time when the given resource was created, formatted in unix time milliseconds (read only). Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT
     */
    created?: number;
    /**
     * Result of a call (LA, AM, BUSY, DNC, XFER, NO_ANS, XFER_LEG, INTERNAL_ERROR, CARRIER_ERROR, CARRIER_TEMP_ERROR, UNDIALED, SD, POSTPONED, ABANDONED, SKIPPED). See [call states and results](https://developers.callfire.com/results-responses-errors.html)
     */
    finalCallResult?: CallFinalCallResultEnum;
    /**
     * A sender's phone number in E.164 (11-digit) format
     */
    fromNumber?: string;
    /**
     * An id of  an action
     */
    id?: number;
    /**
     * Is action inbound
     */
    inbound?: boolean;
    /**
     * Labels associated with action or broadcast for this action
     */
    labels?: string[];
    /**
     * The time when the given resource was modified, formatted in unix time milliseconds (read only). Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT
     */
    modified?: number;
    /**
     * Notes of call added by an agent
     */
    notes?: Note[];
    /**
     * List of call records, each record contains call details like originate time, duration, cost, notes made by agents. A single contact may have a multiple phone numbers. In this case if given call was sent as a part of broadcast with configured retry logic then each call record will contain details about attempted phone number
     */
    records?: CallRecord[];
    /**
     * State of an action (READY, SELECTED, CALLBACK, DISABLED, FINISHED, DNC, DUP, INVALID, TIMEOUT, PERIOD_LIMIT). See [call states and results](https://developers.callfire.com/results-responses-errors.html)
     */
    state?: CallStateEnum;
    /**
     * A recipient's phone number in E.164 (11-digit) format
     */
    toNumber?: string;
}
