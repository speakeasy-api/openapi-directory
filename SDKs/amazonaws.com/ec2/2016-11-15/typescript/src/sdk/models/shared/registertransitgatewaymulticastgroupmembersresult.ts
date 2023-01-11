import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RegisterTransitGatewayMulticastGroupMembersResultRegisteredMulticastGroupMembers
/** 
 * Information about the registered transit gateway multicast group members.
**/
export class RegisterTransitGatewayMulticastGroupMembersResultRegisteredMulticastGroupMembers extends SpeakeasyBase {
  @SpeakeasyMetadata()
  groupIpAddress?: Record<string, any>;

  @SpeakeasyMetadata()
  registeredNetworkInterfaceIds?: Record<string, any>;

  @SpeakeasyMetadata()
  transitGatewayMulticastDomainId?: Record<string, any>;
}


export class RegisterTransitGatewayMulticastGroupMembersResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  registeredMulticastGroupMembers?: RegisterTransitGatewayMulticastGroupMembersResultRegisteredMulticastGroupMembers;
}
