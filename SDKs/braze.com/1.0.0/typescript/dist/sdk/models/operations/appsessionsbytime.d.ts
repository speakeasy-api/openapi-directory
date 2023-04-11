import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AppSessionsByTimeRequest extends SpeakeasyBase {
    /**
     * (Optional) String
     *
     * @remarks
     *
     * App API identifier retrieved from the Developer Console to limit analytics to a specific app.
     */
    appId?: string;
    /**
     * (Optional) DateTime (ISO 8601 string)
     *
     * @remarks
     *
     * Point in time when the data series should end - defaults to time of the request.
     */
    endingAt?: string;
    /**
     * (Required) Integer
     *
     * @remarks
     *
     * Max number of units (days or hours) before ending_at to include in the returned series - must be between 1 and 100 inclusive.
     */
    length?: string;
    /**
     * (Optional) String
     *
     * @remarks
     *
     * Segment API identifier indicating the analytics enabled segment for which sessions should be returned.
     */
    segmentId?: string;
    /**
     * (Optional) String
     *
     * @remarks
     *
     * Unit of time between data points - can be "day" or "hour" (defaults to "day").
     */
    unit?: string;
}
export declare class AppSessionsByTimeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
