import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeVpcPeeringConnectionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;

  @SpeakeasyMetadata()
  vpcPeeringConnections?: Record<string, any>;
}
