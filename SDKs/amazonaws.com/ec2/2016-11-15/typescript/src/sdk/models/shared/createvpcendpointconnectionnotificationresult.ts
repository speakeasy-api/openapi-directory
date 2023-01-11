import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateVpcEndpointConnectionNotificationResultConnectionNotification
/** 
 * Information about the notification.
**/
export class CreateVpcEndpointConnectionNotificationResultConnectionNotification extends SpeakeasyBase {
  @SpeakeasyMetadata()
  connectionEvents?: Record<string, any>;

  @SpeakeasyMetadata()
  connectionNotificationArn?: Record<string, any>;

  @SpeakeasyMetadata()
  connectionNotificationId?: Record<string, any>;

  @SpeakeasyMetadata()
  connectionNotificationState?: Record<string, any>;

  @SpeakeasyMetadata()
  connectionNotificationType?: Record<string, any>;

  @SpeakeasyMetadata()
  serviceId?: Record<string, any>;

  @SpeakeasyMetadata()
  vpcEndpointId?: Record<string, any>;
}


export class CreateVpcEndpointConnectionNotificationResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientToken?: Record<string, any>;

  @SpeakeasyMetadata()
  connectionNotification?: CreateVpcEndpointConnectionNotificationResultConnectionNotification;
}
