import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { PhoneNumber } from "./phonenumber";
import { StockData } from "./stockdata";
import { TaxInformation } from "./taxinformation";
import { TaxReportingClassification } from "./taxreportingclassification";
import { WebData, WebDataInput } from "./webdata";
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
/**
 * The reason the organization has not provided a VAT number.
 *
 * @remarks
 *
 * Possible values: **industryExemption**, **belowTaxThreshold**.
 */
export declare enum OrganizationVatAbsenceReasonEnum {
    IndustryExemption = "industryExemption",
    BelowTaxThreshold = "belowTaxThreshold"
}
export declare class OrganizationInput extends SpeakeasyBase {
    /**
     * The date when the organization was incorporated in YYYY-MM-DD format.
     */
    dateOfIncorporation?: string;
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
     * The tax information of the organization.
     */
    taxInformation?: TaxInformation[];
    taxReportingClassification?: TaxReportingClassification;
    /**
     * Type of organization.
     *
     * @remarks
     *
     * Possible values: **associationIncorporated**, **governmentalOrganization**, **listedPublicCompany**, **nonProfit**, **partnershipIncorporated**, **privateCompany**.
     */
    type?: OrganizationTypeEnum;
    /**
     * The reason the organization has not provided a VAT number.
     *
     * @remarks
     *
     * Possible values: **industryExemption**, **belowTaxThreshold**.
     */
    vatAbsenceReason?: OrganizationVatAbsenceReasonEnum;
    /**
     * The organization's VAT number.
     */
    vatNumber?: string;
    webData?: WebDataInput;
}
export declare class Organization extends SpeakeasyBase {
    /**
     * The date when the organization was incorporated in YYYY-MM-DD format.
     */
    dateOfIncorporation?: string;
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
     * The tax information of the organization.
     */
    taxInformation?: TaxInformation[];
    taxReportingClassification?: TaxReportingClassification;
    /**
     * Type of organization.
     *
     * @remarks
     *
     * Possible values: **associationIncorporated**, **governmentalOrganization**, **listedPublicCompany**, **nonProfit**, **partnershipIncorporated**, **privateCompany**.
     */
    type?: OrganizationTypeEnum;
    /**
     * The reason the organization has not provided a VAT number.
     *
     * @remarks
     *
     * Possible values: **industryExemption**, **belowTaxThreshold**.
     */
    vatAbsenceReason?: OrganizationVatAbsenceReasonEnum;
    /**
     * The organization's VAT number.
     */
    vatNumber?: string;
    webData?: WebData;
}
