import { SpeakeasyBase } from "../../../internal/utils";
import { AlarmConfiguration } from "./alarmconfiguration";
import { AlarmStateInformation } from "./alarmstateinformation";
import { MaintenanceWindowExecutionStatusEnum } from "./maintenancewindowexecutionstatusenum";
import { MaintenanceWindowTaskTypeEnum } from "./maintenancewindowtasktypeenum";
/**
 * Information about a task execution performed as part of a maintenance window execution.
 */
export declare class MaintenanceWindowExecutionTaskIdentity extends SpeakeasyBase {
    alarmConfiguration?: AlarmConfiguration;
    endTime?: Date;
    startTime?: Date;
    status?: MaintenanceWindowExecutionStatusEnum;
    statusDetails?: string;
    taskArn?: string;
    taskExecutionId?: string;
    taskType?: MaintenanceWindowTaskTypeEnum;
    triggeredAlarms?: AlarmStateInformation[];
    windowExecutionId?: string;
}
