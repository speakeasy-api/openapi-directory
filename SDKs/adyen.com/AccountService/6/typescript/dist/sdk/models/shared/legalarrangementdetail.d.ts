import { SpeakeasyBase } from "../../../internal/utils";
import { LegalArrangementEntityDetail } from "./legalarrangemententitydetail";
import { ViasAddress } from "./viasaddress";
/**
 * The form of legal arrangement. Required if `type` is **Trust** or **Partnership**.
 *
 * @remarks
 *
 * The possible values depend on the `type`.
 *
 * - For `type` **Trust**:  **CashManagementTrust**, **CorporateUnitTrust**, **DeceasedEstate**, **DiscretionaryInvestmentTrust**, **DiscretionaryServicesManagementTrust**, **DiscretionaryTradingTrust**, **FirstHomeSaverAccountsTrust**, **FixedTrust**, **FixedUnitTrust**, **HybridTrust**, **ListedPublicUnitTrust**, **OtherTrust**, **PooledSuperannuationTrust**, **PublicTradingTrust**, or **UnlistedPublicUnitTrust**.
 *
 * - For `type` **Partnership**: **LimitedPartnership**, **FamilyPartnership**, or **OtherPartnership**
 */
export declare enum LegalArrangementDetailLegalFormEnum {
    CashManagementTrust = "CashManagementTrust",
    CorporateUnitTrust = "CorporateUnitTrust",
    DeceasedEstate = "DeceasedEstate",
    DiscretionaryInvestmentTrust = "DiscretionaryInvestmentTrust",
    DiscretionaryServicesManagementTrust = "DiscretionaryServicesManagementTrust",
    DiscretionaryTradingTrust = "DiscretionaryTradingTrust",
    FirstHomeSaverAccountsTrust = "FirstHomeSaverAccountsTrust",
    FixedTrust = "FixedTrust",
    FixedUnitTrust = "FixedUnitTrust",
    HybridTrust = "HybridTrust",
    ListedPublicUnitTrust = "ListedPublicUnitTrust",
    OtherTrust = "OtherTrust",
    PooledSuperannuationTrust = "PooledSuperannuationTrust",
    PublicTradingTrust = "PublicTradingTrust",
    UnlistedPublicUnitTrust = "UnlistedPublicUnitTrust",
    LimitedPartnership = "LimitedPartnership",
    FamilyPartnership = "FamilyPartnership",
    OtherPartnership = "OtherPartnership"
}
/**
 * The [type of legal arrangement](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/legal-arrangements#types-of-legal-arrangements).
 *
 * @remarks
 *
 * Possible values:
 *
 * - **Association**
 *
 * - **Partnership**
 *
 * - **SoleProprietorship**
 *
 * - **Trust**
 *
 *
 */
export declare enum LegalArrangementDetailTypeEnum {
    Association = "Association",
    Partnership = "Partnership",
    SoleProprietorship = "SoleProprietorship",
    Trust = "Trust"
}
export declare class LegalArrangementDetail extends SpeakeasyBase {
    address: ViasAddress;
    /**
     * Adyen-generated unique alphanumeric identifier (UUID) for the entry, returned in the response when you create a legal arrangement.
     *
     * @remarks
     * Use only when updating an account holder. If you include this field when creating an account holder, the request will fail.
     */
    legalArrangementCode?: string;
    /**
     * An array containing information about other entities that are part of the legal arrangement.
     */
    legalArrangementEntities?: LegalArrangementEntityDetail[];
    /**
     * Your reference for the legal arrangement. Must be between 3 to 128 characters.
     */
    legalArrangementReference?: string;
    /**
     * The form of legal arrangement. Required if `type` is **Trust** or **Partnership**.
     *
     * @remarks
     *
     * The possible values depend on the `type`.
     *
     * - For `type` **Trust**:  **CashManagementTrust**, **CorporateUnitTrust**, **DeceasedEstate**, **DiscretionaryInvestmentTrust**, **DiscretionaryServicesManagementTrust**, **DiscretionaryTradingTrust**, **FirstHomeSaverAccountsTrust**, **FixedTrust**, **FixedUnitTrust**, **HybridTrust**, **ListedPublicUnitTrust**, **OtherTrust**, **PooledSuperannuationTrust**, **PublicTradingTrust**, or **UnlistedPublicUnitTrust**.
     *
     * - For `type` **Partnership**: **LimitedPartnership**, **FamilyPartnership**, or **OtherPartnership**
     */
    legalForm?: LegalArrangementDetailLegalFormEnum;
    /**
     * The legal name of the legal arrangement. Minimum length: 3 characters.
     */
    name: string;
    /**
     * The registration number of the legal arrangement.
     */
    registrationNumber?: string;
    /**
     * The tax identification number of the legal arrangement.
     */
    taxNumber?: string;
    /**
     * The [type of legal arrangement](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/legal-arrangements#types-of-legal-arrangements).
     *
     * @remarks
     *
     * Possible values:
     *
     * - **Association**
     *
     * - **Partnership**
     *
     * - **SoleProprietorship**
     *
     * - **Trust**
     *
     *
     */
    type: LegalArrangementDetailTypeEnum;
}
