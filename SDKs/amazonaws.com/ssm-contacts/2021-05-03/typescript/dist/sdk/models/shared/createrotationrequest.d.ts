import { SpeakeasyBase } from "../../../internal/utils";
import { RecurrenceSettings } from "./recurrencesettings";
import { Tag } from "./tag";
export declare class CreateRotationRequest extends SpeakeasyBase {
    contactIds: string[];
    idempotencyToken?: string;
    name: string;
    recurrence: RecurrenceSettings;
    startTime?: Date;
    tags?: Tag[];
    timeZoneId: string;
}
