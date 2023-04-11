import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SuggestBidsSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class SuggestBidsRequest extends SpeakeasyBase {
    /**
     * The data requested to retrieve the suggested bids.
     */
    targetedBidRequest: shared.TargetedBidRequest;
    /**
     * The ID of the ad group containing the keywords for which the bid suggestions will be provided.
     */
    adGroupId: string;
    /**
     * A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
     */
    campaignId: string;
}
export declare class SuggestBidsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    targetedBidsPagedCollection?: shared.TargetedBidsPagedCollection;
}
