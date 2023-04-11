import { SpeakeasyBase } from "../../../internal/utils";
import { AdditionalInfo } from "./additionalinfo";
/**
 * The suggested keywords for the item.
 */
export declare class SuggestedKeywords extends SpeakeasyBase {
    /**
     * A container for the additional information and compiled insight data for suggested keywords.
     */
    additionalInfo?: AdditionalInfo[];
    /**
     * The text for the keyword.
     */
    keywordText?: string;
    /**
     * A field that defines the match type for the keyword.<br /><br /><b>Valid Values:</b><ul><li><code>BROAD</code></li><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:MatchTypeEnum'>eBay API documentation</a>
     */
    matchType?: string;
}
