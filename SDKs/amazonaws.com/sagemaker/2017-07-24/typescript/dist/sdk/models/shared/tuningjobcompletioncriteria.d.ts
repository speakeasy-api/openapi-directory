import { SpeakeasyBase } from "../../../internal/utils";
import { BestObjectiveNotImproving } from "./bestobjectivenotimproving";
import { ConvergenceDetected } from "./convergencedetected";
/**
 * The job completion criteria.
 */
export declare class TuningJobCompletionCriteria extends SpeakeasyBase {
    bestObjectiveNotImproving?: BestObjectiveNotImproving;
    convergenceDetected?: ConvergenceDetected;
    targetObjectiveMetricValue?: number;
}
