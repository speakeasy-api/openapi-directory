import { SpeakeasyBase } from "../../../internal/utils";
import { EvaluationRule } from "./evaluationrule";
import { FeatureEvaluationStrategyEnum } from "./featureevaluationstrategyenum";
import { FeatureStatusEnum } from "./featurestatusenum";
/**
 * This structure contains information about one Evidently feature in your account.
 */
export declare class FeatureSummary extends SpeakeasyBase {
    arn: string;
    createdTime: Date;
    defaultVariation?: string;
    evaluationRules?: EvaluationRule[];
    evaluationStrategy: FeatureEvaluationStrategyEnum;
    lastUpdatedTime: Date;
    name: string;
    project?: string;
    status: FeatureStatusEnum;
    tags?: Record<string, string>;
}
