import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the deregistered members.
**/
export declare class DeregisterTransitGatewayMulticastGroupMembersResultDeregisteredMulticastGroupMembers extends SpeakeasyBase {
    deregisteredNetworkInterfaceIds?: Record<string, any>;
    groupIpAddress?: Record<string, any>;
    transitGatewayMulticastDomainId?: Record<string, any>;
}
export declare class DeregisterTransitGatewayMulticastGroupMembersResult extends SpeakeasyBase {
    deregisteredMulticastGroupMembers?: DeregisterTransitGatewayMulticastGroupMembersResultDeregisteredMulticastGroupMembers;
}
