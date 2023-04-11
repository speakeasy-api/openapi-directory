import { SpeakeasyBase } from "../../../internal/utils";
import { SuggestedKeywords } from "./suggestedkeywords";
/**
 * A type that defines the keywords of the paged collection.
 */
export declare class TargetedKeywordsPagedCollection extends SpeakeasyBase {
    /**
     * A list of suggested keywords in the paged collection. <p> <span class="tablenote"><strong>Note:</strong> A relevancy check with items already present in the ad-group is performed even if item IDs associated with the ad-group are not explicitly passed in the request.</span></p>
     */
    suggestedKeywords?: SuggestedKeywords[];
}
