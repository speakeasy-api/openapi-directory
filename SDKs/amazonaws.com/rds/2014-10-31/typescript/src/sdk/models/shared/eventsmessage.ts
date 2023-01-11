import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventList } from "./eventlist";



// EventsMessage
/** 
 *  Contains the result of a successful invocation of the <code>DescribeEvents</code> action. 
**/
export class EventsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: EventList })
  events?: EventList[];

  @SpeakeasyMetadata()
  marker?: string;
}
