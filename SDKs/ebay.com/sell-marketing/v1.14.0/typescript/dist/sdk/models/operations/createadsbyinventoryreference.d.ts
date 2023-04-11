import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateAdsByInventoryReferenceSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class CreateAdsByInventoryReferenceRequest extends SpeakeasyBase {
    /**
     * This request object defines the fields used in the <b>createAdsByInventoryReference</b> request.
     */
    createAdsByInventoryReferenceRequest: shared.CreateAdsByInventoryReferenceRequest;
    /**
     * A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
     */
    campaignId: string;
}
export declare class CreateAdsByInventoryReferenceResponse extends SpeakeasyBase {
    /**
     * Created
     */
    adReferences?: shared.AdReferences;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
