import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EventSubscriptionsList
/** 
 * Detailed information about an event to which you have subscribed.
**/
export class EventSubscriptionsList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  custSubscriptionId?: string;

  @SpeakeasyMetadata()
  customerAwsId?: string;

  @SpeakeasyMetadata()
  enabled?: boolean;

  @SpeakeasyMetadata()
  eventCategoriesList?: Record<string, any>[];

  @SpeakeasyMetadata()
  eventSubscriptionArn?: string;

  @SpeakeasyMetadata()
  snsTopicArn?: string;

  @SpeakeasyMetadata()
  sourceIdsList?: Record<string, any>[];

  @SpeakeasyMetadata()
  sourceType?: string;

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata()
  subscriptionCreationTime?: string;
}
