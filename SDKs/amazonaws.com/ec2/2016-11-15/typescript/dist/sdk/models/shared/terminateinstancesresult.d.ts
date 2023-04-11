import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The current state of the instance.
 */
export declare enum TerminateInstancesResultTerminatingInstancesCurrentStateNameEnum {
    Pending = "pending",
    Running = "running",
    ShuttingDown = "shutting-down",
    Terminated = "terminated",
    Stopping = "stopping",
    Stopped = "stopped"
}
/**
 * The current state of the instance.
 */
export declare class TerminateInstancesResultTerminatingInstancesCurrentState extends SpeakeasyBase {
    code?: number;
    name?: TerminateInstancesResultTerminatingInstancesCurrentStateNameEnum;
}
/**
 * The current state of the instance.
 */
export declare enum TerminateInstancesResultTerminatingInstancesPreviousStateNameEnum {
    Pending = "pending",
    Running = "running",
    ShuttingDown = "shutting-down",
    Terminated = "terminated",
    Stopping = "stopping",
    Stopped = "stopped"
}
/**
 * The previous state of the instance.
 */
export declare class TerminateInstancesResultTerminatingInstancesPreviousState extends SpeakeasyBase {
    code?: number;
    name?: TerminateInstancesResultTerminatingInstancesPreviousStateNameEnum;
}
/**
 * Describes an instance state change.
 */
export declare class TerminateInstancesResultTerminatingInstances extends SpeakeasyBase {
    currentState?: TerminateInstancesResultTerminatingInstancesCurrentState;
    instanceId?: string;
    previousState?: TerminateInstancesResultTerminatingInstancesPreviousState;
}
/**
 * Success
 */
export declare class TerminateInstancesResult extends SpeakeasyBase {
    terminatingInstances?: TerminateInstancesResultTerminatingInstances[];
}
