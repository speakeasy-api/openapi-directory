import { SpeakeasyBase } from "../../../internal/utils";
import { MetricStatisticEnum } from "./metricstatisticenum";
import { MetricUnitEnum } from "./metricunitenum";
import { RelationalDatabaseMetricNameEnum } from "./relationaldatabasemetricnameenum";
export declare class GetRelationalDatabaseMetricDataRequest extends SpeakeasyBase {
    endTime: Date;
    metricName: RelationalDatabaseMetricNameEnum;
    period: number;
    relationalDatabaseName: string;
    startTime: Date;
    statistics: MetricStatisticEnum[];
    unit: MetricUnitEnum;
}
