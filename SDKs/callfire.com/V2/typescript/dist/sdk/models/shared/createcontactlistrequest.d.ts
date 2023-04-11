import { SpeakeasyBase } from "../../../internal/utils";
import { Contact } from "./contact";
/**
 * A request object is used to create a contact list from one of available contact sources
 */
export declare class CreateContactListRequest extends SpeakeasyBase {
    /**
     * A list of ids of existing contacts in CallFire system
     */
    contactIds?: number[];
    /**
     * List of numbers in E.164 format (11-digit). Example: 12132000384
     */
    contactNumbers?: string[];
    /**
     * A type of a phone number (homePhone, workPhone, mobilePhone). This parameter is used with contactNumbers and specifies which types of phone numbers are included to a contact list
     */
    contactNumbersField?: string;
    /**
     * A list of new contact objects to be added
     */
    contacts?: Contact[];
    /**
     * A name of a contact list
     */
    name?: string;
    /**
     * A flag to indicate how to define property names for contacts. If true, uses the field and property names exactly as defined. If false will assign custom properties and fields to A, B, C, etc
     */
    useCustomFields?: boolean;
}
