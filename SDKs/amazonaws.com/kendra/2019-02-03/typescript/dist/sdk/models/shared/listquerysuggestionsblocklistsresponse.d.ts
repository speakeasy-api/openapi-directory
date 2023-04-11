import { SpeakeasyBase } from "../../../internal/utils";
import { QuerySuggestionsBlockListSummary } from "./querysuggestionsblocklistsummary";
/**
 * Success
 */
export declare class ListQuerySuggestionsBlockListsResponse extends SpeakeasyBase {
    blockListSummaryItems?: QuerySuggestionsBlockListSummary[];
    nextToken?: string;
}
