import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  <b>Internal only</b>. Represents the dimensions of a metric. To learn more about the metrics published to Amazon CloudWatch, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/cw-metrics.html">Amazon MWAA performance metrics in Amazon CloudWatch</a>.
 */
export declare class Dimension extends SpeakeasyBase {
    name: string;
    value: string;
}
