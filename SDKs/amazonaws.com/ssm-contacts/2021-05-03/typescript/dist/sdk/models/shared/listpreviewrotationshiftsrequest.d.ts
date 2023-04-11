import { SpeakeasyBase } from "../../../internal/utils";
import { PreviewOverride } from "./previewoverride";
import { RecurrenceSettings } from "./recurrencesettings";
export declare class ListPreviewRotationShiftsRequest extends SpeakeasyBase {
    endTime: Date;
    maxResults?: number;
    members: string[];
    nextToken?: string;
    overrides?: PreviewOverride[];
    recurrence: RecurrenceSettings;
    rotationStartTime?: Date;
    startTime?: Date;
    timeZoneId: string;
}
