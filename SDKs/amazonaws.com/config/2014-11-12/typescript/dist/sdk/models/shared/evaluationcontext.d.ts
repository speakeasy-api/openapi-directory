import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Use EvaluationContext to group independently initiated proactive resource evaluations. For example, CFN Stack. If you want to check just a resource definition, you do not need to provide evaluation context.
 */
export declare class EvaluationContext extends SpeakeasyBase {
    evaluationContextIdentifier?: string;
}
