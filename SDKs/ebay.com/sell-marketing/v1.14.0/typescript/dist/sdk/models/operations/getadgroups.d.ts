import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAdGroupsSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetAdGroupsRequest extends SpeakeasyBase {
    /**
     * A comma-separated list of ad group statuses. The results will be filtered to only include the given statuses of the ad group.<br /><br />The results might not include these ad groups if other search conditions exclude them.
     */
    adGroupStatus?: string;
    /**
     * A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
     */
    campaignId: string;
    /**
     * The number of results, from the current result set, to be returned in a single page.
     */
    limit?: string;
    /**
     * The number of results that will be skipped in the result set. This is used with the <b>limit</b> field to control the pagination of the output.<br /><br />For example, if the <b>offset</b> is set to <code>0</code> and the <b>limit</b> is set to <code>10</code>, the method will retrieve items 1 through 10 from the list of items returned. If the <b>offset</b> is set to <code>10</code> and the <b>limit</b> is set to <code>10</code>, the method will retrieve items 11 through 20 from the list of items returned.<br><br><b>Default</b>: <code>0</code>
     */
    offset?: string;
}
export declare class GetAdGroupsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    adGroupPagedCollectionResponse?: shared.AdGroupPagedCollectionResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
