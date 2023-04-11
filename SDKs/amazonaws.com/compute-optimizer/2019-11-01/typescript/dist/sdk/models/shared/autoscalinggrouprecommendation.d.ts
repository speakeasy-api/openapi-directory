import { SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingGroupConfiguration } from "./autoscalinggroupconfiguration";
import { AutoScalingGroupRecommendationOption } from "./autoscalinggrouprecommendationoption";
import { CurrentPerformanceRiskEnum } from "./currentperformanceriskenum";
import { EffectiveRecommendationPreferences } from "./effectiverecommendationpreferences";
import { FindingEnum } from "./findingenum";
import { InferredWorkloadTypeEnum } from "./inferredworkloadtypeenum";
import { UtilizationMetric } from "./utilizationmetric";
/**
 * Describes an Auto Scaling group recommendation.
 */
export declare class AutoScalingGroupRecommendation extends SpeakeasyBase {
    accountId?: string;
    autoScalingGroupArn?: string;
    autoScalingGroupName?: string;
    currentConfiguration?: AutoScalingGroupConfiguration;
    currentPerformanceRisk?: CurrentPerformanceRiskEnum;
    effectiveRecommendationPreferences?: EffectiveRecommendationPreferences;
    finding?: FindingEnum;
    inferredWorkloadTypes?: InferredWorkloadTypeEnum[];
    lastRefreshTimestamp?: Date;
    lookBackPeriodInDays?: number;
    recommendationOptions?: AutoScalingGroupRecommendationOption[];
    utilizationMetrics?: UtilizationMetric[];
}
