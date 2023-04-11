import { SpeakeasyBase } from "../../../internal/utils";
import { CurrentPerformanceRiskEnum } from "./currentperformanceriskenum";
import { EffectiveRecommendationPreferences } from "./effectiverecommendationpreferences";
import { FindingEnum } from "./findingenum";
import { InferredWorkloadTypeEnum } from "./inferredworkloadtypeenum";
import { InstanceRecommendationFindingReasonCodeEnum } from "./instancerecommendationfindingreasoncodeenum";
import { InstanceRecommendationOption } from "./instancerecommendationoption";
import { RecommendationSource } from "./recommendationsource";
import { UtilizationMetric } from "./utilizationmetric";
/**
 * Describes an Amazon EC2 instance recommendation.
 */
export declare class InstanceRecommendation extends SpeakeasyBase {
    accountId?: string;
    currentInstanceType?: string;
    currentPerformanceRisk?: CurrentPerformanceRiskEnum;
    effectiveRecommendationPreferences?: EffectiveRecommendationPreferences;
    finding?: FindingEnum;
    findingReasonCodes?: InstanceRecommendationFindingReasonCodeEnum[];
    inferredWorkloadTypes?: InferredWorkloadTypeEnum[];
    instanceArn?: string;
    instanceName?: string;
    lastRefreshTimestamp?: Date;
    lookBackPeriodInDays?: number;
    recommendationOptions?: InstanceRecommendationOption[];
    recommendationSources?: RecommendationSource[];
    utilizationMetrics?: UtilizationMetric[];
}
