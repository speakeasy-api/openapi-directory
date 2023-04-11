import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BulkUpdateAdsBidByListingIdSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class BulkUpdateAdsBidByListingIdRequest extends SpeakeasyBase {
    /**
     * This request object defines the fields for the <b>BulkCreateAdsByListingId</b> request.
     */
    bulkCreateAdRequest: shared.BulkCreateAdRequest;
    /**
     * A unique eBay-assigned ID for an ad campaign that's generated when a campaign is created. Get a seller's campaign IDs by calling <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a>.
     */
    campaignId: string;
}
export declare class BulkUpdateAdsBidByListingIdResponse extends SpeakeasyBase {
    /**
     * Success
     */
    bulkAdUpdateResponse?: shared.BulkAdUpdateResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
