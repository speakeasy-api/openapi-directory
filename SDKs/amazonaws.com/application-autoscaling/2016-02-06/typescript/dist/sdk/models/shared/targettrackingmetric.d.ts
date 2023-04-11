import { SpeakeasyBase } from "../../../internal/utils";
import { TargetTrackingMetricDimension } from "./targettrackingmetricdimension";
/**
 * <p>Represents a specific metric.</p> <p>Metric is a property of the <a>TargetTrackingMetricStat</a> object.</p>
 */
export declare class TargetTrackingMetric extends SpeakeasyBase {
    dimensions?: TargetTrackingMetricDimension[];
    metricName?: string;
    namespace?: string;
}
