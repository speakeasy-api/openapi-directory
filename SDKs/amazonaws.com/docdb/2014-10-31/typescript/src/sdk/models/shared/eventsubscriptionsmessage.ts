import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventSubscriptionsList } from "./eventsubscriptionslist";



// EventSubscriptionsMessage
/** 
 * Represents the output of <a>DescribeEventSubscriptions</a>.
**/
export class EventSubscriptionsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: EventSubscriptionsList })
  eventSubscriptionsList?: EventSubscriptionsList[];

  @SpeakeasyMetadata()
  marker?: string;
}
