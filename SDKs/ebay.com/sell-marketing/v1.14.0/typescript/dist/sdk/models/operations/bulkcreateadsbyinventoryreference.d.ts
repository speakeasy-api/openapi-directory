import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BulkCreateAdsByInventoryReferenceSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class BulkCreateAdsByInventoryReferenceRequest extends SpeakeasyBase {
    /**
     * The container for the bulk request to create ads for eBay inventory reference IDs. eBay inventory reference IDs are seller-defined IDs used by theInventory API.
     */
    bulkCreateAdsByInventoryReferenceRequest: shared.BulkCreateAdsByInventoryReferenceRequest;
    /**
     * A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created. Get a seller's campaign IDs by calling <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a>.
     */
    campaignId: string;
}
export declare class BulkCreateAdsByInventoryReferenceResponse extends SpeakeasyBase {
    /**
     * Success
     */
    bulkCreateAdsByInventoryReferenceResponse?: shared.BulkCreateAdsByInventoryReferenceResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
