import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The current state of the instance.
 */
export declare enum StopInstancesResultStoppingInstancesCurrentStateNameEnum {
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
export declare class StopInstancesResultStoppingInstancesCurrentState extends SpeakeasyBase {
    code?: number;
    name?: StopInstancesResultStoppingInstancesCurrentStateNameEnum;
}
/**
 * The current state of the instance.
 */
export declare enum StopInstancesResultStoppingInstancesPreviousStateNameEnum {
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
export declare class StopInstancesResultStoppingInstancesPreviousState extends SpeakeasyBase {
    code?: number;
    name?: StopInstancesResultStoppingInstancesPreviousStateNameEnum;
}
/**
 * Describes an instance state change.
 */
export declare class StopInstancesResultStoppingInstances extends SpeakeasyBase {
    currentState?: StopInstancesResultStoppingInstancesCurrentState;
    instanceId?: string;
    previousState?: StopInstancesResultStoppingInstancesPreviousState;
}
/**
 * Success
 */
export declare class StopInstancesResult extends SpeakeasyBase {
    stoppingInstances?: StopInstancesResultStoppingInstances[];
}
