import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An event source type, accompanied by one or more event category names.
**/
export declare class EventCategoriesMapList extends SpeakeasyBase {
    eventCategories?: Record<string, any>[];
    sourceType?: string;
}
