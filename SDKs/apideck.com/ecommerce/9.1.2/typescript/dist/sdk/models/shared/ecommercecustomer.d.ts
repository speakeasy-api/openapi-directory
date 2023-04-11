import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
import { Email } from "./email";
import { LinkedEcommerceOrder } from "./linkedecommerceorder";
import { PhoneNumber } from "./phonenumber";
export declare enum EcommerceCustomerAddressesTypeEnum {
    Billing = "billing",
    Shipping = "shipping",
    Other = "other"
}
export declare class EcommerceCustomerAddresses extends SpeakeasyBase {
    /**
     * City of the customer
     */
    city?: string;
    /**
     * Country of the customer
     */
    country?: string;
    /**
     * A unique identifier for an object.
     */
    id?: string;
    /**
     * First line of the street address of the customer
     */
    line1?: string;
    /**
     * Second line of the street address of the customer
     */
    line2?: string;
    /**
     * Postal code of the customer
     */
    postalCode?: string;
    /**
     * State of the customer
     */
    state?: string;
    type?: EcommerceCustomerAddressesTypeEnum;
}
/**
 * The current status of the customer
 */
export declare enum EcommerceCustomerCustomerStatusEnum {
    Active = "active",
    Archived = "archived"
}
export declare class EcommerceCustomer extends SpeakeasyBase {
    /**
     * An array of addresses for the customer.
     */
    addresses?: EcommerceCustomerAddresses[];
    /**
     * Company name of the customer
     */
    companyName?: string;
    /**
     * The date and time when the object was created.
     */
    createdAt?: Date;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    /**
     * An array of email addresses for the customer.
     */
    emails?: Email[];
    /**
     * First name of the customer
     */
    firstName?: string;
    /**
     * A unique identifier for an object.
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
    orders?: LinkedEcommerceOrder[];
    /**
     * An array of phone numbers for the customer.
     */
    phoneNumbers?: PhoneNumber[];
    /**
     * The current status of the customer
     */
    status?: EcommerceCustomerCustomerStatusEnum;
    /**
     * The date and time when the object was last updated.
     */
    updatedAt?: Date;
}
