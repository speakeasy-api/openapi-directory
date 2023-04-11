import { SpeakeasyBase } from "../../../internal/utils";
import { Email } from "./email";
import { PhoneNumber } from "./phonenumber";
/**
 * The customer this entity is linked to.
 */
export declare class LinkedEcommerceCustomer extends SpeakeasyBase {
    /**
     * Company name of the customer
     */
    companyName?: string;
    emails?: Email[];
    /**
     * First name of the customer
     */
    firstName?: string;
    /**
     * The ID of the customer this entity is linked to.
     */
    id: string;
    /**
     * Last name of the customer
     */
    lastName?: string;
    /**
     * Full name of the customer
     */
    name?: string;
    phoneNumbers?: PhoneNumber[];
}
