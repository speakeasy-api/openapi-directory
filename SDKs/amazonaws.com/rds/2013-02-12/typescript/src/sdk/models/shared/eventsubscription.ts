import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



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
