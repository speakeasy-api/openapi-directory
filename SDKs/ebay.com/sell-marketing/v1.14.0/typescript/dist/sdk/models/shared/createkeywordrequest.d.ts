import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
/**
 * A type that defines the fields for the <b>CreateKeyword</b> request.
 */
export declare class CreateKeywordRequest extends SpeakeasyBase {
    /**
     * This adGroupId is created when an ad group is first created and associated with a campaign. This is the ad group that the corresponding keyword will be added to. This ad group must be a part of the campaign that is specified in the call URI.<br /><br /><span class="tablenote"><b>Note:</b> You can call the  <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups">getAdGroups</a> method to retrieve the ad group IDs for a seller, and <a href="/api-docs/sell/marketing/resources/keywords/methods/getKeywords">getKeywords</a> to retrieve the keyword IDs for a seller's keywords.</span>
     */
    adGroupId?: string;
    /**
     * A complex type that describes the value of a monetary amount as represented by a global currency.
     */
    bid?: Amount;
    /**
     * Input the keyword into this field.
     */
    keywordText?: string;
    /**
     * A field that defines the match type for the keyword.<br /><br /><b>Valid Values:</b><ul><li><code>BROAD</code></li><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:MatchTypeEnum'>eBay API documentation</a>
     */
    matchType?: string;
}
