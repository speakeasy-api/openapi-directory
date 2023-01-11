package openapisdk.models.shared;



/**
 * AcceptTransitGatewayMulticastDomainAssociationsResultAssociations
 * Describes the multicast domain associations.
**/
public class AcceptTransitGatewayMulticastDomainAssociationsResultAssociations {
    public java.util.Map<String, Object> resourceId;
    public AcceptTransitGatewayMulticastDomainAssociationsResultAssociations withResourceId(java.util.Map<String, Object> resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    public java.util.Map<String, Object> resourceOwnerId;
    public AcceptTransitGatewayMulticastDomainAssociationsResultAssociations withResourceOwnerId(java.util.Map<String, Object> resourceOwnerId) {
        this.resourceOwnerId = resourceOwnerId;
        return this;
    }
    public java.util.Map<String, Object> resourceType;
    public AcceptTransitGatewayMulticastDomainAssociationsResultAssociations withResourceType(java.util.Map<String, Object> resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    public java.util.Map<String, Object> subnets;
    public AcceptTransitGatewayMulticastDomainAssociationsResultAssociations withSubnets(java.util.Map<String, Object> subnets) {
        this.subnets = subnets;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayAttachmentId;
    public AcceptTransitGatewayMulticastDomainAssociationsResultAssociations withTransitGatewayAttachmentId(java.util.Map<String, Object> transitGatewayAttachmentId) {
        this.transitGatewayAttachmentId = transitGatewayAttachmentId;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayMulticastDomainId;
    public AcceptTransitGatewayMulticastDomainAssociationsResultAssociations withTransitGatewayMulticastDomainId(java.util.Map<String, Object> transitGatewayMulticastDomainId) {
        this.transitGatewayMulticastDomainId = transitGatewayMulticastDomainId;
        return this;
    }
}