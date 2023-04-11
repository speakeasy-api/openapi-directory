import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAdSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetAdRequest extends SpeakeasyBase {
    /**
     * A unique identifier for an ad. This ID is generated when the ad is created.
     */
    adId: string;
    /**
     * A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
     */
    campaignId: string;
}
export declare class GetAdResponse extends SpeakeasyBase {
    /**
     * Success
     */
    ad?: shared.Ad;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
