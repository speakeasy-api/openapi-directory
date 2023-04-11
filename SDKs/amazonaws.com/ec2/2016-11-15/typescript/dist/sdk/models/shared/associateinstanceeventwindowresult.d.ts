import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class AssociateInstanceEventWindowResultInstanceEventWindowAssociationTargetTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * One or more targets associated with the event window.
 */
export declare class AssociateInstanceEventWindowResultInstanceEventWindowAssociationTarget extends SpeakeasyBase {
    dedicatedHostIds?: string[];
    instanceIds?: string[];
    tags?: AssociateInstanceEventWindowResultInstanceEventWindowAssociationTargetTags[];
}
/**
 * The current state of the event window.
 */
export declare enum AssociateInstanceEventWindowResultInstanceEventWindowStateEnum {
    Creating = "creating",
    Deleting = "deleting",
    Active = "active",
    Deleted = "deleted"
}
/**
 * Describes a tag.
 */
export declare class AssociateInstanceEventWindowResultInstanceEventWindowTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The day on which the time range ends.
 */
export declare enum AssociateInstanceEventWindowResultInstanceEventWindowTimeRangesEndWeekDayEnum {
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
export declare enum AssociateInstanceEventWindowResultInstanceEventWindowTimeRangesStartWeekDayEnum {
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
export declare class AssociateInstanceEventWindowResultInstanceEventWindowTimeRanges extends SpeakeasyBase {
    endHour?: number;
    endWeekDay?: AssociateInstanceEventWindowResultInstanceEventWindowTimeRangesEndWeekDayEnum;
    startHour?: number;
    startWeekDay?: AssociateInstanceEventWindowResultInstanceEventWindowTimeRangesStartWeekDayEnum;
}
/**
 * Information about the event window.
 */
export declare class AssociateInstanceEventWindowResultInstanceEventWindow extends SpeakeasyBase {
    associationTarget?: AssociateInstanceEventWindowResultInstanceEventWindowAssociationTarget;
    cronExpression?: string;
    instanceEventWindowId?: string;
    name?: string;
    state?: AssociateInstanceEventWindowResultInstanceEventWindowStateEnum;
    tags?: AssociateInstanceEventWindowResultInstanceEventWindowTags[];
    timeRanges?: AssociateInstanceEventWindowResultInstanceEventWindowTimeRanges[];
}
/**
 * Success
 */
export declare class AssociateInstanceEventWindowResult extends SpeakeasyBase {
    instanceEventWindow?: AssociateInstanceEventWindowResultInstanceEventWindow;
}
