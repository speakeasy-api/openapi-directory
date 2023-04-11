import { SpeakeasyBase } from "../../../internal/utils";
import { MonitoringAlertHistorySortKeyEnum } from "./monitoringalerthistorysortkeyenum";
import { MonitoringAlertStatusEnum } from "./monitoringalertstatusenum";
import { SortOrderEnum } from "./sortorderenum";
export declare class ListMonitoringAlertHistoryRequest extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    maxResults?: number;
    monitoringAlertName?: string;
    monitoringScheduleName?: string;
    nextToken?: string;
    sortBy?: MonitoringAlertHistorySortKeyEnum;
    sortOrder?: SortOrderEnum;
    statusEquals?: MonitoringAlertStatusEnum;
}
