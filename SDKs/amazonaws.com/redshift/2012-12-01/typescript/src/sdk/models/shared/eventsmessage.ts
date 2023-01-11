import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventList } from "./eventlist";



// EventsMessage
/** 
 * <p/>
**/
export class EventsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: EventList })
  events?: EventList[];

  @SpeakeasyMetadata()
  marker?: string;
}
