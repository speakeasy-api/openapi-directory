import { SpeakeasyBase } from "../../../internal/utils";
import { DetectedField } from "./detectedfield";
import { DetectedMetricSource } from "./detectedmetricsource";
/**
 * An inferred dataset configuration.
 */
export declare class DetectedMetricSetConfig extends SpeakeasyBase {
    metricSetFrequency?: DetectedField;
    metricSource?: DetectedMetricSource;
    offset?: DetectedField;
}
