import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Result of a text (SENT, RECEIVED, DNT, TOO_BIG, INTERNAL_ERROR, CARRIER_ERROR, CARRIER_TEMP_ERROR, UNDIALED). See [call states and results](https://developers.callfire.com/results-responses-errors.html)
 */
export declare enum TextRecordTextResultEnum {
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
 * Represents a text message sent to a contact's number
 */
export declare class TextRecord extends SpeakeasyBase {
    /**
     * A cost of a sent text
     */
    billedAmount?: number;
    /**
     * ~
     */
    callerName?: string;
    /**
     * A time when the given resource was updated, formatted in unix time milliseconds (read only). Example: 1473781817000
     */
    finishTime?: number;
    /**
     * An id of a text record
     */
    id?: number;
    /**
     * Labels associated with a text action
     */
    labels?: string[];
    /**
     * A text message
     */
    message?: string;
    /**
     * ~
     */
    switchId?: string;
    /**
     * Result of a text (SENT, RECEIVED, DNT, TOO_BIG, INTERNAL_ERROR, CARRIER_ERROR, CARRIER_TEMP_ERROR, UNDIALED). See [call states and results](https://developers.callfire.com/results-responses-errors.html)
     */
    textResult?: TextRecordTextResultEnum;
    /**
     * An attempted phone number
     */
    toNumber?: string;
}
