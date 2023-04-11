import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  <b>Internal only</b>. Represents a set of statistics that describe a specific metric. To learn more about the metrics published to Amazon CloudWatch, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/cw-metrics.html">Amazon MWAA performance metrics in Amazon CloudWatch</a>.
 */
export declare class StatisticSet extends SpeakeasyBase {
    maximum?: number;
    minimum?: number;
    sampleCount?: number;
    sum?: number;
}
