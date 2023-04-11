import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { PhoneNumber } from "./phonenumber";
import { StockData } from "./stockdata";
import { WebData, WebDataInput } from "./webdata";
/**
 * The reason the organization has not provided a tax identifier.
 *
 * @remarks
 *
 * Possible values: **industryExemption**, **belowTaxThreshold**.
 */
export declare enum OrganizationTaxIdAbsenceReasonEnum {
    IndustryExemption = "industryExemption",
    BelowTaxThreshold = "belowTaxThreshold"
}
/**
 * Type of organization.
 *
 * @remarks
 *
 * Possible values: **associationIncorporated**, **governmentalOrganization**, **listedPublicCompany**, **nonProfit**, **partnershipIncorporated**, **privateCompany**.
 */
export declare enum OrganizationTypeEnum {
    AssociationIncorporated = "associationIncorporated",
    GovernmentalOrganization = "governmentalOrganization",
    ListedPublicCompany = "listedPublicCompany",
    NonProfit = "nonProfit",
    PartnershipIncorporated = "partnershipIncorporated",
    PrivateCompany = "privateCompany"
}
export declare class OrganizationInput extends SpeakeasyBase {
    /**
     * Your description for the organization.
     */
    description?: string;
    /**
     * The organization's trading name, if different from the registered legal name.
     */
    doingBusinessAs?: string;
    /**
     * The email address of the legal entity.
     */
    email?: string;
    /**
     * The organization's legal name.
     */
    legalName: string;
    phone?: PhoneNumber;
    principalPlaceOfBusiness?: Address;
    registeredAddress: Address;
    /**
     * The organization's registration number.
     */
    registrationNumber?: string;
    stockData?: StockData;
    /**
     * Indicates whether the legal entity is exempt from tax. When **true**, the `taxIdAbsenceReason` must be provided.
     *
     * @remarks
     *
     *
     */
    taxExempt?: boolean;
    /**
     * The organization's tax identifier.
     */
    taxId?: string;
    /**
     * The reason the organization has not provided a tax identifier.
     *
     * @remarks
     *
     * Possible values: **industryExemption**, **belowTaxThreshold**.
     */
    taxIdAbsenceReason?: OrganizationTaxIdAbsenceReasonEnum;
    /**
     * Type of organization.
     *
     * @remarks
     *
     * Possible values: **associationIncorporated**, **governmentalOrganization**, **listedPublicCompany**, **nonProfit**, **partnershipIncorporated**, **privateCompany**.
     */
    type?: OrganizationTypeEnum;
    webData?: WebDataInput;
}
export declare class Organization extends SpeakeasyBase {
    /**
     * Your description for the organization.
     */
    description?: string;
    /**
     * The organization's trading name, if different from the registered legal name.
     */
    doingBusinessAs?: string;
    /**
     * The email address of the legal entity.
     */
    email?: string;
    /**
     * The organization's legal name.
     */
    legalName: string;
    phone?: PhoneNumber;
    principalPlaceOfBusiness?: Address;
    registeredAddress: Address;
    /**
     * The organization's registration number.
     */
    registrationNumber?: string;
    stockData?: StockData;
    /**
     * Indicates whether the legal entity is exempt from tax. When **true**, the `taxIdAbsenceReason` must be provided.
     *
     * @remarks
     *
     *
     */
    taxExempt?: boolean;
    /**
     * The organization's tax identifier.
     */
    taxId?: string;
    /**
     * The reason the organization has not provided a tax identifier.
     *
     * @remarks
     *
     * Possible values: **industryExemption**, **belowTaxThreshold**.
     */
    taxIdAbsenceReason?: OrganizationTaxIdAbsenceReasonEnum;
    /**
     * Type of organization.
     *
     * @remarks
     *
     * Possible values: **associationIncorporated**, **governmentalOrganization**, **listedPublicCompany**, **nonProfit**, **partnershipIncorporated**, **privateCompany**.
     */
    type?: OrganizationTypeEnum;
    webData?: WebData;
}
