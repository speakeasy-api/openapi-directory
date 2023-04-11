import { SpeakeasyBase } from "../../../internal/utils";
import { EvaluationModeEnum } from "./evaluationmodeenum";
/**
 * Returns details of a resource evaluation.
 */
export declare class ResourceEvaluation extends SpeakeasyBase {
    evaluationMode?: EvaluationModeEnum;
    evaluationStartTimestamp?: Date;
    resourceEvaluationId?: string;
}
