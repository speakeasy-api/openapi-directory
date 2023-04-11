import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAdGroupSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetAdGroupRequest extends SpeakeasyBase {
    /**
     * The ID of the ad group that shall be retrieved.
     */
    adGroupId: string;
    /**
     * A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
     */
    campaignId: string;
}
export declare class GetAdGroupResponse extends SpeakeasyBase {
    /**
     * Success
     */
    adGroup?: shared.AdGroup;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
