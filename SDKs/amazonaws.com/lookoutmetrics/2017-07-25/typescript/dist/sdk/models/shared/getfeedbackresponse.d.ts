import { SpeakeasyBase } from "../../../internal/utils";
import { TimeSeriesFeedback } from "./timeseriesfeedback";
/**
 * Success
 */
export declare class GetFeedbackResponse extends SpeakeasyBase {
    anomalyGroupTimeSeriesFeedback?: TimeSeriesFeedback[];
    nextToken?: string;
}
