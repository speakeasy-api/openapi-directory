import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventCategoriesMapList } from "./eventcategoriesmaplist";



// EventCategoriesMessage
/** 
 * <p/>
**/
export class EventCategoriesMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: EventCategoriesMapList })
  eventCategoriesMapList?: EventCategoriesMapList[];
}
