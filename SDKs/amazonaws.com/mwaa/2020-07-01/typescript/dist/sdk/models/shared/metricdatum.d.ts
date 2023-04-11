import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
import { StatisticSet } from "./statisticset";
import { UnitEnum } from "./unitenum";
/**
 *  <b>Internal only</b>. Collects Apache Airflow metrics. To learn more about the metrics published to Amazon CloudWatch, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/cw-metrics.html">Amazon MWAA performance metrics in Amazon CloudWatch</a>.
 */
export declare class MetricDatum extends SpeakeasyBase {
    dimensions?: Dimension[];
    metricName: string;
    statisticValues?: StatisticSet;
    timestamp: Date;
    unit?: UnitEnum;
    value?: number;
}
