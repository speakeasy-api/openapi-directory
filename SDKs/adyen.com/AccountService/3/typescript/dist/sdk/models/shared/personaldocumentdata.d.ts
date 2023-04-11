import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the document. Possible values: **ID**, **DRIVINGLICENSE**, **PASSPORT**, **SOCIALSECURITY**, **VISA**.
 *
 * @remarks
 *
 * To delete an existing entry for a document `type`, send only the `type` field in your request.
 */
export declare enum PersonalDocumentDataTypeEnum {
    Drivinglicense = "DRIVINGLICENSE",
    Id = "ID",
    Passport = "PASSPORT",
    Socialsecurity = "SOCIALSECURITY",
    Visa = "VISA"
}
export declare class PersonalDocumentData extends SpeakeasyBase {
    /**
     * The expiry date of the document,
     *
     * @remarks
     *  in ISO-8601 YYYY-MM-DD format. For example, **2000-01-31**.
     */
    expirationDate?: string;
    /**
     * The country where the document was issued, in the two-character
     *
     * @remarks
     * [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. For example, **NL**.
     */
    issuerCountry?: string;
    /**
     * The state where the document was issued (if applicable).
     */
    issuerState?: string;
    /**
     * The number in the document.
     */
    number?: string;
    /**
     * The type of the document. Possible values: **ID**, **DRIVINGLICENSE**, **PASSPORT**, **SOCIALSECURITY**, **VISA**.
     *
     * @remarks
     *
     * To delete an existing entry for a document `type`, send only the `type` field in your request.
     */
    type: PersonalDocumentDataTypeEnum;
}
