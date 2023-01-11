package openapisdk.models.shared;



/**
 * CreateTransitGatewayResultTransitGatewayOptions
 * The transit gateway options.
**/
public class CreateTransitGatewayResultTransitGatewayOptions {
    public java.util.Map<String, Object> amazonSideAsn;
    public CreateTransitGatewayResultTransitGatewayOptions withAmazonSideAsn(java.util.Map<String, Object> amazonSideAsn) {
        this.amazonSideAsn = amazonSideAsn;
        return this;
    }
    public java.util.Map<String, Object> associationDefaultRouteTableId;
    public CreateTransitGatewayResultTransitGatewayOptions withAssociationDefaultRouteTableId(java.util.Map<String, Object> associationDefaultRouteTableId) {
        this.associationDefaultRouteTableId = associationDefaultRouteTableId;
        return this;
    }
    public java.util.Map<String, Object> autoAcceptSharedAttachments;
    public CreateTransitGatewayResultTransitGatewayOptions withAutoAcceptSharedAttachments(java.util.Map<String, Object> autoAcceptSharedAttachments) {
        this.autoAcceptSharedAttachments = autoAcceptSharedAttachments;
        return this;
    }
    public java.util.Map<String, Object> defaultRouteTableAssociation;
    public CreateTransitGatewayResultTransitGatewayOptions withDefaultRouteTableAssociation(java.util.Map<String, Object> defaultRouteTableAssociation) {
        this.defaultRouteTableAssociation = defaultRouteTableAssociation;
        return this;
    }
    public java.util.Map<String, Object> defaultRouteTablePropagation;
    public CreateTransitGatewayResultTransitGatewayOptions withDefaultRouteTablePropagation(java.util.Map<String, Object> defaultRouteTablePropagation) {
        this.defaultRouteTablePropagation = defaultRouteTablePropagation;
        return this;
    }
    public java.util.Map<String, Object> dnsSupport;
    public CreateTransitGatewayResultTransitGatewayOptions withDnsSupport(java.util.Map<String, Object> dnsSupport) {
        this.dnsSupport = dnsSupport;
        return this;
    }
    public java.util.Map<String, Object> multicastSupport;
    public CreateTransitGatewayResultTransitGatewayOptions withMulticastSupport(java.util.Map<String, Object> multicastSupport) {
        this.multicastSupport = multicastSupport;
        return this;
    }
    public java.util.Map<String, Object> propagationDefaultRouteTableId;
    public CreateTransitGatewayResultTransitGatewayOptions withPropagationDefaultRouteTableId(java.util.Map<String, Object> propagationDefaultRouteTableId) {
        this.propagationDefaultRouteTableId = propagationDefaultRouteTableId;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayCidrBlocks;
    public CreateTransitGatewayResultTransitGatewayOptions withTransitGatewayCidrBlocks(java.util.Map<String, Object> transitGatewayCidrBlocks) {
        this.transitGatewayCidrBlocks = transitGatewayCidrBlocks;
        return this;
    }
    public java.util.Map<String, Object> vpnEcmpSupport;
    public CreateTransitGatewayResultTransitGatewayOptions withVpnEcmpSupport(java.util.Map<String, Object> vpnEcmpSupport) {
        this.vpnEcmpSupport = vpnEcmpSupport;
        return this;
    }
}