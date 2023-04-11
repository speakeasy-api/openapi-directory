import { SpeakeasyBase } from "../../../internal/utils";
import { InferenceExecutionSummary } from "./inferenceexecutionsummary";
/**
 * Success
 */
export declare class ListInferenceExecutionsResponse extends SpeakeasyBase {
    inferenceExecutionSummaries?: InferenceExecutionSummary[];
    nextToken?: string;
}
