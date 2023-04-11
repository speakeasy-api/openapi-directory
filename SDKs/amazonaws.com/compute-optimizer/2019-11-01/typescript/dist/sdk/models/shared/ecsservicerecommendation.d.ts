import { SpeakeasyBase } from "../../../internal/utils";
import { CurrentPerformanceRiskEnum } from "./currentperformanceriskenum";
import { ECSServiceLaunchTypeEnum } from "./ecsservicelaunchtypeenum";
import { ECSServiceRecommendationFindingEnum } from "./ecsservicerecommendationfindingenum";
import { ECSServiceRecommendationFindingReasonCodeEnum } from "./ecsservicerecommendationfindingreasoncodeenum";
import { ECSServiceRecommendationOption } from "./ecsservicerecommendationoption";
import { ECSServiceUtilizationMetric } from "./ecsserviceutilizationmetric";
import { ServiceConfiguration } from "./serviceconfiguration";
/**
 *  Describes an Amazon ECS service recommendation.
 */
export declare class ECSServiceRecommendation extends SpeakeasyBase {
    accountId?: string;
    currentPerformanceRisk?: CurrentPerformanceRiskEnum;
    currentServiceConfiguration?: ServiceConfiguration;
    finding?: ECSServiceRecommendationFindingEnum;
    findingReasonCodes?: ECSServiceRecommendationFindingReasonCodeEnum[];
    lastRefreshTimestamp?: Date;
    launchType?: ECSServiceLaunchTypeEnum;
    lookbackPeriodInDays?: number;
    serviceArn?: string;
    serviceRecommendationOptions?: ECSServiceRecommendationOption[];
    utilizationMetrics?: ECSServiceUtilizationMetric[];
}
