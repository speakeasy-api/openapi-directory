import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BulkUpdateAdsStatusSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class BulkUpdateAdsStatusRequest extends SpeakeasyBase {
    /**
     * The bulk request to update the ads.
     */
    bulkUpdateAdStatusRequest: shared.BulkUpdateAdStatusRequest;
    /**
     * A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
     */
    campaignId: string;
}
export declare class BulkUpdateAdsStatusResponse extends SpeakeasyBase {
    /**
     * Success
     */
    bulkAdUpdateStatusResponse?: shared.BulkAdUpdateStatusResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
