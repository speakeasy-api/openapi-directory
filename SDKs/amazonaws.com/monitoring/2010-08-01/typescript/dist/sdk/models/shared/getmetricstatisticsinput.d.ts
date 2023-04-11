import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
import { StandardUnitEnum } from "./standardunitenum";
import { StatisticEnum } from "./statisticenum";
export declare class GetMetricStatisticsInput extends SpeakeasyBase {
    dimensions?: Dimension[];
    endTime: Date;
    extendedStatistics?: string[];
    metricName: string;
    namespace: string;
    period: number;
    startTime: Date;
    statistics?: StatisticEnum[];
    unit?: StandardUnitEnum;
}
