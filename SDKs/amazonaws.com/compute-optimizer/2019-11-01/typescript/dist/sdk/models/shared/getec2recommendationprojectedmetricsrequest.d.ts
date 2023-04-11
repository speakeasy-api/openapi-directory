import { SpeakeasyBase } from "../../../internal/utils";
import { MetricStatisticEnum } from "./metricstatisticenum";
import { RecommendationPreferences } from "./recommendationpreferences";
export declare class GetEc2RecommendationProjectedMetricsRequest extends SpeakeasyBase {
    endTime: Date;
    instanceArn: string;
    period: number;
    recommendationPreferences?: RecommendationPreferences;
    startTime: Date;
    stat: MetricStatisticEnum;
}
