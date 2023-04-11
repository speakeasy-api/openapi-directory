import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PauseCampaignSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class PauseCampaignRequest extends SpeakeasyBase {
    /**
     * A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
     */
    campaignId: string;
}
export declare class PauseCampaignResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
