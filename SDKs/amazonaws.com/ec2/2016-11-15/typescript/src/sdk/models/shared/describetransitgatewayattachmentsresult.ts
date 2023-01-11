import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeTransitGatewayAttachmentsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;

  @SpeakeasyMetadata()
  transitGatewayAttachments?: Record<string, any>;
}
