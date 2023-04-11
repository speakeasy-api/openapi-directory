import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The organization's business type.
 *
 * @remarks
 *
 * Possible values: **other**, **listedPublicCompany**, **subsidiaryOfListedPublicCompany**, **governmentalOrganization**, **internationalOrganization**, **financialInstitution**.
 */
export declare enum TaxReportingClassificationBusinessTypeEnum {
    Other = "other",
    ListedPublicCompany = "listedPublicCompany",
    SubsidiaryOfListedPublicCompany = "subsidiaryOfListedPublicCompany",
    GovernmentalOrganization = "governmentalOrganization",
    InternationalOrganization = "internationalOrganization",
    FinancialInstitution = "financialInstitution."
}
/**
 * The organization's main source of income.
 *
 * @remarks
 *
 * Possible values: **businessOperation**, **realEstateSales**, **investmentInterestOrRoyalty**, **propertyRental**, **other**.
 */
export declare enum TaxReportingClassificationMainSourceOfIncomeEnum {
    BusinessOperation = "businessOperation",
    RealEstateSales = "realEstateSales",
    InvestmentInterestOrRoyalty = "investmentInterestOrRoyalty",
    PropertyRental = "propertyRental",
    Other = "other"
}
/**
 * The tax reporting classification type.
 *
 * @remarks
 *
 * Possible values: **nonFinancialNonReportable**, **financialNonReportable**, **nonFinancialActive**, **nonFinancialPassive**.
 */
export declare enum TaxReportingClassificationTypeEnum {
    NonFinancialNonReportable = "nonFinancialNonReportable",
    FinancialNonReportable = "financialNonReportable",
    NonFinancialActive = "nonFinancialActive",
    NonFinancialPassive = "nonFinancialPassive"
}
export declare class TaxReportingClassification extends SpeakeasyBase {
    /**
     * The organization's business type.
     *
     * @remarks
     *
     * Possible values: **other**, **listedPublicCompany**, **subsidiaryOfListedPublicCompany**, **governmentalOrganization**, **internationalOrganization**, **financialInstitution**.
     */
    businessType?: TaxReportingClassificationBusinessTypeEnum;
    /**
     * The Global Intermediary Identification Number (GIIN) required for FATCA.
     */
    financialInstitutionNumber?: string;
    /**
     * The organization's main source of income.
     *
     * @remarks
     *
     * Possible values: **businessOperation**, **realEstateSales**, **investmentInterestOrRoyalty**, **propertyRental**, **other**.
     */
    mainSourceOfIncome?: TaxReportingClassificationMainSourceOfIncomeEnum;
    /**
     * The tax reporting classification type.
     *
     * @remarks
     *
     * Possible values: **nonFinancialNonReportable**, **financialNonReportable**, **nonFinancialActive**, **nonFinancialPassive**.
     */
    type?: TaxReportingClassificationTypeEnum;
}
