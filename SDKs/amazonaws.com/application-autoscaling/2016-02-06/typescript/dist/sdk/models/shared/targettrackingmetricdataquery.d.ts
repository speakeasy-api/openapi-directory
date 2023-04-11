import { SpeakeasyBase } from "../../../internal/utils";
import { TargetTrackingMetricStat } from "./targettrackingmetricstat";
/**
 * <p>The metric data to return. Also defines whether this call is returning data for one metric only, or whether it is performing a math expression on the values of returned metric statistics to create a new time series. A time series is a series of data points, each of which is associated with a timestamp.</p> <p>For more information and examples, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking-metric-math.html">Create a target tracking scaling policy for Application Auto Scaling using metric math</a> in the <i>Application Auto Scaling User Guide</i>.</p>
 */
export declare class TargetTrackingMetricDataQuery extends SpeakeasyBase {
    expression?: string;
    id: string;
    label?: string;
    metricStat?: TargetTrackingMetricStat;
    returnData?: boolean;
}
