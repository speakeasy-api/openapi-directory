import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BulkUpdateAdsStatusByListingIdSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class BulkUpdateAdsStatusByListingIdRequest extends SpeakeasyBase {
    /**
     * The bulk request to update ads.
     */
    bulkUpdateAdStatusByListingIdRequest: shared.BulkUpdateAdStatusByListingIdRequest;
    /**
     * A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
     */
    campaignId: string;
}
export declare class BulkUpdateAdsStatusByListingIdResponse extends SpeakeasyBase {
    /**
     * Success
     */
    bulkAdUpdateStatusByListingIdResponse?: shared.BulkAdUpdateStatusByListingIdResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
