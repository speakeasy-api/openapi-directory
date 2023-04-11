import { SpeakeasyBase } from "../../../internal/utils";
import { Attachment } from "./attachment";
import { OwnerEntity } from "./ownerentity";
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
export declare enum DocumentTypeEnum {
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
export declare class DocumentInput extends SpeakeasyBase {
    attachment?: Attachment;
    /**
     * Array that contains the document. The array supports multiple attachments for uploading different sides or pages of a document.
     */
    attachments: Attachment[];
    /**
     * Your description for the document.
     */
    description: string;
    /**
     * The expiry date of the document, in YYYY-MM-DD format.
     */
    expiryDate?: string;
    /**
     * The filename of the document.
     */
    fileName?: string;
    /**
     * The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the document was issued. For example, **US**.
     */
    issuerCountry?: string;
    /**
     * The state or province where the document was issued (AU only).
     */
    issuerState?: string;
    /**
     * The number in the document.
     */
    number?: string;
    owner: OwnerEntity;
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
    type: DocumentTypeEnum;
}
/**
 * OK - the request has succeeded.
 */
export declare class Document extends SpeakeasyBase {
    attachment?: Attachment;
    /**
     * Array that contains the document. The array supports multiple attachments for uploading different sides or pages of a document.
     */
    attachments: Attachment[];
    /**
     * The creation date of the document.
     */
    creationDate?: Date;
    /**
     * Your description for the document.
     */
    description: string;
    /**
     * The expiry date of the document, in YYYY-MM-DD format.
     */
    expiryDate?: string;
    /**
     * The filename of the document.
     */
    fileName?: string;
    /**
     * The unique identifier of the document.
     */
    id: string;
    /**
     * The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the document was issued. For example, **US**.
     */
    issuerCountry?: string;
    /**
     * The state or province where the document was issued (AU only).
     */
    issuerState?: string;
    /**
     * The modification date of the document.
     */
    modificationDate?: Date;
    /**
     * The number in the document.
     */
    number?: string;
    owner: OwnerEntity;
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
    type: DocumentTypeEnum;
}
