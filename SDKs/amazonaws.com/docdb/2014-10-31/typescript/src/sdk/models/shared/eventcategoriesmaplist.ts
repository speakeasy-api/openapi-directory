import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EventCategoriesMapList
/** 
 * An event source type, accompanied by one or more event category names.
**/
export class EventCategoriesMapList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  eventCategories?: Record<string, any>[];

  @SpeakeasyMetadata()
  sourceType?: string;
}
