import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeregisterTransitGatewayMulticastGroupMembersResultDeregisteredMulticastGroupMembers
/** 
 * Information about the deregistered members.
**/
export class DeregisterTransitGatewayMulticastGroupMembersResultDeregisteredMulticastGroupMembers extends SpeakeasyBase {
  @SpeakeasyMetadata()
  deregisteredNetworkInterfaceIds?: Record<string, any>;

  @SpeakeasyMetadata()
  groupIpAddress?: Record<string, any>;

  @SpeakeasyMetadata()
  transitGatewayMulticastDomainId?: Record<string, any>;
}


export class DeregisterTransitGatewayMulticastGroupMembersResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  deregisteredMulticastGroupMembers?: DeregisterTransitGatewayMulticastGroupMembersResultDeregisteredMulticastGroupMembers;
}
