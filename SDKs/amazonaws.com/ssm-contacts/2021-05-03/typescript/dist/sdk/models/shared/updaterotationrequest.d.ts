import { SpeakeasyBase } from "../../../internal/utils";
import { RecurrenceSettings } from "./recurrencesettings";
export declare class UpdateRotationRequest extends SpeakeasyBase {
    contactIds?: string[];
    recurrence: RecurrenceSettings;
    rotationId: string;
    startTime?: Date;
    timeZoneId?: string;
}
