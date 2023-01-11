import { SpeakeasyBase } from "../../../internal/utils";
import { StandardUnitEnum } from "./standardunitenum";
/**
 * Indicates how to transform ingested log events to metric data in a CloudWatch metric.
**/
export declare class MetricTransformation extends SpeakeasyBase {
    defaultValue?: number;
    dimensions?: Record<string, string>;
    metricName: string;
    metricNamespace: string;
    metricValue: string;
    unit?: StandardUnitEnum;
}
