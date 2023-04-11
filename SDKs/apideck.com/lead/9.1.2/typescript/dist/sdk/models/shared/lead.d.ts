import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { CurrencyEnum } from "./currencyenum";
import { CustomField } from "./customfield";
import { Email } from "./email";
import { PhoneNumber } from "./phonenumber";
import { SocialLink } from "./sociallink";
import { Website } from "./website";
export declare class LeadInput extends SpeakeasyBase {
    addresses?: Address[];
    companyId?: string;
    companyName: string;
    contactId?: string;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    customFields?: CustomField[];
    description?: string;
    emails?: Email[];
    fax?: string;
    firstName?: string;
    /**
     * language code according to ISO 639-1. For the United States - EN
     */
    language?: string;
    lastName?: string;
    leadSource?: string;
    monetaryAmount?: number;
    name: string;
    ownerId?: string;
    phoneNumbers?: PhoneNumber[];
    prefix?: string;
    socialLinks?: SocialLink[];
    status?: string;
    tags?: string[];
    title?: string;
    websites?: Website[];
}
export declare class Lead extends SpeakeasyBase {
    addresses?: Address[];
    companyId?: string;
    companyName: string;
    contactId?: string;
    createdAt?: string;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    customFields?: CustomField[];
    description?: string;
    emails?: Email[];
    fax?: string;
    firstName?: string;
    id?: string;
    /**
     * language code according to ISO 639-1. For the United States - EN
     */
    language?: string;
    lastName?: string;
    leadSource?: string;
    monetaryAmount?: number;
    name: string;
    ownerId?: string;
    phoneNumbers?: PhoneNumber[];
    prefix?: string;
    socialLinks?: SocialLink[];
    status?: string;
    tags?: string[];
    title?: string;
    updatedAt?: string;
    websites?: Website[];
}
