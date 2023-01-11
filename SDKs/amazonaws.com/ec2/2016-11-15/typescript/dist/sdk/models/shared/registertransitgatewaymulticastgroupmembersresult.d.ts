import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the registered transit gateway multicast group members.
**/
export declare class RegisterTransitGatewayMulticastGroupMembersResultRegisteredMulticastGroupMembers extends SpeakeasyBase {
    groupIpAddress?: Record<string, any>;
    registeredNetworkInterfaceIds?: Record<string, any>;
    transitGatewayMulticastDomainId?: Record<string, any>;
}
export declare class RegisterTransitGatewayMulticastGroupMembersResult extends SpeakeasyBase {
    registeredMulticastGroupMembers?: RegisterTransitGatewayMulticastGroupMembersResultRegisteredMulticastGroupMembers;
}
