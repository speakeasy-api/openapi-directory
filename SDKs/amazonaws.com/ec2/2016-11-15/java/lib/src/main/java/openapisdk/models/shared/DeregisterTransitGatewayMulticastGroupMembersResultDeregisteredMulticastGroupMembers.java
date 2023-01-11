package openapisdk.models.shared;



/**
 * DeregisterTransitGatewayMulticastGroupMembersResultDeregisteredMulticastGroupMembers
 * Information about the deregistered members.
**/
public class DeregisterTransitGatewayMulticastGroupMembersResultDeregisteredMulticastGroupMembers {
    public java.util.Map<String, Object> deregisteredNetworkInterfaceIds;
    public DeregisterTransitGatewayMulticastGroupMembersResultDeregisteredMulticastGroupMembers withDeregisteredNetworkInterfaceIds(java.util.Map<String, Object> deregisteredNetworkInterfaceIds) {
        this.deregisteredNetworkInterfaceIds = deregisteredNetworkInterfaceIds;
        return this;
    }
    public java.util.Map<String, Object> groupIpAddress;
    public DeregisterTransitGatewayMulticastGroupMembersResultDeregisteredMulticastGroupMembers withGroupIpAddress(java.util.Map<String, Object> groupIpAddress) {
        this.groupIpAddress = groupIpAddress;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayMulticastDomainId;
    public DeregisterTransitGatewayMulticastGroupMembersResultDeregisteredMulticastGroupMembers withTransitGatewayMulticastDomainId(java.util.Map<String, Object> transitGatewayMulticastDomainId) {
        this.transitGatewayMulticastDomainId = transitGatewayMulticastDomainId;
        return this;
    }
}