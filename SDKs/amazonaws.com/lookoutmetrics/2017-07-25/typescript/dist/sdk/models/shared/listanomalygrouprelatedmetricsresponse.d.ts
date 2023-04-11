import { SpeakeasyBase } from "../../../internal/utils";
import { InterMetricImpactDetails } from "./intermetricimpactdetails";
/**
 * Success
 */
export declare class ListAnomalyGroupRelatedMetricsResponse extends SpeakeasyBase {
    interMetricImpactList?: InterMetricImpactDetails[];
    nextToken?: string;
}
