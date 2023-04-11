import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { BankAccount } from "./bankaccount";
import { CurrencyEnum } from "./currencyenum";
import { CustomField } from "./customfield";
import { Email } from "./email";
import { PhoneNumber } from "./phonenumber";
import { SocialLink } from "./sociallink";
import { Website } from "./website";
export declare class CompanyCompanyRowType extends SpeakeasyBase {
    id?: string;
    name?: string;
}
export declare class CompanyInput extends SpeakeasyBase {
    /**
     * An ABN Branch (also known as a GST Branch) is used if part of your business needs to account for GST separately from its parent entity.
     */
    abnBranch?: string;
    /**
     * An ABN is necessary for operating a business, while a TFN (Tax File Number) is required for any person working in Australia.
     */
    abnOrTfn?: string;
    /**
     * The Australian Company Number (ACN) is a nine digit number with the last digit being a check digit calculated using a modified modulus 10 calculation. ASIC has adopted a convention of always printing and displaying the ACN in the format XXX XXX XXX; three blocks of three characters, each block separated by a blank.
     */
    acn?: string;
    addresses?: Address[];
    /**
     * Annual revenue
     */
    annualRevenue?: string;
    bankAccounts?: BankAccount[];
    /**
     * The date of birth of the person.
     */
    birthday?: Date;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    customFields?: CustomField[];
    description?: string;
    emails?: Email[];
    fax?: string;
    /**
     * The first name of the person.
     */
    firstName?: string;
    image?: string;
    /**
     * Industry
     */
    industry?: string;
    /**
     * The last name of the person.
     */
    lastName?: string;
    name: string;
    /**
     * Number of employees
     */
    numberOfEmployees?: string;
    ownerId?: string;
    /**
     * Ownership
     */
    ownership?: string;
    payeeNumber?: string;
    phoneNumbers?: PhoneNumber[];
    readOnly?: boolean;
    rowType?: CompanyCompanyRowType;
    salesTaxNumber?: string;
    /**
     * A formal salutation for the person. For example, 'Mr', 'Mrs'
     */
    salutation?: string;
    socialLinks?: SocialLink[];
    status?: string;
    tags?: string[];
    /**
     * VAT number
     */
    vatNumber?: string;
    websites?: Website[];
}
export declare class Company extends SpeakeasyBase {
    /**
     * An ABN Branch (also known as a GST Branch) is used if part of your business needs to account for GST separately from its parent entity.
     */
    abnBranch?: string;
    /**
     * An ABN is necessary for operating a business, while a TFN (Tax File Number) is required for any person working in Australia.
     */
    abnOrTfn?: string;
    /**
     * The Australian Company Number (ACN) is a nine digit number with the last digit being a check digit calculated using a modified modulus 10 calculation. ASIC has adopted a convention of always printing and displaying the ACN in the format XXX XXX XXX; three blocks of three characters, each block separated by a blank.
     */
    acn?: string;
    addresses?: Address[];
    /**
     * Annual revenue
     */
    annualRevenue?: string;
    bankAccounts?: BankAccount[];
    /**
     * The date of birth of the person.
     */
    birthday?: Date;
    createdAt?: Date;
    createdBy?: string;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    customFields?: CustomField[];
    deleted?: boolean;
    description?: string;
    emails?: Email[];
    fax?: string;
    /**
     * The first name of the person.
     */
    firstName?: string;
    id?: string;
    image?: string;
    /**
     * Industry
     */
    industry?: string;
    interactionCount?: number;
    lastActivityAt?: Date;
    /**
     * The last name of the person.
     */
    lastName?: string;
    name: string;
    /**
     * Number of employees
     */
    numberOfEmployees?: string;
    ownerId?: string;
    /**
     * Ownership
     */
    ownership?: string;
    /**
     * Parent ID
     */
    parentId?: string;
    payeeNumber?: string;
    phoneNumbers?: PhoneNumber[];
    readOnly?: boolean;
    rowType?: CompanyCompanyRowType;
    salesTaxNumber?: string;
    /**
     * A formal salutation for the person. For example, 'Mr', 'Mrs'
     */
    salutation?: string;
    socialLinks?: SocialLink[];
    status?: string;
    tags?: string[];
    updatedAt?: Date;
    updatedBy?: string;
    /**
     * VAT number
     */
    vatNumber?: string;
    websites?: Website[];
}
