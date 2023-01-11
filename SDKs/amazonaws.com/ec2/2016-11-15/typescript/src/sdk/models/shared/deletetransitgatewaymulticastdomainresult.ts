import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions
/** 
 * The options for the transit gateway multicast domain.
**/
export class DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  autoAcceptSharedAssociations?: Record<string, any>;

  @SpeakeasyMetadata()
  igmpv2Support?: Record<string, any>;

  @SpeakeasyMetadata()
  staticSourcesSupport?: Record<string, any>;
}


// DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain
/** 
 * Information about the deleted transit gateway multicast domain.
**/
export class DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain extends SpeakeasyBase {
  @SpeakeasyMetadata()
  creationTime?: Record<string, any>;

  @SpeakeasyMetadata()
  options?: DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions;

  @SpeakeasyMetadata()
  ownerId?: Record<string, any>;

  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;

  @SpeakeasyMetadata()
  transitGatewayId?: Record<string, any>;

  @SpeakeasyMetadata()
  transitGatewayMulticastDomainArn?: Record<string, any>;

  @SpeakeasyMetadata()
  transitGatewayMulticastDomainId?: Record<string, any>;
}


export class DeleteTransitGatewayMulticastDomainResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  transitGatewayMulticastDomain?: DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain;
}
