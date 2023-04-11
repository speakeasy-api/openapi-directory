import { SpeakeasyBase } from "../../../internal/utils";
import { EvaluationRule } from "./evaluationrule";
import { FeatureEvaluationStrategyEnum } from "./featureevaluationstrategyenum";
import { FeatureStatusEnum } from "./featurestatusenum";
import { Variation } from "./variation";
import { VariationValueTypeEnum } from "./variationvaluetypeenum";
/**
 * This structure contains information about one Evidently feature in your account.
 */
export declare class Feature extends SpeakeasyBase {
    arn: string;
    createdTime: Date;
    defaultVariation?: string;
    description?: string;
    entityOverrides?: Record<string, string>;
    evaluationRules?: EvaluationRule[];
    evaluationStrategy: FeatureEvaluationStrategyEnum;
    lastUpdatedTime: Date;
    name: string;
    project?: string;
    status: FeatureStatusEnum;
    tags?: Record<string, string>;
    valueType: VariationValueTypeEnum;
    variations: Variation[];
}
