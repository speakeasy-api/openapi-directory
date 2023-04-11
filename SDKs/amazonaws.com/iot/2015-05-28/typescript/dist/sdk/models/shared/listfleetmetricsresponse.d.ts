import { SpeakeasyBase } from "../../../internal/utils";
import { FleetMetricNameAndArn } from "./fleetmetricnameandarn";
/**
 * Success
 */
export declare class ListFleetMetricsResponse extends SpeakeasyBase {
    fleetMetrics?: FleetMetricNameAndArn[];
    nextToken?: string;
}
