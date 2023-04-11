import { SpeakeasyBase } from "../../../internal/utils";
import { MetricEnum } from "./metricenum";
import { MetricNamespaceEnum } from "./metricnamespaceenum";
/**
 * Represents a single metric data query to include in a batch.
 */
export declare class BatchGetMetricDataQuery extends SpeakeasyBase {
    dimensions?: Record<string, string>;
    endDate: Date;
    id: string;
    metric: MetricEnum;
    namespace: MetricNamespaceEnum;
    startDate: Date;
}
