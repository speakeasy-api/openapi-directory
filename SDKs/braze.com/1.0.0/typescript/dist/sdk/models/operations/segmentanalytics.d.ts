import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SegmentAnalyticsRequest extends SpeakeasyBase {
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
     * Max number of days before `ending_at` to include in the returned series - must be between 1 and 100 inclusive.
     */
    length?: string;
    /**
     * (Required) String
     *
     * @remarks
     *
     * Segment API identifier.
     */
    segmentId?: string;
}
export declare class SegmentAnalyticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
