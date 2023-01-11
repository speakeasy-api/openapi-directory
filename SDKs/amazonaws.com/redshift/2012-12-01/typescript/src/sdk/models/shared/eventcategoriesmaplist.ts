import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventInfoMapList } from "./eventinfomaplist";



// EventCategoriesMapList
/** 
 * Describes event categories.
**/
export class EventCategoriesMapList extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: EventInfoMapList })
  events?: EventInfoMapList[];

  @SpeakeasyMetadata()
  sourceType?: string;
}
