import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventList } from "./eventlist";



// EventsMessage
/** 
 * Represents the output of a <code>DescribeEvents</code> operation.
**/
export class EventsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: EventList })
  events?: EventList[];

  @SpeakeasyMetadata()
  marker?: string;
}
