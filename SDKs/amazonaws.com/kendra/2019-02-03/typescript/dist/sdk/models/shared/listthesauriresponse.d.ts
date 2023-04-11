import { SpeakeasyBase } from "../../../internal/utils";
import { ThesaurusSummary } from "./thesaurussummary";
/**
 * Success
 */
export declare class ListThesauriResponse extends SpeakeasyBase {
    nextToken?: string;
    thesaurusSummaryItems?: ThesaurusSummary[];
}
