import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeLocalGatewayRouteTablesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  localGatewayRouteTables?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}
