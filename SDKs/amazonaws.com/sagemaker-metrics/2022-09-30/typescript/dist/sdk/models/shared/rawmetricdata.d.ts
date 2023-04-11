import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The raw metric data to associate with the resource.
 */
export declare class RawMetricData extends SpeakeasyBase {
    metricName: string;
    step?: number;
    timestamp: Date;
    value: number;
}
