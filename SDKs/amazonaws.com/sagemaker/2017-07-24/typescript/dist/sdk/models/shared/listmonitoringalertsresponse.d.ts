import { SpeakeasyBase } from "../../../internal/utils";
import { MonitoringAlertSummary } from "./monitoringalertsummary";
/**
 * Success
 */
export declare class ListMonitoringAlertsResponse extends SpeakeasyBase {
    monitoringAlertSummaries?: MonitoringAlertSummary[];
    nextToken?: string;
}
