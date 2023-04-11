import { SpeakeasyBase } from "../../../internal/utils";
import { InferenceRecommendationsJob } from "./inferencerecommendationsjob";
/**
 * Success
 */
export declare class ListInferenceRecommendationsJobsResponse extends SpeakeasyBase {
    inferenceRecommendationsJobs: InferenceRecommendationsJob[];
    nextToken?: string;
}
