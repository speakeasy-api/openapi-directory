package openapisdk.models.shared;



/**
 * RegisterTransitGatewayMulticastGroupMembersResultRegisteredMulticastGroupMembers
 * Information about the registered transit gateway multicast group members.
**/
public class RegisterTransitGatewayMulticastGroupMembersResultRegisteredMulticastGroupMembers {
    public java.util.Map<String, Object> groupIpAddress;
    public RegisterTransitGatewayMulticastGroupMembersResultRegisteredMulticastGroupMembers withGroupIpAddress(java.util.Map<String, Object> groupIpAddress) {
        this.groupIpAddress = groupIpAddress;
        return this;
    }
    public java.util.Map<String, Object> registeredNetworkInterfaceIds;
    public RegisterTransitGatewayMulticastGroupMembersResultRegisteredMulticastGroupMembers withRegisteredNetworkInterfaceIds(java.util.Map<String, Object> registeredNetworkInterfaceIds) {
        this.registeredNetworkInterfaceIds = registeredNetworkInterfaceIds;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayMulticastDomainId;
    public RegisterTransitGatewayMulticastGroupMembersResultRegisteredMulticastGroupMembers withTransitGatewayMulticastDomainId(java.util.Map<String, Object> transitGatewayMulticastDomainId) {
        this.transitGatewayMulticastDomainId = transitGatewayMulticastDomainId;
        return this;
    }
}