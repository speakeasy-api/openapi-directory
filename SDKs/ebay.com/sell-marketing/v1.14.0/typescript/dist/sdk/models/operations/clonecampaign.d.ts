import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CloneCampaignSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class CloneCampaignRequest extends SpeakeasyBase {
    /**
     * This type defines the fields for a clone campaign request.
     */
    cloneCampaignRequest: shared.CloneCampaignRequest;
    /**
     * A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created. This ID is the campaign ID of the campaign being cloned.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
     */
    campaignId: string;
}
export declare class CloneCampaignResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    cloneCampaign201ApplicationJSONObject?: Record<string, any>;
}
