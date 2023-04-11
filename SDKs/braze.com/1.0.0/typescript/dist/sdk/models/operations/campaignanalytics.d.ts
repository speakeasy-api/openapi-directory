import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CampaignAnalyticsRequest extends SpeakeasyBase {
    /**
     * (Required) String
     *
     * @remarks
     *
     * Campaign API identifier
     */
    campaignId?: string;
    /**
     * (Optional) DateTime (ISO 8601 string)
     *
     * @remarks
     *
     * Date on which the data series should end - defaults to time of the request
     */
    endingAt?: string;
    /**
     * (Required) Integer
     *
     * @remarks
     *
     * Max number of days before ending_at to include in the returned series - must be between 1 and 100 inclusive
     */
    length?: string;
}
export declare class CampaignAnalyticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
