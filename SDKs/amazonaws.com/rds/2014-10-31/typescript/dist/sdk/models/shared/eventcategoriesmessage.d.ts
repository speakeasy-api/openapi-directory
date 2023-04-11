import { SpeakeasyBase } from "../../../internal/utils";
import { EventCategoriesMapList } from "./eventcategoriesmaplist";
/**
 * Data returned from the <code>DescribeEventCategories</code> operation.
 */
export declare class EventCategoriesMessage extends SpeakeasyBase {
    eventCategoriesMapList?: EventCategoriesMapList[];
}
