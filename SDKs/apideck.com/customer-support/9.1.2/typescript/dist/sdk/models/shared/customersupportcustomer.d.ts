import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { BankAccount } from "./bankaccount";
import { CurrencyEnum } from "./currencyenum";
import { Email } from "./email";
import { PhoneNumber } from "./phonenumber";
/**
 * Customer status
 */
export declare enum CustomerSupportCustomerStatusEnum {
    Active = "active",
    Archived = "archived",
    GdprErasureRequest = "gdpr-erasure-request",
    Unknown = "unknown"
}
export declare class CustomerSupportCustomerInput extends SpeakeasyBase {
    addresses?: Address[];
    bankAccounts?: BankAccount;
    /**
     * The name of the company.
     */
    companyName?: string;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    emails?: Email[];
    /**
     * The first name of the person.
     */
    firstName?: string;
    individual?: boolean;
    /**
     * The last name of the person.
     */
    lastName?: string;
    notes?: string;
    phoneNumbers?: PhoneNumber[];
    /**
     * Customer status
     */
    status?: CustomerSupportCustomerStatusEnum;
    taxNumber?: string;
}
export declare class CustomerSupportCustomer extends SpeakeasyBase {
    addresses?: Address[];
    bankAccounts?: BankAccount;
    /**
     * The name of the company.
     */
    companyName?: string;
    /**
     * The date and time when the object was created.
     */
    createdAt?: Date;
    /**
     * The user who created the object.
     */
    createdBy?: string;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    emails?: Email[];
    /**
     * The first name of the person.
     */
    firstName?: string;
    /**
     * A unique identifier for an object.
     */
    id?: string;
    individual?: boolean;
    /**
     * The last name of the person.
     */
    lastName?: string;
    notes?: string;
    phoneNumbers?: PhoneNumber[];
    /**
     * Customer status
     */
    status?: CustomerSupportCustomerStatusEnum;
    taxNumber?: string;
    /**
     * The date and time when the object was last updated.
     */
    updatedAt?: Date;
    /**
     * The user who last updated the object.
     */
    updatedBy?: string;
}
