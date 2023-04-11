import { SpeakeasyBase } from "../../../internal/utils";
import { InferenceRecommendationsJobStep } from "./inferencerecommendationsjobstep";
/**
 * Success
 */
export declare class ListInferenceRecommendationsJobStepsResponse extends SpeakeasyBase {
    nextToken?: string;
    steps?: InferenceRecommendationsJobStep[];
}
