import { SpeakeasyBase } from "../../../internal/utils";
/**
 * CallFire allows you to set up auto reply messages for your numbers CallFire allows you to set up auto reply messages for your numbers and keywords. You can set a general auto reply for anyone who texts your number (keyword). Also you can include a text to match, so that the auto reply would be sent only to those recipients whose texts the matched text
 */
export declare class TextAutoReply extends SpeakeasyBase {
    /**
     * An id of a text auto reply
     */
    id?: number;
    /**
     * Setup autoreply for a given keyword
     */
    keyword?: string;
    /**
     * Text to match. If it is set then autoreply will be sent to a person who texted message with matched text. Case insensitive, if parameter is not specified then all texts will be matched
     */
    match?: string;
    /**
     * A text message to return as an auto reply
     */
    message?: string;
    /**
     * Setup autoreply for a given phone number, E.164 format (11-digit). Example: 12132000384
     */
    number?: string;
}
