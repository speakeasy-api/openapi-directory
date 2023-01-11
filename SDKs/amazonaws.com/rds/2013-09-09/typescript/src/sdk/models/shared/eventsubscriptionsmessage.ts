import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventSubscriptionsList } from "./eventsubscriptionslist";



export class EventSubscriptionsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: EventSubscriptionsList })
  eventSubscriptionsList?: EventSubscriptionsList[];

  @SpeakeasyMetadata()
  marker?: string;
}
