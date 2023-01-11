import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTransitGatewayRouteTableAssociationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associations?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}
