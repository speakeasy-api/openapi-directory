import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateCampaignBudgetSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class UpdateCampaignBudgetRequest extends SpeakeasyBase {
    /**
     * This type defines the request fields for the budget details that shall be updated.
     */
    updateCampaignBudgetRequest: shared.UpdateCampaignBudgetRequest;
    /**
     * A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
     */
    campaignId: string;
}
export declare class UpdateCampaignBudgetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
