import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateAdGroupSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class UpdateAdGroupRequest extends SpeakeasyBase {
    /**
     * This type defines the fields for the <b>UpdateAdGroup</b> request.
     */
    updateAdGroupRequest: shared.UpdateAdGroupRequest;
    /**
     * The ID of the ad group that shall be updated.
     */
    adGroupId: string;
    /**
     * A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
     */
    campaignId: string;
}
export declare class UpdateAdGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
