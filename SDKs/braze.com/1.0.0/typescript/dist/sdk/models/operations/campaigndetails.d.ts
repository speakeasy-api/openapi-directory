import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CampaignDetailsRequest extends SpeakeasyBase {
    /**
     * (Required) String
     *
     * @remarks
     *
     * Campaign API identifier
     */
    campaignId?: string;
}
export declare class CampaignDetailsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
