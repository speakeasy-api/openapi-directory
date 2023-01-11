import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTransitGatewayMulticastDomainAssociationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  multicastDomainAssociations?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}
