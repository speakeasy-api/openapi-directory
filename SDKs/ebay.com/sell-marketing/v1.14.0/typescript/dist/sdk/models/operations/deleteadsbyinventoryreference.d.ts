import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteAdsByInventoryReferenceSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class DeleteAdsByInventoryReferenceRequest extends SpeakeasyBase {
    /**
     * This request object defines the fields for the <b>deleteAdsByInventoryReference</b> request.
     */
    deleteAdsByInventoryReferenceRequest: shared.DeleteAdsByInventoryReferenceRequest;
    /**
     * A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
     */
    campaignId: string;
}
export declare class DeleteAdsByInventoryReferenceResponse extends SpeakeasyBase {
    /**
     * Success
     */
    adIds?: shared.AdIds;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
