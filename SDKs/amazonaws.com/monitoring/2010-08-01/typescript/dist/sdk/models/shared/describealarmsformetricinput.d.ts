import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
import { StandardUnitEnum } from "./standardunitenum";
import { StatisticEnum } from "./statisticenum";
export declare class DescribeAlarmsForMetricInput extends SpeakeasyBase {
    dimensions?: Dimension[];
    extendedStatistic?: string;
    metricName: string;
    namespace: string;
    period?: number;
    statistic?: StatisticEnum;
    unit?: StandardUnitEnum;
}
