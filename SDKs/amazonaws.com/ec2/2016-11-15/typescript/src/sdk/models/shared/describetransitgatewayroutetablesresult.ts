import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeTransitGatewayRouteTablesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;

  @SpeakeasyMetadata()
  transitGatewayRouteTables?: Record<string, any>;
}
