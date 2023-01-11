package openapisdk.models.shared;



/**
 * AssociateTransitGatewayMulticastDomainResultAssociations
 * Information about the transit gateway multicast domain associations.
**/
public class AssociateTransitGatewayMulticastDomainResultAssociations {
    public java.util.Map<String, Object> resourceId;
    public AssociateTransitGatewayMulticastDomainResultAssociations withResourceId(java.util.Map<String, Object> resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    public java.util.Map<String, Object> resourceOwnerId;
    public AssociateTransitGatewayMulticastDomainResultAssociations withResourceOwnerId(java.util.Map<String, Object> resourceOwnerId) {
        this.resourceOwnerId = resourceOwnerId;
        return this;
    }
    public java.util.Map<String, Object> resourceType;
    public AssociateTransitGatewayMulticastDomainResultAssociations withResourceType(java.util.Map<String, Object> resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    public java.util.Map<String, Object> subnets;
    public AssociateTransitGatewayMulticastDomainResultAssociations withSubnets(java.util.Map<String, Object> subnets) {
        this.subnets = subnets;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayAttachmentId;
    public AssociateTransitGatewayMulticastDomainResultAssociations withTransitGatewayAttachmentId(java.util.Map<String, Object> transitGatewayAttachmentId) {
        this.transitGatewayAttachmentId = transitGatewayAttachmentId;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayMulticastDomainId;
    public AssociateTransitGatewayMulticastDomainResultAssociations withTransitGatewayMulticastDomainId(java.util.Map<String, Object> transitGatewayMulticastDomainId) {
        this.transitGatewayMulticastDomainId = transitGatewayMulticastDomainId;
        return this;
    }
}