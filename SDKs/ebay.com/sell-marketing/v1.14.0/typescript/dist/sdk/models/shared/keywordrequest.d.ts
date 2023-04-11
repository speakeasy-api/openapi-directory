import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A type that defines the fields used by the <b>Keyword</b> method.
 */
export declare class KeywordRequest extends SpeakeasyBase {
    /**
     * The text of the keyword. Keywords are not case sensitive and compound words can be used without additional encoding (for example, tennis ball).<br /><br /><b>Maximum number of characters: </b>100 <br /><br /><b>Maximum number of words: </b>10
     */
    keywordText?: string;
    /**
     * A field that defines the match type for the keyword.<br /><br /><b>Valid Values:</b><ul><li><code>BROAD</code></li><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:MatchTypeEnum'>eBay API documentation</a>
     */
    matchType?: string;
}
