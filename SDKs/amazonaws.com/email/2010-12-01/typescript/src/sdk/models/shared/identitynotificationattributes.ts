import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class IdentityNotificationAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bounceTopic?: string;

  @SpeakeasyMetadata()
  complaintTopic?: string;

  @SpeakeasyMetadata()
  deliveryTopic?: string;

  @SpeakeasyMetadata()
  forwardingEnabled?: boolean;

  @SpeakeasyMetadata()
  headersInBounceNotificationsEnabled?: boolean;

  @SpeakeasyMetadata()
  headersInComplaintNotificationsEnabled?: boolean;

  @SpeakeasyMetadata()
  headersInDeliveryNotificationsEnabled?: boolean;
}
