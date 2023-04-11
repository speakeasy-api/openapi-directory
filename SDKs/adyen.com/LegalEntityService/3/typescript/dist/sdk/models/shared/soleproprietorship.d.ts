import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
/**
 * The reason for not providing a VAT number.
 *
 * @remarks
 *
 * Possible values: **industryExemption**, **belowTaxThreshold**.
 */
export declare enum SoleProprietorshipVatAbsenceReasonEnum {
    IndustryExemption = "industryExemption",
    BelowTaxThreshold = "belowTaxThreshold"
}
export declare class SoleProprietorship extends SpeakeasyBase {
    /**
     * The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the governing country.
     */
    countryOfGoverningLaw: string;
    /**
     * The date when the legal arrangement was incorporated in YYYY-MM-DD format.
     */
    dateOfIncorporation?: string;
    /**
     * The registered name, if different from the `name`.
     */
    doingBusinessAs?: string;
    /**
     * The legal name.
     */
    name: string;
    principalPlaceOfBusiness?: Address;
    registeredAddress: Address;
    /**
     * The registration number.
     */
    registrationNumber?: string;
    /**
     * The reason for not providing a VAT number.
     *
     * @remarks
     *
     * Possible values: **industryExemption**, **belowTaxThreshold**.
     */
    vatAbsenceReason?: SoleProprietorshipVatAbsenceReasonEnum;
    /**
     * The VAT number.
     */
    vatNumber?: string;
}
