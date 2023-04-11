import { SpeakeasyBase } from "../../../internal/utils";
import { Media } from "./media";
/**
 * A recipient of a text message. You should provide either phone number or contact id of existing contact
 */
export declare class TextRecipient extends SpeakeasyBase {
    /**
     * A map of string attributes associated with a recipient
     */
    attributes?: Record<string, string>;
    /**
     * An id of existing contact in account
     */
    contactId?: number;
    /**
     * ~
     */
    fromNumber?: string;
    /**
     * A list of media objects' ids associated with a text message
     */
    media?: Media[];
    /**
     * A text message
     */
    message?: string;
    /**
     * Phone number in E.164 format (11-digit) or short code. Example: 12132000384, 67076
     */
    phoneNumber?: string;
}
