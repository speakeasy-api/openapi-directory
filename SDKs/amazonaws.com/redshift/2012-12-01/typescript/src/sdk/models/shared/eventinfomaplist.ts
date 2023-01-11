import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EventInfoMapList
/** 
 * Describes event information.
**/
export class EventInfoMapList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  eventCategories?: Record<string, any>[];

  @SpeakeasyMetadata()
  eventDescription?: string;

  @SpeakeasyMetadata()
  eventId?: string;

  @SpeakeasyMetadata()
  severity?: string;
}
