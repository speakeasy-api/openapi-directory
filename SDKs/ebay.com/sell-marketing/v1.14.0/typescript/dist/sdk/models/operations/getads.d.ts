import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAdsSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetAdsRequest extends SpeakeasyBase {
    /**
     * A comma-separated list of ad group IDs. The results will be filtered to only include active ads for these ad groups. Call <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups">getAdGroups</a> to retrieve the ad group ID for the ad group.<br /><br /><span class="tablenote"><b>Note:</b> This field only applies to the Cost Per Click (CPC) funding model; it does not apply to the Cost Per Sale (CPS) funding model.</span>
     */
    adGroupIds?: string;
    /**
     * A comma-separated list of ad statuses. The results will be filtered to only include the given statuses of the ad. If none are provided, all ads are returned.
     */
    adStatus?: string;
    /**
     * A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
     */
    campaignId: string;
    /**
     * Specifies the maximum number of ads to return on a page in the paginated response. <p><b>Default: </b>10 <br><b>Maximum:</b> 500</p>
     */
    limit?: string;
    /**
     * A comma-separated list of listing IDs. The response includes only active ads (ads associated with a RUNNING campaign). The results do not include listing IDs that are excluded by other conditions.
     */
    listingIds?: string;
    /**
     * Specifies the number of ads to skip in the result set before returning the first ad in the paginated response.  <p>Combine <b>offset</b> with the <b>limit</b> query parameter to control the items returned in the response. For example, if you supply an <b>offset</b> of <code>0</code> and a <b>limit</b> of <code>10</code>, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If <b>offset</b> is <code>10</code> and <b>limit</b> is <code>20</code>, the first page of the response contains items 11-30 from the complete result set.</p> <p><b>Default:</b> 0</p>
     */
    offset?: string;
}
export declare class GetAdsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    adPagedCollectionResponse?: shared.AdPagedCollectionResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
