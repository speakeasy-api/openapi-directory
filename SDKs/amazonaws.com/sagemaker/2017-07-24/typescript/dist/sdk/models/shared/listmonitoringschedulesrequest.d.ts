import { SpeakeasyBase } from "../../../internal/utils";
import { MonitoringScheduleSortKeyEnum } from "./monitoringschedulesortkeyenum";
import { MonitoringTypeEnum } from "./monitoringtypeenum";
import { ScheduleStatusEnum } from "./schedulestatusenum";
import { SortOrderEnum } from "./sortorderenum";
export declare class ListMonitoringSchedulesRequest extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    endpointName?: string;
    lastModifiedTimeAfter?: Date;
    lastModifiedTimeBefore?: Date;
    maxResults?: number;
    monitoringJobDefinitionName?: string;
    monitoringTypeEquals?: MonitoringTypeEnum;
    nameContains?: string;
    nextToken?: string;
    sortBy?: MonitoringScheduleSortKeyEnum;
    sortOrder?: SortOrderEnum;
    statusEquals?: ScheduleStatusEnum;
}
