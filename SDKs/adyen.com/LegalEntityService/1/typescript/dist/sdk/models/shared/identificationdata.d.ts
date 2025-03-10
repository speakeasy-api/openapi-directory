import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of document, used when providing an ID number or uploading a document. The possible values depend on the legal entity type.
 *
 * @remarks
 *
 * When providing ID numbers:
 * * For **individual**, the `type` values can be **driversLicense**, **identityCard**, **nationalIdNumber**, or **passport**.
 *
 * When uploading documents:
 * * For **organization**, the `type` values can be **proofOfAddress**, **registrationDocument**, **taxDocument**, **proofOfOwnership**, or **proofOfIndustry**.
 *
 * * For **individual**, the `type` values can be **identityCard**, **driversLicense**, **proofOfNationalIdNumber**, **proofOfResidency**, or **proofOfIndustry**.
 *
 * * Use **bankStatement** to upload documents for a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id).
 */
export declare enum IdentificationDataTypeEnum {
    BankStatement = "bankStatement",
    DriversLicense = "driversLicense",
    IdentityCard = "identityCard",
    NationalIdNumber = "nationalIdNumber",
    Passport = "passport",
    ProofOfAddress = "proofOfAddress",
    ProofOfNationalIdNumber = "proofOfNationalIdNumber",
    ProofOfResidency = "proofOfResidency",
    RegistrationDocument = "registrationDocument",
    TaxDocument = "taxDocument",
    ProofOfIndustry = "proofOfIndustry"
}
export declare class IdentificationData extends SpeakeasyBase {
    /**
     * The card number of the document that was issued (AU only).
     */
    cardNumber?: string;
    /**
     * The expiry date of the document, in YYYY-MM-DD format.
     */
    expiryDate?: string;
    /**
     * The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the document was issued. For example, **US**.
     */
    issuerCountry?: string;
    /**
     * The state or province where the document was issued (AU only).
     */
    issuerState?: string;
    /**
     * Applies only to individuals in the US. Set to **true** if the individual does not have an SSN. To verify their identity, Adyen will require them to upload an ID document.
     */
    nationalIdExempt?: boolean;
    /**
     * The number in the document.
     */
    number?: string;
    /**
     * Type of document, used when providing an ID number or uploading a document. The possible values depend on the legal entity type.
     *
     * @remarks
     *
     * When providing ID numbers:
     * * For **individual**, the `type` values can be **driversLicense**, **identityCard**, **nationalIdNumber**, or **passport**.
     *
     * When uploading documents:
     * * For **organization**, the `type` values can be **proofOfAddress**, **registrationDocument**, **taxDocument**, **proofOfOwnership**, or **proofOfIndustry**.
     *
     * * For **individual**, the `type` values can be **identityCard**, **driversLicense**, **proofOfNationalIdNumber**, **proofOfResidency**, or **proofOfIndustry**.
     *
     * * Use **bankStatement** to upload documents for a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id).
     */
    type: IdentificationDataTypeEnum;
}
