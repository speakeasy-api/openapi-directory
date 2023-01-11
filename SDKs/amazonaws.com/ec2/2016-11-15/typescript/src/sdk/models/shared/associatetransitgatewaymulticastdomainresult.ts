import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssociateTransitGatewayMulticastDomainResultAssociations
/** 
 * Information about the transit gateway multicast domain associations.
**/
export class AssociateTransitGatewayMulticastDomainResultAssociations extends SpeakeasyBase {
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


export class AssociateTransitGatewayMulticastDomainResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associations?: AssociateTransitGatewayMulticastDomainResultAssociations;
}
