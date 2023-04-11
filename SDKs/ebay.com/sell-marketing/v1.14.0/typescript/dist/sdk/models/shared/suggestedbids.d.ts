import { SpeakeasyBase } from "../../../internal/utils";
import { ProposedBid } from "./proposedbid";
/**
 * The suggested bid rate for the item.
 */
export declare class SuggestedBids extends SpeakeasyBase {
    /**
     * The text for the keyword.
     */
    keywordText?: string;
    /**
     * A field that defines the match type for the keyword.<br /><br /><b>Valid Values:</b><ul><li><code>BROAD</code></li><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:MatchTypeEnum'>eBay API documentation</a>
     */
    matchType?: string;
    /**
     * A type that defines the data for a payment amount, such as the sale price.
     */
    proposedBid?: ProposedBid;
}
