import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BulkDeleteAdsByInventoryReferenceSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class BulkDeleteAdsByInventoryReferenceRequest extends SpeakeasyBase {
    /**
     * This request works with listings created via the <a href="/api-docs/sell/inventory/resources/methods">Inventory API</a>.<br /><br />The request is to delete a set of ads in bulk, as specified by a list of inventory reference IDs from the specified campaign.
     */
    bulkDeleteAdsByInventoryReferenceRequest: shared.BulkDeleteAdsByInventoryReferenceRequest;
    /**
     * A unique eBay-assigned ID for an ad campaign that's generated when a campaign is created. Get a seller's campaign IDs by calling <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a>.
     */
    campaignId: string;
}
export declare class BulkDeleteAdsByInventoryReferenceResponse extends SpeakeasyBase {
    /**
     * Success
     */
    bulkDeleteAdsByInventoryReferenceResponse?: shared.BulkDeleteAdsByInventoryReferenceResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
