import { SpeakeasyBase } from "../../../internal/utils";
import { MetricStat } from "./metricstat";
/**
 * <p>The metric data to return. Also defines whether this call is returning data for one metric only, or whether it is performing a math expression on the values of returned metric statistics to create a new time series. A time series is a series of data points, each of which is associated with a timestamp.</p> <p>For more information and examples, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/predictive-scaling-customized-metric-specification.html">Advanced predictive scaling policy configurations using custom metrics</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 */
export declare class MetricDataQuery extends SpeakeasyBase {
    expression?: string;
    id: string;
    label?: string;
    metricStat?: MetricStat;
    returnData?: boolean;
}
