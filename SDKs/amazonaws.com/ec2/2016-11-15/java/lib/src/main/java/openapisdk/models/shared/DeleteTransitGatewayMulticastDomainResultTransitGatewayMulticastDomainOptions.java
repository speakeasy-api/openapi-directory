package openapisdk.models.shared;



/**
 * DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions
 * The options for the transit gateway multicast domain.
**/
public class DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions {
    public java.util.Map<String, Object> autoAcceptSharedAssociations;
    public DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions withAutoAcceptSharedAssociations(java.util.Map<String, Object> autoAcceptSharedAssociations) {
        this.autoAcceptSharedAssociations = autoAcceptSharedAssociations;
        return this;
    }
    public java.util.Map<String, Object> igmpv2Support;
    public DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions withIgmpv2Support(java.util.Map<String, Object> igmpv2Support) {
        this.igmpv2Support = igmpv2Support;
        return this;
    }
    public java.util.Map<String, Object> staticSourcesSupport;
    public DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions withStaticSourcesSupport(java.util.Map<String, Object> staticSourcesSupport) {
        this.staticSourcesSupport = staticSourcesSupport;
        return this;
    }
}