import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DisassociateTransitGatewayMulticastDomainResultAssociations
/** 
 * Information about the association.
**/
export class DisassociateTransitGatewayMulticastDomainResultAssociations extends SpeakeasyBase {
  @SpeakeasyMetadata()
  resourceId?: Record<string, any>;

  @SpeakeasyMetadata()
  resourceOwnerId?: Record<string, any>;

  @SpeakeasyMetadata()
  resourceType?: Record<string, any>;

  @SpeakeasyMetadata()
  subnets?: Record<string, any>;

  @SpeakeasyMetadata()
  transitGatewayAttachmentId?: Record<string, any>;

  @SpeakeasyMetadata()
  transitGatewayMulticastDomainId?: Record<string, any>;
}


export class DisassociateTransitGatewayMulticastDomainResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associations?: DisassociateTransitGatewayMulticastDomainResultAssociations;
}
