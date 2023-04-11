import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A recipient of a campaign action. It can be a phone number, contact, or contact list with attributes added to an action, one of these values should be set
 */
export declare class Recipient extends SpeakeasyBase {
    /**
     * Map of user-defined string attributes associated with recipient
     */
    attributes?: Record<string, string>;
    /**
     * An id of existing contact used as recipient
     */
    contactId?: number;
    /**
     * ~
     */
    fromNumber?: string;
    /**
     * A recipient's phone number in E.164 format (11-digit) or short code. Example: 12132000384, 67076
     */
    phoneNumber?: string;
}
