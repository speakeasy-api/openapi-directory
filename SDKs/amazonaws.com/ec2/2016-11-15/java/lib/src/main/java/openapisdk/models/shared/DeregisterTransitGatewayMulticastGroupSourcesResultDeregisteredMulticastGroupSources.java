package openapisdk.models.shared;



/**
 * DeregisterTransitGatewayMulticastGroupSourcesResultDeregisteredMulticastGroupSources
 * Information about the deregistered group sources.
**/
public class DeregisterTransitGatewayMulticastGroupSourcesResultDeregisteredMulticastGroupSources {
    public java.util.Map<String, Object> deregisteredNetworkInterfaceIds;
    public DeregisterTransitGatewayMulticastGroupSourcesResultDeregisteredMulticastGroupSources withDeregisteredNetworkInterfaceIds(java.util.Map<String, Object> deregisteredNetworkInterfaceIds) {
        this.deregisteredNetworkInterfaceIds = deregisteredNetworkInterfaceIds;
        return this;
    }
    public java.util.Map<String, Object> groupIpAddress;
    public DeregisterTransitGatewayMulticastGroupSourcesResultDeregisteredMulticastGroupSources withGroupIpAddress(java.util.Map<String, Object> groupIpAddress) {
        this.groupIpAddress = groupIpAddress;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayMulticastDomainId;
    public DeregisterTransitGatewayMulticastGroupSourcesResultDeregisteredMulticastGroupSources withTransitGatewayMulticastDomainId(java.util.Map<String, Object> transitGatewayMulticastDomainId) {
        this.transitGatewayMulticastDomainId = transitGatewayMulticastDomainId;
        return this;
    }
}