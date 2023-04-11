import { SpeakeasyBase } from "../../../internal/utils";
import { JobScheduleDayOfTheWeekEnum } from "./jobscheduledayoftheweekenum";
/**
 * The day and time when do you want to start the Identity Resolution Job every week.
 */
export declare class JobSchedule extends SpeakeasyBase {
    dayOfTheWeek: JobScheduleDayOfTheWeekEnum;
    time: string;
}
