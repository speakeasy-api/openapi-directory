import { SpeakeasyBase } from "../../../internal/utils";
import { SuggestedBids } from "./suggestedbids";
/**
 * A type that defines the keywords of the paged collection.
 */
export declare class TargetedBidsPagedCollection extends SpeakeasyBase {
    /**
     * A list of bids in the paginated collection.
     */
    suggestedBids?: SuggestedBids[];
}
