import { SpeakeasyBase } from "../../../internal/utils";
/**
 * How long a job is allowed to run, or how many candidates a job is allowed to generate.
 */
export declare class AutoMLJobCompletionCriteria extends SpeakeasyBase {
    maxAutoMLJobRuntimeInSeconds?: number;
    maxCandidates?: number;
    maxRuntimePerTrainingJobInSeconds?: number;
}
