import { SpeakeasyBase } from "../../../internal/utils";
import { MetricTypeEnum } from "./metrictypeenum";
import { PeriodTypeEnum } from "./periodtypeenum";
import { StatisticTypeEnum } from "./statistictypeenum";
/**
 * A query used for retrieving network health data.
 */
export declare class DataQuery extends SpeakeasyBase {
    destination?: string;
    id?: string;
    metric?: MetricTypeEnum;
    period?: PeriodTypeEnum;
    source?: string;
    statistic?: StatisticTypeEnum;
}
