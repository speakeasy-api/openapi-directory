import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A summary of the request sent by using <code>SearchPlaceIndexForSuggestions</code>.
 */
export declare class SearchPlaceIndexForSuggestionsSummary extends SpeakeasyBase {
    biasPosition?: number[];
    dataSource: string;
    filterBBox?: number[];
    filterCountries?: string[];
    language?: string;
    maxResults?: number;
    text: string;
}
