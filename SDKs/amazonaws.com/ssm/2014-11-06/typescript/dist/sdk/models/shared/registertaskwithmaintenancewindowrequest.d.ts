import { SpeakeasyBase } from "../../../internal/utils";
import { AlarmConfiguration } from "./alarmconfiguration";
import { LoggingInfo } from "./logginginfo";
import { MaintenanceWindowTaskCutoffBehaviorEnum } from "./maintenancewindowtaskcutoffbehaviorenum";
import { MaintenanceWindowTaskInvocationParameters } from "./maintenancewindowtaskinvocationparameters";
import { MaintenanceWindowTaskParameterValueExpression } from "./maintenancewindowtaskparametervalueexpression";
import { MaintenanceWindowTaskTypeEnum } from "./maintenancewindowtasktypeenum";
import { Target } from "./target";
export declare class RegisterTaskWithMaintenanceWindowRequest extends SpeakeasyBase {
    alarmConfiguration?: AlarmConfiguration;
    clientToken?: string;
    cutoffBehavior?: MaintenanceWindowTaskCutoffBehaviorEnum;
    description?: string;
    loggingInfo?: LoggingInfo;
    maxConcurrency?: string;
    maxErrors?: string;
    name?: string;
    priority?: number;
    serviceRoleArn?: string;
    targets?: Target[];
    taskArn: string;
    taskInvocationParameters?: MaintenanceWindowTaskInvocationParameters;
    taskParameters?: Record<string, MaintenanceWindowTaskParameterValueExpression>;
    taskType: MaintenanceWindowTaskTypeEnum;
    windowId: string;
}
