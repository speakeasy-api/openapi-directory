import { SpeakeasyBase } from "../../../internal/utils";
import { RecurrenceSettings } from "./recurrencesettings";
/**
 * Success
 */
export declare class GetRotationResult extends SpeakeasyBase {
    contactIds: string[];
    name: string;
    recurrence: RecurrenceSettings;
    rotationArn: string;
    startTime: Date;
    timeZoneId: string;
}
