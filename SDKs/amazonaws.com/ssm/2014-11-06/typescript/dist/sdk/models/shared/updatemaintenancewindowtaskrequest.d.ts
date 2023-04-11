import { SpeakeasyBase } from "../../../internal/utils";
import { AlarmConfiguration } from "./alarmconfiguration";
import { LoggingInfo } from "./logginginfo";
import { MaintenanceWindowTaskCutoffBehaviorEnum } from "./maintenancewindowtaskcutoffbehaviorenum";
import { MaintenanceWindowTaskInvocationParameters } from "./maintenancewindowtaskinvocationparameters";
import { MaintenanceWindowTaskParameterValueExpression } from "./maintenancewindowtaskparametervalueexpression";
import { Target } from "./target";
export declare class UpdateMaintenanceWindowTaskRequest extends SpeakeasyBase {
    alarmConfiguration?: AlarmConfiguration;
    cutoffBehavior?: MaintenanceWindowTaskCutoffBehaviorEnum;
    description?: string;
    loggingInfo?: LoggingInfo;
    maxConcurrency?: string;
    maxErrors?: string;
    name?: string;
    priority?: number;
    replace?: boolean;
    serviceRoleArn?: string;
    targets?: Target[];
    taskArn?: string;
    taskInvocationParameters?: MaintenanceWindowTaskInvocationParameters;
    taskParameters?: Record<string, MaintenanceWindowTaskParameterValueExpression>;
    windowId: string;
    windowTaskId: string;
}
