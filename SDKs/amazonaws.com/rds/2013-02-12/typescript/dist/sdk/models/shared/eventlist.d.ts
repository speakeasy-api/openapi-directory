import { SpeakeasyBase } from "../../../internal/utils";
import { SourceTypeEnum } from "./sourcetypeenum";
export declare class EventList extends SpeakeasyBase {
    date?: Date;
    eventCategories?: Record<string, any>[];
    message?: string;
    sourceIdentifier?: string;
    sourceType?: SourceTypeEnum;
}
