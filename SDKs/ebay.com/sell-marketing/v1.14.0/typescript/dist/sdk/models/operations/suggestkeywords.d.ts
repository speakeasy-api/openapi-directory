import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SuggestKeywordsSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class SuggestKeywordsRequest extends SpeakeasyBase {
    /**
     * The required data to retrieve suggested keywords.
     */
    targetedKeywordRequest?: shared.TargetedKeywordRequest;
    /**
     * The ID of the ad group for which the keyword suggestions will be provided.
     */
    adGroupId: string;
    /**
     * A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
     */
    campaignId: string;
}
export declare class SuggestKeywordsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    targetedKeywordsPagedCollection?: shared.TargetedKeywordsPagedCollection;
}
