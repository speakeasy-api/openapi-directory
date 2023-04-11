import { SpeakeasyBase } from "../../../internal/utils";
import { ResponseResourceMetric } from "./responseresourcemetric";
/**
 * Success
 */
export declare class ListAvailableResourceMetricsResponse extends SpeakeasyBase {
    metrics?: ResponseResourceMetric[];
    nextToken?: string;
}
