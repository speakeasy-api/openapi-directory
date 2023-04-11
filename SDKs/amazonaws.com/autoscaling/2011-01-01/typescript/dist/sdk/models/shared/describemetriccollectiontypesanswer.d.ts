import { SpeakeasyBase } from "../../../internal/utils";
import { MetricCollectionType } from "./metriccollectiontype";
import { MetricGranularityType } from "./metricgranularitytype";
/**
 * Success
 */
export declare class DescribeMetricCollectionTypesAnswer extends SpeakeasyBase {
    granularities?: MetricGranularityType[];
    metrics?: MetricCollectionType[];
}
