import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventSubscriptionsList } from "./eventsubscriptionslist";



// EventSubscriptionsMessage
/** 
 * Data returned by the <b>DescribeEventSubscriptions</b> action.
**/
export class EventSubscriptionsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: EventSubscriptionsList })
  eventSubscriptionsList?: EventSubscriptionsList[];

  @SpeakeasyMetadata()
  marker?: string;
}
