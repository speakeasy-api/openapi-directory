import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventSubscriptionsList } from "./eventsubscriptionslist";



// EventSubscriptionsMessage
/** 
 * <p/>
**/
export class EventSubscriptionsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: EventSubscriptionsList })
  eventSubscriptionsList?: EventSubscriptionsList[];

  @SpeakeasyMetadata()
  marker?: string;
}
