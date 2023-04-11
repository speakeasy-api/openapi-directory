import { SpeakeasyBase } from "../../../internal/utils";
import { InferenceEventSummary } from "./inferenceeventsummary";
/**
 * Success
 */
export declare class ListInferenceEventsResponse extends SpeakeasyBase {
    inferenceEventSummaries?: InferenceEventSummary[];
    nextToken?: string;
}
