package openapisdk.models.shared;



/**
 * RejectTransitGatewayMulticastDomainAssociationsResultAssociations
 * Describes the multicast domain associations.
**/
public class RejectTransitGatewayMulticastDomainAssociationsResultAssociations {
    public java.util.Map<String, Object> resourceId;
    public RejectTransitGatewayMulticastDomainAssociationsResultAssociations withResourceId(java.util.Map<String, Object> resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    public java.util.Map<String, Object> resourceOwnerId;
    public RejectTransitGatewayMulticastDomainAssociationsResultAssociations withResourceOwnerId(java.util.Map<String, Object> resourceOwnerId) {
        this.resourceOwnerId = resourceOwnerId;
        return this;
    }
    public java.util.Map<String, Object> resourceType;
    public RejectTransitGatewayMulticastDomainAssociationsResultAssociations withResourceType(java.util.Map<String, Object> resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    public java.util.Map<String, Object> subnets;
    public RejectTransitGatewayMulticastDomainAssociationsResultAssociations withSubnets(java.util.Map<String, Object> subnets) {
        this.subnets = subnets;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayAttachmentId;
    public RejectTransitGatewayMulticastDomainAssociationsResultAssociations withTransitGatewayAttachmentId(java.util.Map<String, Object> transitGatewayAttachmentId) {
        this.transitGatewayAttachmentId = transitGatewayAttachmentId;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayMulticastDomainId;
    public RejectTransitGatewayMulticastDomainAssociationsResultAssociations withTransitGatewayMulticastDomainId(java.util.Map<String, Object> transitGatewayMulticastDomainId) {
        this.transitGatewayMulticastDomainId = transitGatewayMulticastDomainId;
        return this;
    }
}