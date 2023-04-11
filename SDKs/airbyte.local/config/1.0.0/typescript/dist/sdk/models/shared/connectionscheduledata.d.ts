import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ConnectionScheduleDataBasicScheduleTimeUnitEnum {
    Minutes = "minutes",
    Hours = "hours",
    Days = "days",
    Weeks = "weeks",
    Months = "months"
}
export declare class ConnectionScheduleDataBasicSchedule extends SpeakeasyBase {
    timeUnit: ConnectionScheduleDataBasicScheduleTimeUnitEnum;
    units: number;
}
export declare class ConnectionScheduleDataCron extends SpeakeasyBase {
    cronExpression: string;
    cronTimeZone: string;
}
/**
 * schedule for when the the connection should run, per the schedule type
 */
export declare class ConnectionScheduleData extends SpeakeasyBase {
    basicSchedule?: ConnectionScheduleDataBasicSchedule;
    cron?: ConnectionScheduleDataCron;
}
