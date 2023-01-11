import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeVpcEndpointConnectionNotificationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  connectionNotificationSet?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}
