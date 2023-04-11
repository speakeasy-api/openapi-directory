import { SpeakeasyBase } from "../../../internal/utils";
import { MetricTransformation } from "./metrictransformation";
/**
 * Metric filters express how CloudWatch Logs would extract metric observations from ingested log events and transform them into metric data in a CloudWatch metric.
 */
export declare class MetricFilter extends SpeakeasyBase {
    creationTime?: number;
    filterName?: string;
    /**
     * A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event can contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.
     */
    filterPattern?: string;
    logGroupName?: string;
    metricTransformations?: MetricTransformation[];
}
