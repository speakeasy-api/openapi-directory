import { SpeakeasyBase } from "../../../internal/utils";
import { HyperParameterTuningJobSummary } from "./hyperparametertuningjobsummary";
/**
 * Success
 */
export declare class ListHyperParameterTuningJobsResponse extends SpeakeasyBase {
    hyperParameterTuningJobSummaries: HyperParameterTuningJobSummary[];
    nextToken?: string;
}
