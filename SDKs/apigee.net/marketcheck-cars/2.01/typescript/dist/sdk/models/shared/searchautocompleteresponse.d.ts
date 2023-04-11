import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchAutoCompleteResponseTerms extends SpeakeasyBase {
    /**
     * The number of listings with item as value for given field
     */
    count?: number;
    /**
     * The actual term that either has prefix or contains given input
     */
    item?: string;
}
/**
 * Search auto complete query response
 */
export declare class SearchAutoCompleteResponse extends SpeakeasyBase {
    terms?: SearchAutoCompleteResponseTerms[];
}
