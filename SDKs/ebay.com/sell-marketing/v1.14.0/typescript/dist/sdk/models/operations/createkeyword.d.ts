import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateKeywordSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class CreateKeywordRequest extends SpeakeasyBase {
    /**
     * A type that defines the fields for the request to create a keyword.
     */
    createKeywordRequest: shared.CreateKeywordRequest;
    /**
     * A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
     */
    campaignId: string;
}
export declare class CreateKeywordResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    createKeyword201ApplicationJSONObject?: Record<string, any>;
}
