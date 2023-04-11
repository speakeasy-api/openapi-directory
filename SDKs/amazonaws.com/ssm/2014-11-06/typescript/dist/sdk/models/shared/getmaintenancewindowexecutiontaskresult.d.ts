import { SpeakeasyBase } from "../../../internal/utils";
import { AlarmConfiguration } from "./alarmconfiguration";
import { AlarmStateInformation } from "./alarmstateinformation";
import { MaintenanceWindowExecutionStatusEnum } from "./maintenancewindowexecutionstatusenum";
import { MaintenanceWindowTaskParameterValueExpression } from "./maintenancewindowtaskparametervalueexpression";
import { MaintenanceWindowTaskTypeEnum } from "./maintenancewindowtasktypeenum";
/**
 * Success
 */
export declare class GetMaintenanceWindowExecutionTaskResult extends SpeakeasyBase {
    alarmConfiguration?: AlarmConfiguration;
    endTime?: Date;
    maxConcurrency?: string;
    maxErrors?: string;
    priority?: number;
    serviceRole?: string;
    startTime?: Date;
    status?: MaintenanceWindowExecutionStatusEnum;
    statusDetails?: string;
    taskArn?: string;
    taskExecutionId?: string;
    taskParameters?: Record<string, MaintenanceWindowTaskParameterValueExpression>[];
    triggeredAlarms?: AlarmStateInformation[];
    type?: MaintenanceWindowTaskTypeEnum;
    windowExecutionId?: string;
}
