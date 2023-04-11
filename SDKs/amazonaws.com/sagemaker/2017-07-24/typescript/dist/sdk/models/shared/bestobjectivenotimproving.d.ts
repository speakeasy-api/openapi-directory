import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A structure that keeps track of which training jobs launched by your hyperparameter tuning job are not improving model performance as evaluated against an objective function.
 */
export declare class BestObjectiveNotImproving extends SpeakeasyBase {
    maxNumberOfTrainingJobsNotImproving?: number;
}
