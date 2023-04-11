import { SpeakeasyBase } from "../../../internal/utils";
import { MetricDefinition } from "./metricdefinition";
/**
 * A structure that defines a metric to be used to monitor performance of the variations during a launch.
 */
export declare class MetricMonitor extends SpeakeasyBase {
    metricDefinition: MetricDefinition;
}
