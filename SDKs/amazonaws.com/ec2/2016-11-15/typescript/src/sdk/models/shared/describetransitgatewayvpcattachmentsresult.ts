import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeTransitGatewayVpcAttachmentsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;

  @SpeakeasyMetadata()
  transitGatewayVpcAttachments?: Record<string, any>;
}
