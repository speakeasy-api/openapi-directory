import { SpeakeasyBase } from "../../../internal/utils";
import { RegexMatchSetSummary } from "./regexmatchsetsummary";
/**
 * Success
 */
export declare class ListRegexMatchSetsResponse extends SpeakeasyBase {
    nextMarker?: string;
    regexMatchSets?: RegexMatchSetSummary[];
}
