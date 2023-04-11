import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
/**
 * A type that contains the details for keywords that are associated with an ad group.<br /><br /><span class="tablenote"><b>Note:</b> This type only applies to the Cost Per Click (CPC) funding model; it does not apply to the Cost Per Sale (CPS) funding model.</span>
 */
export declare class Keyword extends SpeakeasyBase {
    /**
     * This field identifies the ad group that the keyword is associated with.
     */
    adGroupId?: string;
    /**
     * A complex type that describes the value of a monetary amount as represented by a global currency.
     */
    bid?: Amount;
    /**
     * The unique identifier of a keyword.
     */
    keywordId?: string;
    /**
     * The status of the keyword.<br /><br /><b>Valid Values:</b><ul><li><code>ACTIVE</code></li><li><code>PAUSED</code></li><li><code>ARCHIVED</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:KeywordStatusEnum'>eBay API documentation</a>
     */
    keywordStatus?: string;
    /**
     * The text of the keyword.
     */
    keywordText?: string;
    /**
     * A field that defines the match type for the keyword.<br /><br /><b>Valid Values:</b><ul><li><code>BROAD</code></li><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:MatchTypeEnum'>eBay API documentation</a>
     */
    matchType?: string;
}
