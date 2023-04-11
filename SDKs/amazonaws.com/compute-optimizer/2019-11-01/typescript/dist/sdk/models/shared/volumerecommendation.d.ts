import { SpeakeasyBase } from "../../../internal/utils";
import { CurrentPerformanceRiskEnum } from "./currentperformanceriskenum";
import { EBSFindingEnum } from "./ebsfindingenum";
import { EBSUtilizationMetric } from "./ebsutilizationmetric";
import { VolumeConfiguration } from "./volumeconfiguration";
import { VolumeRecommendationOption } from "./volumerecommendationoption";
/**
 * Describes an Amazon Elastic Block Store (Amazon EBS) volume recommendation.
 */
export declare class VolumeRecommendation extends SpeakeasyBase {
    accountId?: string;
    currentConfiguration?: VolumeConfiguration;
    currentPerformanceRisk?: CurrentPerformanceRiskEnum;
    finding?: EBSFindingEnum;
    lastRefreshTimestamp?: Date;
    lookBackPeriodInDays?: number;
    utilizationMetrics?: EBSUtilizationMetric[];
    volumeArn?: string;
    volumeRecommendationOptions?: VolumeRecommendationOption[];
}
