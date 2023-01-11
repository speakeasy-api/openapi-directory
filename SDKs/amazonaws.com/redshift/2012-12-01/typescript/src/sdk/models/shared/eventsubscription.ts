import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";



// EventSubscription
/** 
 * Describes event subscriptions.
**/
export class EventSubscription extends SpeakeasyBase {
  @SpeakeasyMetadata()
  custSubscriptionId?: string;

  @SpeakeasyMetadata()
  customerAwsId?: string;

  @SpeakeasyMetadata()
  enabled?: boolean;

  @SpeakeasyMetadata()
  eventCategoriesList?: Record<string, any>[];

  @SpeakeasyMetadata()
  severity?: string;

  @SpeakeasyMetadata()
  snsTopicArn?: string;

  @SpeakeasyMetadata()
  sourceIdsList?: Record<string, any>[];

  @SpeakeasyMetadata()
  sourceType?: string;

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata()
  subscriptionCreationTime?: Date;

  @SpeakeasyMetadata({ elemType: TagList })
  tags?: TagList[];
}
