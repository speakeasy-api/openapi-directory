import { SpeakeasyBase } from "../../../internal/utils";
import { RegexPatternSetSummary } from "./regexpatternsetsummary";
/**
 * Success
 */
export declare class ListRegexPatternSetsResponse extends SpeakeasyBase {
    nextMarker?: string;
    regexPatternSets?: RegexPatternSetSummary[];
}
