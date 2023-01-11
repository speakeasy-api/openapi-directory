import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventList } from "./eventlist";



export class EventsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: EventList })
  events?: EventList[];

  @SpeakeasyMetadata()
  marker?: string;
}
