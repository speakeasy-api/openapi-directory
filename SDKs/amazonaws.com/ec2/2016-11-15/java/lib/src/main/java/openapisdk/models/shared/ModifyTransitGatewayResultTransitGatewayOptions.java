package openapisdk.models.shared;



/**
 * ModifyTransitGatewayResultTransitGatewayOptions
 * The transit gateway options.
**/
public class ModifyTransitGatewayResultTransitGatewayOptions {
    public java.util.Map<String, Object> amazonSideAsn;
    public ModifyTransitGatewayResultTransitGatewayOptions withAmazonSideAsn(java.util.Map<String, Object> amazonSideAsn) {
        this.amazonSideAsn = amazonSideAsn;
        return this;
    }
    public java.util.Map<String, Object> associationDefaultRouteTableId;
    public ModifyTransitGatewayResultTransitGatewayOptions withAssociationDefaultRouteTableId(java.util.Map<String, Object> associationDefaultRouteTableId) {
        this.associationDefaultRouteTableId = associationDefaultRouteTableId;
        return this;
    }
    public java.util.Map<String, Object> autoAcceptSharedAttachments;
    public ModifyTransitGatewayResultTransitGatewayOptions withAutoAcceptSharedAttachments(java.util.Map<String, Object> autoAcceptSharedAttachments) {
        this.autoAcceptSharedAttachments = autoAcceptSharedAttachments;
        return this;
    }
    public java.util.Map<String, Object> defaultRouteTableAssociation;
    public ModifyTransitGatewayResultTransitGatewayOptions withDefaultRouteTableAssociation(java.util.Map<String, Object> defaultRouteTableAssociation) {
        this.defaultRouteTableAssociation = defaultRouteTableAssociation;
        return this;
    }
    public java.util.Map<String, Object> defaultRouteTablePropagation;
    public ModifyTransitGatewayResultTransitGatewayOptions withDefaultRouteTablePropagation(java.util.Map<String, Object> defaultRouteTablePropagation) {
        this.defaultRouteTablePropagation = defaultRouteTablePropagation;
        return this;
    }
    public java.util.Map<String, Object> dnsSupport;
    public ModifyTransitGatewayResultTransitGatewayOptions withDnsSupport(java.util.Map<String, Object> dnsSupport) {
        this.dnsSupport = dnsSupport;
        return this;
    }
    public java.util.Map<String, Object> multicastSupport;
    public ModifyTransitGatewayResultTransitGatewayOptions withMulticastSupport(java.util.Map<String, Object> multicastSupport) {
        this.multicastSupport = multicastSupport;
        return this;
    }
    public java.util.Map<String, Object> propagationDefaultRouteTableId;
    public ModifyTransitGatewayResultTransitGatewayOptions withPropagationDefaultRouteTableId(java.util.Map<String, Object> propagationDefaultRouteTableId) {
        this.propagationDefaultRouteTableId = propagationDefaultRouteTableId;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayCidrBlocks;
    public ModifyTransitGatewayResultTransitGatewayOptions withTransitGatewayCidrBlocks(java.util.Map<String, Object> transitGatewayCidrBlocks) {
        this.transitGatewayCidrBlocks = transitGatewayCidrBlocks;
        return this;
    }
    public java.util.Map<String, Object> vpnEcmpSupport;
    public ModifyTransitGatewayResultTransitGatewayOptions withVpnEcmpSupport(java.util.Map<String, Object> vpnEcmpSupport) {
        this.vpnEcmpSupport = vpnEcmpSupport;
        return this;
    }
}