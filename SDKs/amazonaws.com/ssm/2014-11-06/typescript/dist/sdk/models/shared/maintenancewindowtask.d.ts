import { SpeakeasyBase } from "../../../internal/utils";
import { AlarmConfiguration } from "./alarmconfiguration";
import { LoggingInfo } from "./logginginfo";
import { MaintenanceWindowTaskCutoffBehaviorEnum } from "./maintenancewindowtaskcutoffbehaviorenum";
import { MaintenanceWindowTaskParameterValueExpression } from "./maintenancewindowtaskparametervalueexpression";
import { MaintenanceWindowTaskTypeEnum } from "./maintenancewindowtasktypeenum";
import { Target } from "./target";
/**
 * Information about a task defined for a maintenance window.
 */
export declare class MaintenanceWindowTask extends SpeakeasyBase {
    alarmConfiguration?: AlarmConfiguration;
    cutoffBehavior?: MaintenanceWindowTaskCutoffBehaviorEnum;
    description?: string;
    loggingInfo?: LoggingInfo;
    maxConcurrency?: string;
    maxErrors?: string;
    name?: string;
    priority?: number;
    serviceRoleArn?: string;
    targets?: Target[];
    taskArn?: string;
    taskParameters?: Record<string, MaintenanceWindowTaskParameterValueExpression>;
    type?: MaintenanceWindowTaskTypeEnum;
    windowId?: string;
    windowTaskId?: string;
}
