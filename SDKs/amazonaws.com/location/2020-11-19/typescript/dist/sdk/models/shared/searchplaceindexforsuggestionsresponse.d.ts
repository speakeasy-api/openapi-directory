import { SpeakeasyBase } from "../../../internal/utils";
import { SearchForSuggestionsResult } from "./searchforsuggestionsresult";
import { SearchPlaceIndexForSuggestionsSummary } from "./searchplaceindexforsuggestionssummary";
/**
 * Success
 */
export declare class SearchPlaceIndexForSuggestionsResponse extends SpeakeasyBase {
    results: SearchForSuggestionsResult[];
    summary: SearchPlaceIndexForSuggestionsSummary;
}
