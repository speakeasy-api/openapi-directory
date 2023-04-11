import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the registered transit gateway multicast group members.
 */
export declare class RegisterTransitGatewayMulticastGroupMembersResultRegisteredMulticastGroupMembers extends SpeakeasyBase {
    groupIpAddress?: string;
    registeredNetworkInterfaceIds?: string[];
    transitGatewayMulticastDomainId?: string;
}
/**
 * Success
 */
export declare class RegisterTransitGatewayMulticastGroupMembersResult extends SpeakeasyBase {
    registeredMulticastGroupMembers?: RegisterTransitGatewayMulticastGroupMembersResultRegisteredMulticastGroupMembers;
}
