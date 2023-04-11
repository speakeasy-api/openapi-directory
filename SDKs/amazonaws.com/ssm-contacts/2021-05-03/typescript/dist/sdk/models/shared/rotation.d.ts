import { SpeakeasyBase } from "../../../internal/utils";
import { RecurrenceSettings } from "./recurrencesettings";
/**
 * Information about a rotation in an on-call schedule.
 */
export declare class Rotation extends SpeakeasyBase {
    contactIds?: string[];
    name: string;
    recurrence?: RecurrenceSettings;
    rotationArn: string;
    startTime?: Date;
    timeZoneId?: string;
}
