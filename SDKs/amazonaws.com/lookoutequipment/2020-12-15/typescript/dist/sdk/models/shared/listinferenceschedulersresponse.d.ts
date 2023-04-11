import { SpeakeasyBase } from "../../../internal/utils";
import { InferenceSchedulerSummary } from "./inferenceschedulersummary";
/**
 * Success
 */
export declare class ListInferenceSchedulersResponse extends SpeakeasyBase {
    inferenceSchedulerSummaries?: InferenceSchedulerSummary[];
    nextToken?: string;
}
