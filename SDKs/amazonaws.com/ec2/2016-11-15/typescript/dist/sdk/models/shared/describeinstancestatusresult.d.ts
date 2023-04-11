import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The event code.
 */
export declare enum DescribeInstanceStatusResultInstanceStatusesEventsCodeEnum {
    InstanceReboot = "instance-reboot",
    SystemReboot = "system-reboot",
    SystemMaintenance = "system-maintenance",
    InstanceRetirement = "instance-retirement",
    InstanceStop = "instance-stop"
}
/**
 * Describes a scheduled event for an instance.
 */
export declare class DescribeInstanceStatusResultInstanceStatusesEvents extends SpeakeasyBase {
    code?: DescribeInstanceStatusResultInstanceStatusesEventsCodeEnum;
    description?: string;
    instanceEventId?: string;
    notAfter?: Date;
    notBefore?: Date;
    notBeforeDeadline?: Date;
}
/**
 * The current state of the instance.
 */
export declare enum DescribeInstanceStatusResultInstanceStatusesInstanceStateNameEnum {
    Pending = "pending",
    Running = "running",
    ShuttingDown = "shutting-down",
    Terminated = "terminated",
    Stopping = "stopping",
    Stopped = "stopped"
}
/**
 * The intended state of the instance. <a>DescribeInstanceStatus</a> requires that an instance be in the <code>running</code> state.
 */
export declare class DescribeInstanceStatusResultInstanceStatusesInstanceState extends SpeakeasyBase {
    code?: number;
    name?: DescribeInstanceStatusResultInstanceStatusesInstanceStateNameEnum;
}
/**
 * The type of instance status.
 */
export declare enum DescribeInstanceStatusResultInstanceStatusesInstanceStatusDetailsNameEnum {
    Reachability = "reachability"
}
/**
 * The status.
 */
export declare enum DescribeInstanceStatusResultInstanceStatusesInstanceStatusDetailsStatusEnum {
    Passed = "passed",
    Failed = "failed",
    InsufficientData = "insufficient-data",
    Initializing = "initializing"
}
/**
 * Describes the instance status.
 */
export declare class DescribeInstanceStatusResultInstanceStatusesInstanceStatusDetails extends SpeakeasyBase {
    impairedSince?: Date;
    name?: DescribeInstanceStatusResultInstanceStatusesInstanceStatusDetailsNameEnum;
    status?: DescribeInstanceStatusResultInstanceStatusesInstanceStatusDetailsStatusEnum;
}
/**
 * The status.
 */
export declare enum DescribeInstanceStatusResultInstanceStatusesInstanceStatusStatusEnum {
    Ok = "ok",
    Impaired = "impaired",
    InsufficientData = "insufficient-data",
    NotApplicable = "not-applicable",
    Initializing = "initializing"
}
/**
 * Reports impaired functionality that stems from issues internal to the instance, such as impaired reachability.
 */
export declare class DescribeInstanceStatusResultInstanceStatusesInstanceStatus extends SpeakeasyBase {
    details?: DescribeInstanceStatusResultInstanceStatusesInstanceStatusDetails[];
    status?: DescribeInstanceStatusResultInstanceStatusesInstanceStatusStatusEnum;
}
/**
 * The type of instance status.
 */
export declare enum DescribeInstanceStatusResultInstanceStatusesSystemStatusDetailsNameEnum {
    Reachability = "reachability"
}
/**
 * The status.
 */
export declare enum DescribeInstanceStatusResultInstanceStatusesSystemStatusDetailsStatusEnum {
    Passed = "passed",
    Failed = "failed",
    InsufficientData = "insufficient-data",
    Initializing = "initializing"
}
/**
 * Describes the instance status.
 */
export declare class DescribeInstanceStatusResultInstanceStatusesSystemStatusDetails extends SpeakeasyBase {
    impairedSince?: Date;
    name?: DescribeInstanceStatusResultInstanceStatusesSystemStatusDetailsNameEnum;
    status?: DescribeInstanceStatusResultInstanceStatusesSystemStatusDetailsStatusEnum;
}
/**
 * The status.
 */
export declare enum DescribeInstanceStatusResultInstanceStatusesSystemStatusStatusEnum {
    Ok = "ok",
    Impaired = "impaired",
    InsufficientData = "insufficient-data",
    NotApplicable = "not-applicable",
    Initializing = "initializing"
}
/**
 * Reports impaired functionality that stems from issues related to the systems that support an instance, such as hardware failures and network connectivity problems.
 */
export declare class DescribeInstanceStatusResultInstanceStatusesSystemStatus extends SpeakeasyBase {
    details?: DescribeInstanceStatusResultInstanceStatusesSystemStatusDetails[];
    status?: DescribeInstanceStatusResultInstanceStatusesSystemStatusStatusEnum;
}
/**
 * Describes the status of an instance.
 */
export declare class DescribeInstanceStatusResultInstanceStatuses extends SpeakeasyBase {
    availabilityZone?: string;
    events?: DescribeInstanceStatusResultInstanceStatusesEvents[];
    instanceId?: string;
    instanceState?: DescribeInstanceStatusResultInstanceStatusesInstanceState;
    instanceStatus?: DescribeInstanceStatusResultInstanceStatusesInstanceStatus;
    outpostArn?: string;
    systemStatus?: DescribeInstanceStatusResultInstanceStatusesSystemStatus;
}
/**
 * Success
 */
export declare class DescribeInstanceStatusResult extends SpeakeasyBase {
    instanceStatuses?: DescribeInstanceStatusResultInstanceStatuses[];
    nextToken?: string;
}
