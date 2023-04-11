import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { CurrencyEnum } from "./currencyenum";
import { Email } from "./email";
import { LinkedTaxRate } from "./linkedtaxrate";
import { PhoneNumber } from "./phonenumber";
/**
 * The start month of fiscal year.
 */
export declare enum CompanyInfoTheStartMonthOfFiscalYearEnum {
    January = "January",
    February = "February",
    March = "March",
    April = "April",
    May = "May",
    June = "June",
    July = "July",
    August = "August",
    September = "September",
    October = "October",
    November = "November",
    December = "December"
}
/**
 * Based on the status some functionality is enabled or disabled.
 */
export declare enum CompanyInfoCompanyStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
export declare class CompanyInfo extends SpeakeasyBase {
    addresses?: Address[];
    /**
     * Whether sales tax is calculated automatically for the company
     */
    automatedSalesTax?: boolean;
    /**
     * The name of the company.
     */
    companyName?: string;
    /**
     * Date when company file was created
     */
    companyStartDate?: Date;
    /**
     * country code according to ISO 3166-1 alpha-2.
     */
    country?: string;
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
    defaultSalesTax?: LinkedTaxRate;
    emails?: Email[];
    /**
     * The start month of fiscal year.
     */
    fiscalYearStartMonth?: CompanyInfoTheStartMonthOfFiscalYearEnum;
    /**
     * A unique identifier for an object.
     */
    id?: string;
    /**
     * language code according to ISO 639-1. For the United States - EN
     */
    language?: string;
    /**
     * The legal name of the company
     */
    legalName?: string;
    phoneNumbers?: PhoneNumber[];
    /**
     * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
     */
    rowVersion?: string;
    /**
     * Whether sales tax is enabled for the company
     */
    salesTaxEnabled?: boolean;
    salesTaxNumber?: string;
    /**
     * Based on the status some functionality is enabled or disabled.
     */
    status?: CompanyInfoCompanyStatusEnum;
    /**
     * The date and time when the object was last updated.
     */
    updatedAt?: Date;
    /**
     * The user who last updated the object.
     */
    updatedBy?: string;
}
