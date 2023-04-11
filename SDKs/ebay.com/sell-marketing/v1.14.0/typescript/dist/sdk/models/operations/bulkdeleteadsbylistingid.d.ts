import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BulkDeleteAdsByListingIdSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class BulkDeleteAdsByListingIdRequest extends SpeakeasyBase {
    /**
     * This request object defines the fields for the <b>bulkDeleteAdsByListingId</b> request.
     */
    bulkDeleteAdRequest: shared.BulkDeleteAdRequest;
    /**
     * A unique eBay-assigned ID for an ad campaign that's generated when a campaign is created. Get a seller's campaign IDs by calling <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a>.
     */
    campaignId: string;
}
export declare class BulkDeleteAdsByListingIdResponse extends SpeakeasyBase {
    /**
     * Success
     */
    bulkDeleteAdResponse?: shared.BulkDeleteAdResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
