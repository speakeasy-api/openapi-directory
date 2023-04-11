import { SpeakeasyBase } from "../../../internal/utils";
import { MonitoringScheduleSummary } from "./monitoringschedulesummary";
/**
 * Success
 */
export declare class ListMonitoringSchedulesResponse extends SpeakeasyBase {
    monitoringScheduleSummaries: MonitoringScheduleSummary[];
    nextToken?: string;
}
