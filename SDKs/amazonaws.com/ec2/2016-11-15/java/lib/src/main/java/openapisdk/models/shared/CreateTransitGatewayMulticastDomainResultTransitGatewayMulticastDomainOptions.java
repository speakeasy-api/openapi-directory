package openapisdk.models.shared;



/**
 * CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions
 * The options for the transit gateway multicast domain.
**/
public class CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions {
    public java.util.Map<String, Object> autoAcceptSharedAssociations;
    public CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions withAutoAcceptSharedAssociations(java.util.Map<String, Object> autoAcceptSharedAssociations) {
        this.autoAcceptSharedAssociations = autoAcceptSharedAssociations;
        return this;
    }
    public java.util.Map<String, Object> igmpv2Support;
    public CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions withIgmpv2Support(java.util.Map<String, Object> igmpv2Support) {
        this.igmpv2Support = igmpv2Support;
        return this;
    }
    public java.util.Map<String, Object> staticSourcesSupport;
    public CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions withStaticSourcesSupport(java.util.Map<String, Object> staticSourcesSupport) {
        this.staticSourcesSupport = staticSourcesSupport;
        return this;
    }
}