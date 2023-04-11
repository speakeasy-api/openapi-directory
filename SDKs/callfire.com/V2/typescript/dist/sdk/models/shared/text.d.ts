import { SpeakeasyBase } from "../../../internal/utils";
import { Contact } from "./contact";
import { Media } from "./media";
import { TextRecord } from "./textrecord";
/**
 * Result of text (SENT, RECEIVED, DNT, TOO_BIG, INTERNAL_ERROR, CARRIER_ERROR, CARRIER_TEMP_ERROR, UNDIALED). See [call states and results](https://developers.callfire.com/results-responses-errors.html)
 */
export declare enum TextFinalTextResultEnum {
    Sent = "SENT",
    Received = "RECEIVED",
    Dnt = "DNT",
    TooBig = "TOO_BIG",
    InternalError = "INTERNAL_ERROR",
    CarrierError = "CARRIER_ERROR",
    CarrierTempError = "CARRIER_TEMP_ERROR",
    Undialed = "UNDIALED",
    InvalidNumber = "INVALID_NUMBER"
}
/**
 * Current state of an action (READY, SELECTED, CALLBACK, DISABLED, FINISHED, DNC, DUP, INVALID, TIMEOUT, PERIOD_LIMIT). See [call states and results](https://developers.callfire.com/results-responses-errors.html)
 */
export declare enum TextStateEnum {
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
 * Represents a text action sent or received by CallFire platform
 */
export declare class Text extends SpeakeasyBase {
    /**
     * Map of user-defined string attributes associated with an action
     */
    attributes?: Record<string, string>;
    /**
     * An id of contact batch associated with an action
     */
    batchId?: number;
    /**
     * An id of broadcast if given text was sent as a part of text broadcast
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
     * Result of text (SENT, RECEIVED, DNT, TOO_BIG, INTERNAL_ERROR, CARRIER_ERROR, CARRIER_TEMP_ERROR, UNDIALED). See [call states and results](https://developers.callfire.com/results-responses-errors.html)
     */
    finalTextResult?: TextFinalTextResultEnum;
    /**
     * Sender's phone number in E.164 format (11-digit) or short code. Example: 12132000384, 67076
     */
    fromNumber?: string;
    /**
     * An id of an action
     */
    id?: number;
    /**
     * An action inbound
     */
    inbound?: boolean;
    /**
     * Labels associated with an action
     */
    labels?: string[];
    /**
     * ~
     */
    media?: Media[];
    /**
     * A text message
     */
    message?: string;
    /**
     * The time when the given resource was modified, formatted in unix time milliseconds (read only). Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT
     */
    modified?: number;
    /**
     * List of text records, each record contains additional details: time of sending, cost, current state.  A single contact may have multiple numbers. If given text was sent as part of broadcast with configured retry logic then each text record will contain details about attempted number
     */
    records?: TextRecord[];
    /**
     * Current state of an action (READY, SELECTED, CALLBACK, DISABLED, FINISHED, DNC, DUP, INVALID, TIMEOUT, PERIOD_LIMIT). See [call states and results](https://developers.callfire.com/results-responses-errors.html)
     */
    state?: TextStateEnum;
    /**
     * Recipient's phone number in E.164 format (11-digit) or short code. Example: 12132000384, 67076
     */
    toNumber?: string;
}
