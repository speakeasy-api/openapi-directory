import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class NewsFeedCardAnalyticsRequest extends SpeakeasyBase {
    /**
     * (Required) String
     *
     * @remarks
     *
     * Card API identifier
     */
    cardId?: string;
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
     * Max number of units (days or hours) before ending_at to include in the returned series - must be between 1 and 100 inclusive
     */
    length?: string;
    /**
     * (Optional) String
     *
     * @remarks
     *
     * Unit of time between data points - can be "day" or "hour" (defaults to "day")
     */
    unit?: string;
}
export declare class NewsFeedCardAnalyticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
