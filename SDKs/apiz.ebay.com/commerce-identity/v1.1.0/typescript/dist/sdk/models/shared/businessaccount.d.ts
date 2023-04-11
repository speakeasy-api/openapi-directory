import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { Contact } from "./contact";
import { Phone } from "./phone";
/**
 * The type that defines the fields for the business account information.
 */
export declare class BusinessAccount extends SpeakeasyBase {
    /**
     * The type that defines the fields for an address.
     */
    address?: Address;
    /**
     * An additional name that is used for their business on eBay. The business name is returned in the name field.
     */
    doingBusinessAs?: string;
    /**
     * The email address of the business account.
     */
    email?: string;
    /**
     * The business name associated with the user's eBay account.
     */
    name?: string;
    /**
     * The type that defines the fields for the information of the contact person for the account.
     */
    primaryContact?: Contact;
    /**
     * The type that defines the fields for the details of a phone.
     */
    primaryPhone?: Phone;
    /**
     * The type that defines the fields for the details of a phone.
     */
    secondaryPhone?: Phone;
    /**
     * The business website address associated with the eBay account.
     */
    website?: string;
}
