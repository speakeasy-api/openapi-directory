import { SpeakeasyBase } from "../../../internal/utils";
import { MetricStatisticEnum } from "./metricstatisticenum";
export declare class GetECSServiceRecommendationProjectedMetricsRequest extends SpeakeasyBase {
    endTime: Date;
    period: number;
    serviceArn: string;
    startTime: Date;
    stat: MetricStatisticEnum;
}
