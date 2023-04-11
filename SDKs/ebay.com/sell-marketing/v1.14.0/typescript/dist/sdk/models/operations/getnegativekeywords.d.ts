import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetNegativeKeywordsSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetNegativeKeywordsRequest extends SpeakeasyBase {
    /**
     * A comma-separated list of ad group IDs.<br /><br />This query parameter is used if the seller wants to retrieve the negative keywords from one or more specific ad groups. The results might not include these ad group IDs if other search conditions exclude them.<br /><br /><span class="tablenote"><b>Note:</b>You can call the <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups">getAdGroups</a> method to retrieve the ad group IDs for a seller.</span><br /><br /><i>Required if</i> the search results must be filtered to include negative keywords created at the ad group level.
     */
    adGroupIds?: string;
    /**
     * A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br />This query parameter is used if the seller wants to retrieve the negative keywords from a specific campaign. The results might not include these campaign IDs if other search conditions exclude them.<br /><br /><span class="tablenote"><b>Note:</b> Currently, only one campaign ID value is supported for each request.</span>
     */
    campaignIds?: string;
    /**
     * The number of results, from the current result set, to be returned in a single page.
     */
    limit?: string;
    /**
     * A comma-separated list of negative keyword statuses.<br /><br />This query parameter is used if the seller wants to filter the search results based on one or more negative keyword statuses.
     */
    negativeKeywordStatus?: string;
    /**
     * The number of results that will be skipped in the result set. This is used with the <b>limit</b> field to control the pagination of the output.<br /><br />For example, if the <b>offset</b> is set to <code>0</code> and the <b>limit</b> is set to <code>10</code>, the method will retrieve items 1 through 10 from the list of items returned. If the <b>offset</b> is set to <code>10</code> and the <b>limit</b> is set to <code>10</code>, the method will retrieve items 11 through 20 from the list of items returned.
     */
    offset?: string;
}
export declare class GetNegativeKeywordsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    negativeKeywordPagedCollectionResponse?: shared.NegativeKeywordPagedCollectionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
