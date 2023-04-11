import { SpeakeasyBase } from "../../../internal/utils";
import { MonitoringAlertHistorySummary } from "./monitoringalerthistorysummary";
/**
 * Success
 */
export declare class ListMonitoringAlertHistoryResponse extends SpeakeasyBase {
    monitoringAlertHistory?: MonitoringAlertHistorySummary[];
    nextToken?: string;
}
