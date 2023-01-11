package openapisdk.models.shared;



/**
 * DisassociateTransitGatewayRouteTableResultAssociation
 * Information about the association.
**/
public class DisassociateTransitGatewayRouteTableResultAssociation {
    public java.util.Map<String, Object> resourceId;
    public DisassociateTransitGatewayRouteTableResultAssociation withResourceId(java.util.Map<String, Object> resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    public java.util.Map<String, Object> resourceType;
    public DisassociateTransitGatewayRouteTableResultAssociation withResourceType(java.util.Map<String, Object> resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    public java.util.Map<String, Object> state;
    public DisassociateTransitGatewayRouteTableResultAssociation withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayAttachmentId;
    public DisassociateTransitGatewayRouteTableResultAssociation withTransitGatewayAttachmentId(java.util.Map<String, Object> transitGatewayAttachmentId) {
        this.transitGatewayAttachmentId = transitGatewayAttachmentId;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayRouteTableId;
    public DisassociateTransitGatewayRouteTableResultAssociation withTransitGatewayRouteTableId(java.util.Map<String, Object> transitGatewayRouteTableId) {
        this.transitGatewayRouteTableId = transitGatewayRouteTableId;
        return this;
    }
}