import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { BankAccount } from "./bankaccount";
import { CurrencyEnum } from "./currencyenum";
import { Email } from "./email";
import { LinkedLedgerAccount, LinkedLedgerAccountInput } from "./linkedledgeraccount";
import { LinkedParentCustomer } from "./linkedparentcustomer";
import { LinkedTaxRate, LinkedTaxRateInput } from "./linkedtaxrate";
import { PhoneNumber } from "./phonenumber";
import { Website } from "./website";
/**
 * Customer status
 */
export declare enum AccountingCustomerStatusEnum {
    Active = "active",
    Inactive = "inactive",
    Archived = "archived",
    GdprErasureRequest = "gdpr-erasure-request",
    Unknown = "unknown"
}
export declare class AccountingCustomerInput extends SpeakeasyBase {
    account?: LinkedLedgerAccountInput;
    addresses?: Address[];
    bankAccounts?: BankAccount[];
    /**
     * The name of the company.
     */
    companyName?: string;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    /**
     * Display ID
     */
    displayId?: string;
    /**
     * Display name
     */
    displayName?: string;
    emails?: Email[];
    /**
     * The first name of the person.
     */
    firstName?: string;
    /**
     * Is this an individual or business customer
     */
    individual?: boolean;
    /**
     * The last name of the person.
     */
    lastName?: string;
    /**
     * Middle name of the person.
     */
    middleName?: string;
    /**
     * Some notes about this customer
     */
    notes?: string;
    /**
     * The parent customer this entity is linked to.
     */
    parent?: LinkedParentCustomer;
    phoneNumbers?: PhoneNumber[];
    /**
     * If true, indicates this is a Project.
     */
    project?: boolean;
    /**
     * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
     */
    rowVersion?: string;
    /**
     * Customer status
     */
    status?: AccountingCustomerStatusEnum;
    suffix?: string;
    taxNumber?: string;
    taxRate?: LinkedTaxRateInput;
    /**
     * The job title of the person.
     */
    title?: string;
    websites?: Website[];
}
export declare class AccountingCustomer extends SpeakeasyBase {
    account?: LinkedLedgerAccount;
    addresses?: Address[];
    bankAccounts?: BankAccount[];
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
    /**
     * Display ID
     */
    displayId?: string;
    /**
     * Display name
     */
    displayName?: string;
    /**
     * The third-party API ID of original entity
     */
    downstreamId?: string;
    emails?: Email[];
    /**
     * The first name of the person.
     */
    firstName?: string;
    /**
     * A unique identifier for an object.
     */
    id: string;
    /**
     * Is this an individual or business customer
     */
    individual?: boolean;
    /**
     * The last name of the person.
     */
    lastName?: string;
    /**
     * Middle name of the person.
     */
    middleName?: string;
    /**
     * Some notes about this customer
     */
    notes?: string;
    /**
     * The parent customer this entity is linked to.
     */
    parent?: LinkedParentCustomer;
    phoneNumbers?: PhoneNumber[];
    /**
     * If true, indicates this is a Project.
     */
    project?: boolean;
    /**
     * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
     */
    rowVersion?: string;
    /**
     * Customer status
     */
    status?: AccountingCustomerStatusEnum;
    suffix?: string;
    taxNumber?: string;
    taxRate?: LinkedTaxRate;
    /**
     * The job title of the person.
     */
    title?: string;
    /**
     * The date and time when the object was last updated.
     */
    updatedAt?: Date;
    /**
     * The user who last updated the object.
     */
    updatedBy?: string;
    websites?: Website[];
}
