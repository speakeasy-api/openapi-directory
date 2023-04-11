import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class DisassociateInstanceEventWindowResultInstanceEventWindowAssociationTargetTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * One or more targets associated with the event window.
 */
export declare class DisassociateInstanceEventWindowResultInstanceEventWindowAssociationTarget extends SpeakeasyBase {
    dedicatedHostIds?: string[];
    instanceIds?: string[];
    tags?: DisassociateInstanceEventWindowResultInstanceEventWindowAssociationTargetTags[];
}
/**
 * The current state of the event window.
 */
export declare enum DisassociateInstanceEventWindowResultInstanceEventWindowStateEnum {
    Creating = "creating",
    Deleting = "deleting",
    Active = "active",
    Deleted = "deleted"
}
/**
 * Describes a tag.
 */
export declare class DisassociateInstanceEventWindowResultInstanceEventWindowTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The day on which the time range ends.
 */
export declare enum DisassociateInstanceEventWindowResultInstanceEventWindowTimeRangesEndWeekDayEnum {
    Sunday = "sunday",
    Monday = "monday",
    Tuesday = "tuesday",
    Wednesday = "wednesday",
    Thursday = "thursday",
    Friday = "friday",
    Saturday = "saturday"
}
/**
 * The day on which the time range begins.
 */
export declare enum DisassociateInstanceEventWindowResultInstanceEventWindowTimeRangesStartWeekDayEnum {
    Sunday = "sunday",
    Monday = "monday",
    Tuesday = "tuesday",
    Wednesday = "wednesday",
    Thursday = "thursday",
    Friday = "friday",
    Saturday = "saturday"
}
/**
 * The start day and time and the end day and time of the time range, in UTC.
 */
export declare class DisassociateInstanceEventWindowResultInstanceEventWindowTimeRanges extends SpeakeasyBase {
    endHour?: number;
    endWeekDay?: DisassociateInstanceEventWindowResultInstanceEventWindowTimeRangesEndWeekDayEnum;
    startHour?: number;
    startWeekDay?: DisassociateInstanceEventWindowResultInstanceEventWindowTimeRangesStartWeekDayEnum;
}
/**
 * Information about the event window.
 */
export declare class DisassociateInstanceEventWindowResultInstanceEventWindow extends SpeakeasyBase {
    associationTarget?: DisassociateInstanceEventWindowResultInstanceEventWindowAssociationTarget;
    cronExpression?: string;
    instanceEventWindowId?: string;
    name?: string;
    state?: DisassociateInstanceEventWindowResultInstanceEventWindowStateEnum;
    tags?: DisassociateInstanceEventWindowResultInstanceEventWindowTags[];
    timeRanges?: DisassociateInstanceEventWindowResultInstanceEventWindowTimeRanges[];
}
/**
 * Success
 */
export declare class DisassociateInstanceEventWindowResult extends SpeakeasyBase {
    instanceEventWindow?: DisassociateInstanceEventWindowResultInstanceEventWindow;
}
