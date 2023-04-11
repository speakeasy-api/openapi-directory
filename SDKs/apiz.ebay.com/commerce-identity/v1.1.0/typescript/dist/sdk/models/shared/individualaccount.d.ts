import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { Phone } from "./phone";
/**
 * The type that defines the fields for the information of an individual account.
 */
export declare class IndividualAccount extends SpeakeasyBase {
    /**
     * The eBay user's registration email address.
     */
    email?: string;
    /**
     * The eBay user's first name.
     */
    firstName?: string;
    /**
     * The eBay user's last name.
     */
    lastName?: string;
    /**
     * The type that defines the fields for the details of a phone.
     */
    primaryPhone?: Phone;
    /**
     * The type that defines the fields for an address.
     */
    registrationAddress?: Address;
    /**
     * The type that defines the fields for the details of a phone.
     */
    secondaryPhone?: Phone;
}
