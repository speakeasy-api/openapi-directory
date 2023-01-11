package openapisdk.models.shared;



/**
 * RegisterTransitGatewayMulticastGroupSourcesResultRegisteredMulticastGroupSources
 * Information about the transit gateway multicast group sources.
**/
public class RegisterTransitGatewayMulticastGroupSourcesResultRegisteredMulticastGroupSources {
    public java.util.Map<String, Object> groupIpAddress;
    public RegisterTransitGatewayMulticastGroupSourcesResultRegisteredMulticastGroupSources withGroupIpAddress(java.util.Map<String, Object> groupIpAddress) {
        this.groupIpAddress = groupIpAddress;
        return this;
    }
    public java.util.Map<String, Object> registeredNetworkInterfaceIds;
    public RegisterTransitGatewayMulticastGroupSourcesResultRegisteredMulticastGroupSources withRegisteredNetworkInterfaceIds(java.util.Map<String, Object> registeredNetworkInterfaceIds) {
        this.registeredNetworkInterfaceIds = registeredNetworkInterfaceIds;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayMulticastDomainId;
    public RegisterTransitGatewayMulticastGroupSourcesResultRegisteredMulticastGroupSources withTransitGatewayMulticastDomainId(java.util.Map<String, Object> transitGatewayMulticastDomainId) {
        this.transitGatewayMulticastDomainId = transitGatewayMulticastDomainId;
        return this;
    }
}