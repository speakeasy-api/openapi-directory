import { SpeakeasyBase } from "../../../internal/utils";
import { TargetTrackingMetricStat } from "./targettrackingmetricstat";
/**
 * The metric data to return. Also defines whether this call is returning data for one metric only, or whether it is performing a math expression on the values of returned metric statistics to create a new time series. A time series is a series of data points, each of which is associated with a timestamp.
 */
export declare class TargetTrackingMetricDataQuery extends SpeakeasyBase {
    expression?: string;
    id: string;
    label?: string;
    metricStat?: TargetTrackingMetricStat;
    returnData?: boolean;
}
