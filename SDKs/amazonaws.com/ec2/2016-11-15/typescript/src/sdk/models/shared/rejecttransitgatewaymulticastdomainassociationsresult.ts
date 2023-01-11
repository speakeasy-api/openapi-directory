import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RejectTransitGatewayMulticastDomainAssociationsResultAssociations
/** 
 * Describes the multicast domain associations.
**/
export class RejectTransitGatewayMulticastDomainAssociationsResultAssociations extends SpeakeasyBase {
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


export class RejectTransitGatewayMulticastDomainAssociationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associations?: RejectTransitGatewayMulticastDomainAssociationsResultAssociations;
}
