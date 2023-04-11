import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
/**
 * A type that defines the response fields used by the <b>Keyword</b> method.
 */
export declare class KeywordResponse extends SpeakeasyBase {
    /**
     * The identifier of the ad group that the keyword was added to.
     */
    adGroupId?: string;
    /**
     * This container will be returned if there is an issue creating the corresponding keyword and/or adding that keyword to the corresponding ad group.
     */
    errors?: ErrorT[];
    /**
     * The getKeyword URI for the keyword, which is used to retrieve the keyword. This URI will be returned for each successfully created keyword.
     */
    href?: string;
    /**
     * A unique eBay-assigned ID for a keyword that is generated for an ad group. This keyword ID will be generated for each successfully created keyword.
     */
    keywordId?: string;
    /**
     * The text of the keyword.
     */
    keywordText?: string;
    /**
     * A field that defines the match type for the keyword.<br /><br /><b>Valid Values:</b><ul><li><code>BROAD</code></li><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:MatchTypeEnum'>eBay API documentation</a>
     */
    matchType?: string;
    /**
     * An HTTP status code is returned for each keyword to indicate the success or failure of adding that keyword to the ad group.
     */
    statusCode?: number;
}
