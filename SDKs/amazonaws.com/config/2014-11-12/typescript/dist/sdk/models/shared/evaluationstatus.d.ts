import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceEvaluationStatusEnum } from "./resourceevaluationstatusenum";
/**
 * Returns status details of an evaluation.
 */
export declare class EvaluationStatus extends SpeakeasyBase {
    failureReason?: string;
    status: ResourceEvaluationStatusEnum;
}
