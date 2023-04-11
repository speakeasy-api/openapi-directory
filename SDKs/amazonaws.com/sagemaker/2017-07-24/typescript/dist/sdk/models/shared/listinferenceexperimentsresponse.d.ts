import { SpeakeasyBase } from "../../../internal/utils";
import { InferenceExperimentSummary } from "./inferenceexperimentsummary";
/**
 * Success
 */
export declare class ListInferenceExperimentsResponse extends SpeakeasyBase {
    inferenceExperiments?: InferenceExperimentSummary[];
    nextToken?: string;
}
