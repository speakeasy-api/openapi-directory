import { SpeakeasyBase } from "../../../internal/utils";
import { Contact } from "./contact";
/**
 * Request object for adding new contacts to an existing contact list
 */
export declare class AddContactListContactsRequest extends SpeakeasyBase {
    /**
     * A list of ids of existing contacts in CallFire system
     */
    contactIds?: number[];
    /**
     * A phone number in E.164 format (11-digit). Examples: 12132000384
     */
    contactNumbers?: string[];
    /**
     * A type of phone number (homePhone, workPhone, mobilePhone). This parameter works together with contactNumbers and specifies which types of numbers are included to a list
     */
    contactNumbersField?: string;
    /**
     * A list of new contact objects which need to be added
     */
    contacts?: Contact[];
    /**
     * A flag to indicate how to define property names for contacts. If true, uses the field and property names exactly as defined. If false will assign custom properties and fields to A, B, C, etc
     */
    useCustomFields?: boolean;
}
