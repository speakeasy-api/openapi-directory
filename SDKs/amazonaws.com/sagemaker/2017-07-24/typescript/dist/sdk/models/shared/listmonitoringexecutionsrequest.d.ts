import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutionStatusEnum } from "./executionstatusenum";
import { MonitoringExecutionSortKeyEnum } from "./monitoringexecutionsortkeyenum";
import { MonitoringTypeEnum } from "./monitoringtypeenum";
import { SortOrderEnum } from "./sortorderenum";
export declare class ListMonitoringExecutionsRequest extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    endpointName?: string;
    lastModifiedTimeAfter?: Date;
    lastModifiedTimeBefore?: Date;
    maxResults?: number;
    monitoringJobDefinitionName?: string;
    monitoringScheduleName?: string;
    monitoringTypeEquals?: MonitoringTypeEnum;
    nextToken?: string;
    scheduledTimeAfter?: Date;
    scheduledTimeBefore?: Date;
    sortBy?: MonitoringExecutionSortKeyEnum;
    sortOrder?: SortOrderEnum;
    statusEquals?: ExecutionStatusEnum;
}
