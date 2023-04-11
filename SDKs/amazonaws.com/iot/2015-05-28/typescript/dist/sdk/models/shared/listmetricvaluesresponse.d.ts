import { SpeakeasyBase } from "../../../internal/utils";
import { MetricDatum } from "./metricdatum";
/**
 * Success
 */
export declare class ListMetricValuesResponse extends SpeakeasyBase {
    metricDatumList?: MetricDatum[];
    nextToken?: string;
}
