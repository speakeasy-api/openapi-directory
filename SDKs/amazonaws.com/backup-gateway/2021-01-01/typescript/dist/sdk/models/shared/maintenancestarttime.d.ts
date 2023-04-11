import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This is your gateway's weekly maintenance start time including the day and time of the week. Note that values are in terms of the gateway's time zone. Can be weekly or monthly.
 */
export declare class MaintenanceStartTime extends SpeakeasyBase {
    dayOfMonth?: number;
    dayOfWeek?: number;
    hourOfDay: number;
    minuteOfHour: number;
}
