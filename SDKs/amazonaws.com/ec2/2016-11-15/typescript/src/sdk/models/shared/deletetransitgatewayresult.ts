import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteTransitGatewayResultTransitGatewayOptions
/** 
 * The transit gateway options.
**/
export class DeleteTransitGatewayResultTransitGatewayOptions extends SpeakeasyBase {
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


// DeleteTransitGatewayResultTransitGateway
/** 
 * Information about the deleted transit gateway.
**/
export class DeleteTransitGatewayResultTransitGateway extends SpeakeasyBase {
  @SpeakeasyMetadata()
  creationTime?: Record<string, any>;

  @SpeakeasyMetadata()
  description?: Record<string, any>;

  @SpeakeasyMetadata()
  options?: DeleteTransitGatewayResultTransitGatewayOptions;

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


export class DeleteTransitGatewayResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  transitGateway?: DeleteTransitGatewayResultTransitGateway;
}
