import { SpeakeasyBase } from "../../../internal/utils";
import { MetricDefinitionConfig } from "./metricdefinitionconfig";
/**
 * A structure that defines a metric to be used to monitor performance of the variations during a launch.
 */
export declare class MetricMonitorConfig extends SpeakeasyBase {
    metricDefinition: MetricDefinitionConfig;
}
