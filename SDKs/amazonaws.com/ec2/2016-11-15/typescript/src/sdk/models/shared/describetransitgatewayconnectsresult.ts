import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeTransitGatewayConnectsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;

  @SpeakeasyMetadata()
  transitGatewayConnects?: Record<string, any>;
}
