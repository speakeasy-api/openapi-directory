import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions
/** 
 * The options for the transit gateway multicast domain.
**/
export class CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  autoAcceptSharedAssociations?: Record<string, any>;

  @SpeakeasyMetadata()
  igmpv2Support?: Record<string, any>;

  @SpeakeasyMetadata()
  staticSourcesSupport?: Record<string, any>;
}


// CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain
/** 
 * Information about the transit gateway multicast domain.
**/
export class CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain extends SpeakeasyBase {
  @SpeakeasyMetadata()
  creationTime?: Record<string, any>;

  @SpeakeasyMetadata()
  options?: CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions;

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


export class CreateTransitGatewayMulticastDomainResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  transitGatewayMulticastDomain?: CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain;
}
