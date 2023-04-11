import { SpeakeasyBase } from "../../../internal/utils";
import { ThesaurusStatusEnum } from "./thesaurusstatusenum";
/**
 * An array of summary information for a thesaurus or multiple thesauri.
 */
export declare class ThesaurusSummary extends SpeakeasyBase {
    createdAt?: Date;
    id?: string;
    name?: string;
    status?: ThesaurusStatusEnum;
    updatedAt?: Date;
}
