import { SpeakeasyBase } from "../../../internal/utils";
import { ContactAddress } from "./contactaddress";
import { PhoneNumber } from "./phonenumber";
/**
 * This complex type contains contact information for an individual buyer or seller.
 */
export declare class Contact extends SpeakeasyBase {
    /**
     * The company name with which the contact is associated.
     */
    companyName?: string;
    /**
     * This complex type specifies the details of a geographical address.
     */
    contactAddress?: ContactAddress;
    /**
     * The contact's full name.
     */
    fullName?: string;
    /**
     * This complex type contains a string field representing a telephone number.
     */
    primaryPhone?: PhoneNumber;
}
