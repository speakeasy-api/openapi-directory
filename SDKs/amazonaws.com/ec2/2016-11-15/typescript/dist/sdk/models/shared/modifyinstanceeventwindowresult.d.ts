import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class ModifyInstanceEventWindowResultInstanceEventWindowAssociationTargetTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * One or more targets associated with the event window.
 */
export declare class ModifyInstanceEventWindowResultInstanceEventWindowAssociationTarget extends SpeakeasyBase {
    dedicatedHostIds?: string[];
    instanceIds?: string[];
    tags?: ModifyInstanceEventWindowResultInstanceEventWindowAssociationTargetTags[];
}
/**
 * The current state of the event window.
 */
export declare enum ModifyInstanceEventWindowResultInstanceEventWindowStateEnum {
    Creating = "creating",
    Deleting = "deleting",
    Active = "active",
    Deleted = "deleted"
}
/**
 * Describes a tag.
 */
export declare class ModifyInstanceEventWindowResultInstanceEventWindowTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The day on which the time range ends.
 */
export declare enum ModifyInstanceEventWindowResultInstanceEventWindowTimeRangesEndWeekDayEnum {
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
export declare enum ModifyInstanceEventWindowResultInstanceEventWindowTimeRangesStartWeekDayEnum {
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
export declare class ModifyInstanceEventWindowResultInstanceEventWindowTimeRanges extends SpeakeasyBase {
    endHour?: number;
    endWeekDay?: ModifyInstanceEventWindowResultInstanceEventWindowTimeRangesEndWeekDayEnum;
    startHour?: number;
    startWeekDay?: ModifyInstanceEventWindowResultInstanceEventWindowTimeRangesStartWeekDayEnum;
}
/**
 * Information about the event window.
 */
export declare class ModifyInstanceEventWindowResultInstanceEventWindow extends SpeakeasyBase {
    associationTarget?: ModifyInstanceEventWindowResultInstanceEventWindowAssociationTarget;
    cronExpression?: string;
    instanceEventWindowId?: string;
    name?: string;
    state?: ModifyInstanceEventWindowResultInstanceEventWindowStateEnum;
    tags?: ModifyInstanceEventWindowResultInstanceEventWindowTags[];
    timeRanges?: ModifyInstanceEventWindowResultInstanceEventWindowTimeRanges[];
}
/**
 * Success
 */
export declare class ModifyInstanceEventWindowResult extends SpeakeasyBase {
    instanceEventWindow?: ModifyInstanceEventWindowResultInstanceEventWindow;
}
