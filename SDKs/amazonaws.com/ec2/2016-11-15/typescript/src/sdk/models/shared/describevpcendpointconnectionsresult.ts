import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeVpcEndpointConnectionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;

  @SpeakeasyMetadata()
  vpcEndpointConnections?: Record<string, any>;
}
