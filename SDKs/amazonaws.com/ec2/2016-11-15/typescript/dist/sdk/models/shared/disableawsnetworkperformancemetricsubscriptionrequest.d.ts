import { SpeakeasyBase } from "../../../internal/utils";
import { MetricTypeEnum } from "./metrictypeenum";
import { StatisticTypeEnum } from "./statistictypeenum";
export declare class DisableAwsNetworkPerformanceMetricSubscriptionRequest extends SpeakeasyBase {
    destination?: string;
    dryRun?: boolean;
    metric?: MetricTypeEnum;
    source?: string;
    statistic?: StatisticTypeEnum;
}
