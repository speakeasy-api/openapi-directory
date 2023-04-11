import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCampaignByNameSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetCampaignByNameRequest extends SpeakeasyBase {
    /**
     * The name of the campaign.
     */
    campaignName: string;
}
export declare class GetCampaignByNameResponse extends SpeakeasyBase {
    /**
     * Success
     */
    campaign?: shared.Campaign;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
