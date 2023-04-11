import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
/**
 * A type that defines the negative keyword response.
 */
export declare class NegativeKeywordResponse extends SpeakeasyBase {
    /**
     * A unique identifier for an ad group that is generated when an ad group is first created and associated with a campaign.
     */
    adGroupId?: string;
    /**
     * A unique eBay-assigned ID for a campaign. This ID is generated when a campaign is created.
     */
    campaignId?: string;
    /**
     * This container will be returned if there is an issue creating the corresponding negative keyword.
     */
    errors?: ErrorT[];
    /**
     * The URI for the negative keyword, which is used to retrieve the negative keyword. This URI will be returned for each successfully created negative keyword.
     */
    href?: string;
    /**
     * A unique eBay-assigned ID for a negative keyword. This negative keyword ID will be generated for each successfully created negative keyword.
     */
    negativeKeywordId?: string;
    /**
     * The match type for the negative keyword.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> Broad matching of negative keywords is not currently supported.</span><br /><b>Valid Values:</b><ul><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:NegativeKeywordMatchTypeEnum'>eBay API documentation</a>
     */
    negativeKeywordMatchType?: string;
    /**
     * The text for the negative keyword.
     */
    negativeKeywordText?: string;
    /**
     * The status of the request to create a negative keyword. This field indicates whether the process was successful or not.
     */
    statusCode?: number;
}
