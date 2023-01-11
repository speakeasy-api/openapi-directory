import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventCategoriesMapList } from "./eventcategoriesmaplist";



export class EventCategoriesMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: EventCategoriesMapList })
  eventCategoriesMapList?: EventCategoriesMapList[];
}
