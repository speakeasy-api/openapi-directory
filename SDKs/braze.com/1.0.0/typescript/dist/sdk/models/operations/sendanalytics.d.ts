import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SendAnalyticsRequest extends SpeakeasyBase {
    /**
     * (Required) String
     *
     * @remarks
     *
     * Campaign API identifier.
     */
    campaignId?: string;
    /**
     * (Optional) Datetime ISO 8601 string
     *
     * @remarks
     *
     * Date on which the data series should end. Defaults to time of the request.
     */
    endingAt?: string;
    /**
     * (Required) Integer
     *
     * @remarks
     *
     * Maximum number of days before `ending_at` to include in the returned series. Must be between 1 and 100 inclusive.
     */
    length?: string;
    /**
     * (Required) String
     *
     * @remarks
     *
     * Send API identifier.
     */
    sendId?: string;
}
export declare class SendAnalyticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
