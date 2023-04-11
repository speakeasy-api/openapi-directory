import { SpeakeasyBase } from "../../../internal/utils";
import { CallRecording } from "./callrecording";
import { Note } from "./note";
import { QuestionResponse } from "./questionresponse";
/**
 * ~
 */
export declare enum CallRecordResultEnum {
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
 * Represents a call sent to a contact's number
 */
export declare class CallRecord extends SpeakeasyBase {
    /**
     * Timestamp when call was answered, formatted in unix time milliseconds (read only). Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT
     */
    answerTime?: number;
    /**
     * A cost of the call
     */
    billedAmount?: number;
    /**
     * ~
     */
    callerName?: string;
    /**
     * Duration of the call in seconds
     */
    duration?: number;
    /**
     * Timestamp when call was finished, formatted in unix time milliseconds (read only). Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT
     */
    finishTime?: number;
    /**
     * An id of a call record
     */
    id?: number;
    /**
     * Labels associated with a call action
     */
    labels?: string[];
    /**
     * Notes of call added by agent
     */
    notes?: Note[];
    /**
     * A date and time (timestamp) when call was originated by CallFire platform and went to downstream provider, formatted in unix time milliseconds (read only). Example: 1473781817000
     */
    originateTime?: number;
    /**
     * Notes of call added by an agent
     */
    questionResponses?: QuestionResponse[];
    /**
     * A list of voice recordings of the call
     */
    recordings?: CallRecording[];
    /**
     * ~
     */
    result?: CallRecordResultEnum;
    /**
     * ~
     */
    switchId?: string;
    /**
     * A phone number to which a call was addressed. Phone number in E.164 format (11-digit). Example: 12132000384
     */
    toNumber?: string;
}
