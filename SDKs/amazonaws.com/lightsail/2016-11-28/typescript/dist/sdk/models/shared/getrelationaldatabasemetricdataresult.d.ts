import { SpeakeasyBase } from "../../../internal/utils";
import { MetricDatapoint } from "./metricdatapoint";
import { RelationalDatabaseMetricNameEnum } from "./relationaldatabasemetricnameenum";
/**
 * Success
 */
export declare class GetRelationalDatabaseMetricDataResult extends SpeakeasyBase {
    metricData?: MetricDatapoint[];
    metricName?: RelationalDatabaseMetricNameEnum;
}
