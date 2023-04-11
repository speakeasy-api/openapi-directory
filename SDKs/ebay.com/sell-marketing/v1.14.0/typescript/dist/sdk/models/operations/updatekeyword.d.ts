import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateKeywordSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class UpdateKeywordRequest extends SpeakeasyBase {
    /**
     * A type that defines the fields for the request to update a keyword.
     */
    updateKeywordRequest: shared.UpdateKeywordRequest;
    /**
     * A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
     */
    campaignId: string;
    /**
     * A unique eBay-assigned ID that is generated when a keyword is created.
     */
    keywordId: string;
}
export declare class UpdateKeywordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
