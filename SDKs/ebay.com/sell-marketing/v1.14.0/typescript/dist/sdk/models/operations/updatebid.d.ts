import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateBidSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class UpdateBidRequest extends SpeakeasyBase {
    /**
     * This type defines the fields for the <b>updateBid</b> request.
     */
    updateBidPercentageRequest: shared.UpdateBidPercentageRequest;
    /**
     * A unique eBay-assigned ID for an ad that's generated when an ad is created.
     */
    adId: string;
    /**
     * A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
     */
    campaignId: string;
}
export declare class UpdateBidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
