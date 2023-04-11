import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BulkUpdateAdsBidByInventoryReferenceSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class BulkUpdateAdsBidByInventoryReferenceRequest extends SpeakeasyBase {
    /**
     * This request object defines the fields for the <b>BulkCreateAdsByInventoryReference</b> request.
     */
    bulkCreateAdsByInventoryReferenceRequest: shared.BulkCreateAdsByInventoryReferenceRequest;
    /**
     * A unique eBay-assigned ID for an ad campaign that's generated when a campaign is created. Get a seller's campaign IDs by calling <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a>.
     */
    campaignId: string;
}
export declare class BulkUpdateAdsBidByInventoryReferenceResponse extends SpeakeasyBase {
    /**
     * Success
     */
    bulkUpdateAdsByInventoryReferenceResponse?: shared.BulkUpdateAdsByInventoryReferenceResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
