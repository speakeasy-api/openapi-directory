import { SpeakeasyBase } from "../../../internal/utils";
export declare class ScheduleWorkPatternEvenWeeks extends SpeakeasyBase {
    hoursFriday?: number;
    hoursMonday?: number;
    hoursSaturday?: number;
    hoursSunday?: number;
    hoursThursday?: number;
    hoursTuesday?: number;
    hoursWednesday?: number;
}
export declare class ScheduleWorkPatternOddWeeks extends SpeakeasyBase {
    hoursFriday?: number;
    hoursMonday?: number;
    hoursSaturday?: number;
    hoursSunday?: number;
    hoursThursday?: number;
    hoursTuesday?: number;
    hoursWednesday?: number;
}
export declare class ScheduleWorkPattern extends SpeakeasyBase {
    evenWeeks?: ScheduleWorkPatternEvenWeeks;
    oddWeeks?: ScheduleWorkPatternOddWeeks;
}
export declare class Schedule extends SpeakeasyBase {
    /**
     * The end date, inclusive, of the schedule period.
     */
    endDate: string;
    /**
     * A unique identifier for an object.
     */
    id: string;
    /**
     * The start date, inclusive, of the schedule period.
     */
    startDate: string;
    workPattern: ScheduleWorkPattern;
}
