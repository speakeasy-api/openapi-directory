import { SpeakeasyBase } from "../../../internal/utils";
import { ModelLatencyThreshold } from "./modellatencythreshold";
/**
 * Specifies conditions for stopping a job. When a job reaches a stopping condition limit, SageMaker ends the job.
 */
export declare class RecommendationJobStoppingConditions extends SpeakeasyBase {
    maxInvocations?: number;
    modelLatencyThresholds?: ModelLatencyThreshold[];
}
