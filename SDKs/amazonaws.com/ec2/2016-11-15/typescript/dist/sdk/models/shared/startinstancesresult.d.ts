import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The current state of the instance.
 */
export declare enum StartInstancesResultStartingInstancesCurrentStateNameEnum {
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
export declare class StartInstancesResultStartingInstancesCurrentState extends SpeakeasyBase {
    code?: number;
    name?: StartInstancesResultStartingInstancesCurrentStateNameEnum;
}
/**
 * The current state of the instance.
 */
export declare enum StartInstancesResultStartingInstancesPreviousStateNameEnum {
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
export declare class StartInstancesResultStartingInstancesPreviousState extends SpeakeasyBase {
    code?: number;
    name?: StartInstancesResultStartingInstancesPreviousStateNameEnum;
}
/**
 * Describes an instance state change.
 */
export declare class StartInstancesResultStartingInstances extends SpeakeasyBase {
    currentState?: StartInstancesResultStartingInstancesCurrentState;
    instanceId?: string;
    previousState?: StartInstancesResultStartingInstancesPreviousState;
}
/**
 * Success
 */
export declare class StartInstancesResult extends SpeakeasyBase {
    startingInstances?: StartInstancesResultStartingInstances[];
}
