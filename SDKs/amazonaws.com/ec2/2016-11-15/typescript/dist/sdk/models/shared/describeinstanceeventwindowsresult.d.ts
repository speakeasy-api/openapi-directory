import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class DescribeInstanceEventWindowsResultInstanceEventWindowsAssociationTargetTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * One or more targets associated with the event window.
 */
export declare class DescribeInstanceEventWindowsResultInstanceEventWindowsAssociationTarget extends SpeakeasyBase {
    dedicatedHostIds?: string[];
    instanceIds?: string[];
    tags?: DescribeInstanceEventWindowsResultInstanceEventWindowsAssociationTargetTags[];
}
/**
 * The current state of the event window.
 */
export declare enum DescribeInstanceEventWindowsResultInstanceEventWindowsStateEnum {
    Creating = "creating",
    Deleting = "deleting",
    Active = "active",
    Deleted = "deleted"
}
/**
 * Describes a tag.
 */
export declare class DescribeInstanceEventWindowsResultInstanceEventWindowsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The day on which the time range ends.
 */
export declare enum DescribeInstanceEventWindowsResultInstanceEventWindowsTimeRangesEndWeekDayEnum {
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
export declare enum DescribeInstanceEventWindowsResultInstanceEventWindowsTimeRangesStartWeekDayEnum {
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
export declare class DescribeInstanceEventWindowsResultInstanceEventWindowsTimeRanges extends SpeakeasyBase {
    endHour?: number;
    endWeekDay?: DescribeInstanceEventWindowsResultInstanceEventWindowsTimeRangesEndWeekDayEnum;
    startHour?: number;
    startWeekDay?: DescribeInstanceEventWindowsResultInstanceEventWindowsTimeRangesStartWeekDayEnum;
}
/**
 * The event window.
 */
export declare class DescribeInstanceEventWindowsResultInstanceEventWindows extends SpeakeasyBase {
    associationTarget?: DescribeInstanceEventWindowsResultInstanceEventWindowsAssociationTarget;
    cronExpression?: string;
    instanceEventWindowId?: string;
    name?: string;
    state?: DescribeInstanceEventWindowsResultInstanceEventWindowsStateEnum;
    tags?: DescribeInstanceEventWindowsResultInstanceEventWindowsTags[];
    timeRanges?: DescribeInstanceEventWindowsResultInstanceEventWindowsTimeRanges[];
}
/**
 * Success
 */
export declare class DescribeInstanceEventWindowsResult extends SpeakeasyBase {
    instanceEventWindows?: DescribeInstanceEventWindowsResultInstanceEventWindows[];
    nextToken?: string;
}
