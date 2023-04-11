import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BulkUpdateKeywordSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class BulkUpdateKeywordRequest extends SpeakeasyBase {
    /**
     * A type that defines the fields for the bulk request to update keywords.
     */
    bulkUpdateKeywordRequest: shared.BulkUpdateKeywordRequest;
    /**
     * A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
     */
    campaignId: string;
}
export declare class BulkUpdateKeywordResponse extends SpeakeasyBase {
    /**
     * Success
     */
    bulkUpdateKeywordResponse?: shared.BulkUpdateKeywordResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
