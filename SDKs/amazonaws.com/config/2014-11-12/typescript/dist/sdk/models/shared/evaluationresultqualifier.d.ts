import { SpeakeasyBase } from "../../../internal/utils";
import { EvaluationModeEnum } from "./evaluationmodeenum";
/**
 * Identifies an Config rule that evaluated an Amazon Web Services resource, and provides the type and ID of the resource that the rule evaluated.
 */
export declare class EvaluationResultQualifier extends SpeakeasyBase {
    configRuleName?: string;
    evaluationMode?: EvaluationModeEnum;
    resourceId?: string;
    resourceType?: string;
}
