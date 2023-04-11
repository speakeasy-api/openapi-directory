import { SpeakeasyBase } from "../../../internal/utils";
import { SuggestionHighlight } from "./suggestionhighlight";
/**
 * Provides text and information about where to highlight the query suggestion text.
 */
export declare class SuggestionTextWithHighlights extends SpeakeasyBase {
    highlights?: SuggestionHighlight[];
    text?: string;
}
