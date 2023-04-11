import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A type that defines the fields for a negative keyword.
 */
export declare class NegativeKeyword extends SpeakeasyBase {
    /**
     * An ad group ID that is generated when an ad group is first created and associated with a campaign.<br /><br /><span class="tablenote"><b>Note:</b> You can call the  <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups">getAdGroups</a> method to retrieve the ad group IDs for a seller.</span>
     */
    adGroupId?: string;
    /**
     * A unique eBay-assigned ID for a campaign. This ID is generated when a campaign is created.
     */
    campaignId?: string;
    /**
     * A unique eBay-assigned ID for a negative keyword. This keyword ID will be generated for each successfully created negative keyword.
     */
    negativeKeywordId?: string;
    /**
     * A field that defines the match type for the negative keyword.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> Broad matching of negative keywords is not currently supported.</span><br /><b>Valid Values:</b><ul><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:NegativeKeywordMatchTypeEnum'>eBay API documentation</a>
     */
    negativeKeywordMatchType?: string;
    /**
     * A field that defines the status of the negative keyword. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:NegativeKeywordStatusEnum'>eBay API documentation</a>
     */
    negativeKeywordStatus?: string;
    /**
     * The text for the negative keyword.
     */
    negativeKeywordText?: string;
}
