import { SpeakeasyBase } from "../../../internal/utils";
import { SourceTypeEnum } from "./sourcetypeenum";
/**
 * Describes an event.
**/
export declare class EventList extends SpeakeasyBase {
    date?: Date;
    eventCategories?: Record<string, any>[];
    eventId?: string;
    message?: string;
    severity?: string;
    sourceIdentifier?: string;
    sourceType?: SourceTypeEnum;
}
