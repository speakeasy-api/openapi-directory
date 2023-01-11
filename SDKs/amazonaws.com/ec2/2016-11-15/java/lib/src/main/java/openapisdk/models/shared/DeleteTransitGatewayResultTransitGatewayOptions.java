package openapisdk.models.shared;



/**
 * DeleteTransitGatewayResultTransitGatewayOptions
 * The transit gateway options.
**/
public class DeleteTransitGatewayResultTransitGatewayOptions {
    public java.util.Map<String, Object> amazonSideAsn;
    public DeleteTransitGatewayResultTransitGatewayOptions withAmazonSideAsn(java.util.Map<String, Object> amazonSideAsn) {
        this.amazonSideAsn = amazonSideAsn;
        return this;
    }
    public java.util.Map<String, Object> associationDefaultRouteTableId;
    public DeleteTransitGatewayResultTransitGatewayOptions withAssociationDefaultRouteTableId(java.util.Map<String, Object> associationDefaultRouteTableId) {
        this.associationDefaultRouteTableId = associationDefaultRouteTableId;
        return this;
    }
    public java.util.Map<String, Object> autoAcceptSharedAttachments;
    public DeleteTransitGatewayResultTransitGatewayOptions withAutoAcceptSharedAttachments(java.util.Map<String, Object> autoAcceptSharedAttachments) {
        this.autoAcceptSharedAttachments = autoAcceptSharedAttachments;
        return this;
    }
    public java.util.Map<String, Object> defaultRouteTableAssociation;
    public DeleteTransitGatewayResultTransitGatewayOptions withDefaultRouteTableAssociation(java.util.Map<String, Object> defaultRouteTableAssociation) {
        this.defaultRouteTableAssociation = defaultRouteTableAssociation;
        return this;
    }
    public java.util.Map<String, Object> defaultRouteTablePropagation;
    public DeleteTransitGatewayResultTransitGatewayOptions withDefaultRouteTablePropagation(java.util.Map<String, Object> defaultRouteTablePropagation) {
        this.defaultRouteTablePropagation = defaultRouteTablePropagation;
        return this;
    }
    public java.util.Map<String, Object> dnsSupport;
    public DeleteTransitGatewayResultTransitGatewayOptions withDnsSupport(java.util.Map<String, Object> dnsSupport) {
        this.dnsSupport = dnsSupport;
        return this;
    }
    public java.util.Map<String, Object> multicastSupport;
    public DeleteTransitGatewayResultTransitGatewayOptions withMulticastSupport(java.util.Map<String, Object> multicastSupport) {
        this.multicastSupport = multicastSupport;
        return this;
    }
    public java.util.Map<String, Object> propagationDefaultRouteTableId;
    public DeleteTransitGatewayResultTransitGatewayOptions withPropagationDefaultRouteTableId(java.util.Map<String, Object> propagationDefaultRouteTableId) {
        this.propagationDefaultRouteTableId = propagationDefaultRouteTableId;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayCidrBlocks;
    public DeleteTransitGatewayResultTransitGatewayOptions withTransitGatewayCidrBlocks(java.util.Map<String, Object> transitGatewayCidrBlocks) {
        this.transitGatewayCidrBlocks = transitGatewayCidrBlocks;
        return this;
    }
    public java.util.Map<String, Object> vpnEcmpSupport;
    public DeleteTransitGatewayResultTransitGatewayOptions withVpnEcmpSupport(java.util.Map<String, Object> vpnEcmpSupport) {
        this.vpnEcmpSupport = vpnEcmpSupport;
        return this;
    }
}