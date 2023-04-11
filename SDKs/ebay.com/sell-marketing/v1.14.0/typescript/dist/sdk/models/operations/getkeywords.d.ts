import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetKeywordsSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetKeywordsRequest extends SpeakeasyBase {
    /**
     * A comma-separated list of ad group IDs. This query parameter is used if the seller wants to retrieve keywords from one or more specific ad groups. If this query parameter is not used, all keywords that are part of the CPC campaign are returned.<span class="tablenote"><b>Note:</b>You can call the <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups">getAdGroups</a>  method to retrieve the ad group IDs for a seller.</span>
     */
    adGroupIds?: string;
    /**
     * A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
     */
    campaignId: string;
    /**
     * A comma-separated list of keyword statuses. The results will be filtered to only include the given statuses of the keyword. If none are provided, all keywords are returned.
     */
    keywordStatus?: string;
    /**
     * <p>Specifies the maximum number of results to return on a page in the paginated response.</p>  <b>Default: </b>10 <br><b>Maximum: </b> 500
     */
    limit?: string;
    /**
     * Specifies the number of results to skip in the result set before returning the first report in the paginated response.  <p>Combine <b>offset</b> with the <b>limit</b> query parameter to control the items returned in the response. For example, if you supply an <b>offset</b> of <code>0</code> and a <b>limit</b> of <code>10</code>, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If <b>offset</b> is <code>10</code> and <b>limit</b> is <code>20</code>, the first page of the response contains items 11-30 from the complete result set.</p> <p><b>Default:</b> 0</p>
     */
    offset?: string;
}
export declare class GetKeywordsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    keywordPagedCollectionResponse?: shared.KeywordPagedCollectionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
