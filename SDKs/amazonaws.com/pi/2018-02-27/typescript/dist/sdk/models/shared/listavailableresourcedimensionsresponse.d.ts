import { SpeakeasyBase } from "../../../internal/utils";
import { MetricDimensionGroups } from "./metricdimensiongroups";
/**
 * Success
 */
export declare class ListAvailableResourceDimensionsResponse extends SpeakeasyBase {
    metricDimensions?: MetricDimensionGroups[];
    nextToken?: string;
}
