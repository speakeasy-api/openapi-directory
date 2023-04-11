import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A structure that contains runtime information about both current and completed hyperparameter tuning jobs.
 */
export declare class HyperParameterTuningJobCompletionDetails extends SpeakeasyBase {
    convergenceDetectedTime?: Date;
    numberOfTrainingJobsObjectiveNotImproving?: number;
}
