import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AcceptTransitGatewayMulticastDomainAssociationsResultAssociations
/** 
 * Describes the multicast domain associations.
**/
export class AcceptTransitGatewayMulticastDomainAssociationsResultAssociations extends SpeakeasyBase {
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


export class AcceptTransitGatewayMulticastDomainAssociationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associations?: AcceptTransitGatewayMulticastDomainAssociationsResultAssociations;
}
