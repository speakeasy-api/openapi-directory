import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventCategoriesMapList } from "./eventcategoriesmaplist";



// EventCategoriesMessage
/** 
 * Data returned from the <code>DescribeEventCategories</code> operation.
**/
export class EventCategoriesMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: EventCategoriesMapList })
  eventCategoriesMapList?: EventCategoriesMapList[];
}
