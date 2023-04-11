import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the deregistered members.
 */
export declare class DeregisterTransitGatewayMulticastGroupMembersResultDeregisteredMulticastGroupMembers extends SpeakeasyBase {
    deregisteredNetworkInterfaceIds?: string[];
    groupIpAddress?: string;
    transitGatewayMulticastDomainId?: string;
}
/**
 * Success
 */
export declare class DeregisterTransitGatewayMulticastGroupMembersResult extends SpeakeasyBase {
    deregisteredMulticastGroupMembers?: DeregisterTransitGatewayMulticastGroupMembersResultDeregisteredMulticastGroupMembers;
}
