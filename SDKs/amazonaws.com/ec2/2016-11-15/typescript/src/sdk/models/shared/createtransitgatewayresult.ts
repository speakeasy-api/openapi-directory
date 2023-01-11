import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateTransitGatewayResultTransitGatewayOptions
/** 
 * The transit gateway options.
**/
export class CreateTransitGatewayResultTransitGatewayOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  amazonSideAsn?: Record<string, any>;

  @SpeakeasyMetadata()
  associationDefaultRouteTableId?: Record<string, any>;

  @SpeakeasyMetadata()
  autoAcceptSharedAttachments?: Record<string, any>;

  @SpeakeasyMetadata()
  defaultRouteTableAssociation?: Record<string, any>;

  @SpeakeasyMetadata()
  defaultRouteTablePropagation?: Record<string, any>;

  @SpeakeasyMetadata()
  dnsSupport?: Record<string, any>;

  @SpeakeasyMetadata()
  multicastSupport?: Record<string, any>;

  @SpeakeasyMetadata()
  propagationDefaultRouteTableId?: Record<string, any>;

  @SpeakeasyMetadata()
  transitGatewayCidrBlocks?: Record<string, any>;

  @SpeakeasyMetadata()
  vpnEcmpSupport?: Record<string, any>;
}


// CreateTransitGatewayResultTransitGateway
/** 
 * Information about the transit gateway.
**/
export class CreateTransitGatewayResultTransitGateway extends SpeakeasyBase {
  @SpeakeasyMetadata()
  creationTime?: Record<string, any>;

  @SpeakeasyMetadata()
  description?: Record<string, any>;

  @SpeakeasyMetadata()
  options?: CreateTransitGatewayResultTransitGatewayOptions;

  @SpeakeasyMetadata()
  ownerId?: Record<string, any>;

  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;

  @SpeakeasyMetadata()
  transitGatewayArn?: Record<string, any>;

  @SpeakeasyMetadata()
  transitGatewayId?: Record<string, any>;
}


export class CreateTransitGatewayResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  transitGateway?: CreateTransitGatewayResultTransitGateway;
}
