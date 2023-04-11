import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateAdGroupSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class CreateAdGroupRequest extends SpeakeasyBase {
    /**
     * This type defines the fields for the <b>createAdGroup</b> request.
     */
    createAdGroupRequest: shared.CreateAdGroupRequest;
    /**
     * A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
     */
    campaignId: string;
}
export declare class CreateAdGroupResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    createAdGroup201ApplicationJSONObject?: Record<string, any>;
}
