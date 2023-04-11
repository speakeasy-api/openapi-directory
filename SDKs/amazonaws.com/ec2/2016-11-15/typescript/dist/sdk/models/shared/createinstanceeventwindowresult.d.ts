import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class CreateInstanceEventWindowResultInstanceEventWindowAssociationTargetTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * One or more targets associated with the event window.
 */
export declare class CreateInstanceEventWindowResultInstanceEventWindowAssociationTarget extends SpeakeasyBase {
    dedicatedHostIds?: string[];
    instanceIds?: string[];
    tags?: CreateInstanceEventWindowResultInstanceEventWindowAssociationTargetTags[];
}
/**
 * The current state of the event window.
 */
export declare enum CreateInstanceEventWindowResultInstanceEventWindowStateEnum {
    Creating = "creating",
    Deleting = "deleting",
    Active = "active",
    Deleted = "deleted"
}
/**
 * Describes a tag.
 */
export declare class CreateInstanceEventWindowResultInstanceEventWindowTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The day on which the time range ends.
 */
export declare enum CreateInstanceEventWindowResultInstanceEventWindowTimeRangesEndWeekDayEnum {
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
export declare enum CreateInstanceEventWindowResultInstanceEventWindowTimeRangesStartWeekDayEnum {
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
export declare class CreateInstanceEventWindowResultInstanceEventWindowTimeRanges extends SpeakeasyBase {
    endHour?: number;
    endWeekDay?: CreateInstanceEventWindowResultInstanceEventWindowTimeRangesEndWeekDayEnum;
    startHour?: number;
    startWeekDay?: CreateInstanceEventWindowResultInstanceEventWindowTimeRangesStartWeekDayEnum;
}
/**
 * Information about the event window.
 */
export declare class CreateInstanceEventWindowResultInstanceEventWindow extends SpeakeasyBase {
    associationTarget?: CreateInstanceEventWindowResultInstanceEventWindowAssociationTarget;
    cronExpression?: string;
    instanceEventWindowId?: string;
    name?: string;
    state?: CreateInstanceEventWindowResultInstanceEventWindowStateEnum;
    tags?: CreateInstanceEventWindowResultInstanceEventWindowTags[];
    timeRanges?: CreateInstanceEventWindowResultInstanceEventWindowTimeRanges[];
}
/**
 * Success
 */
export declare class CreateInstanceEventWindowResult extends SpeakeasyBase {
    instanceEventWindow?: CreateInstanceEventWindowResultInstanceEventWindow;
}
