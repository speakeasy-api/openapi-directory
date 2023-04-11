import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The event code.
 */
export declare enum ModifyInstanceEventStartTimeResultEventCodeEnum {
    InstanceReboot = "instance-reboot",
    SystemReboot = "system-reboot",
    SystemMaintenance = "system-maintenance",
    InstanceRetirement = "instance-retirement",
    InstanceStop = "instance-stop"
}
/**
 * Information about the event.
 */
export declare class ModifyInstanceEventStartTimeResultEvent extends SpeakeasyBase {
    code?: ModifyInstanceEventStartTimeResultEventCodeEnum;
    description?: string;
    instanceEventId?: string;
    notAfter?: Date;
    notBefore?: Date;
    notBeforeDeadline?: Date;
}
/**
 * Success
 */
export declare class ModifyInstanceEventStartTimeResult extends SpeakeasyBase {
    event?: ModifyInstanceEventStartTimeResultEvent;
}
