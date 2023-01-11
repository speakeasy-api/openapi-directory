import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventCategoriesMapList } from "./eventcategoriesmaplist";



// EventCategoriesMessage
/** 
 * Represents the output of <a>DescribeEventCategories</a>.
**/
export class EventCategoriesMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: EventCategoriesMapList })
  eventCategoriesMapList?: EventCategoriesMapList[];
}
