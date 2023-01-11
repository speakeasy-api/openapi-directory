import { SpeakeasyBase } from "../../../internal/utils";
import { SourceTypeEnum } from "./sourcetypeenum";
/**
 * Detailed information about an event.
**/
export declare class EventList extends SpeakeasyBase {
    date?: Date;
    eventCategories?: Record<string, any>[];
    message?: string;
    sourceArn?: string;
    sourceIdentifier?: string;
    sourceType?: SourceTypeEnum;
}
