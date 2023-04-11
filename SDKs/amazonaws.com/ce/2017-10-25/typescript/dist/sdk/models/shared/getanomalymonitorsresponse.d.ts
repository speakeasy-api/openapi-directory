import { SpeakeasyBase } from "../../../internal/utils";
import { AnomalyMonitor } from "./anomalymonitor";
/**
 * Success
 */
export declare class GetAnomalyMonitorsResponse extends SpeakeasyBase {
    anomalyMonitors: AnomalyMonitor[];
    nextPageToken?: string;
}
