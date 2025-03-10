import { SpeakeasyBase } from "../../../internal/utils";
import { PersonalDocumentData } from "./personaldocumentdata";
export declare class ViasPersonalData extends SpeakeasyBase {
    /**
     * The person's date of birth, in ISO-8601 YYYY-MM-DD format. For example, **2000-01-31**.
     */
    dateOfBirth?: string;
    /**
     * Array that contains information about the person's identification document. You can submit only one entry per document type.
     */
    documentData?: PersonalDocumentData[];
    /**
     * The nationality of the person represented by a two-character country code,  in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. For example, **NL**.
     *
     * @remarks
     *
     */
    nationality?: string;
}
