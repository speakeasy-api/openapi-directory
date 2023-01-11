package openapisdk.models.shared;



/**
 * RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo
 * Information about the requester transit gateway.
**/
public class RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo {
    public java.util.Map<String, Object> ownerId;
    public RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo withOwnerId(java.util.Map<String, Object> ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    public java.util.Map<String, Object> region;
    public RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo withRegion(java.util.Map<String, Object> region) {
        this.region = region;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayId;
    public RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo withTransitGatewayId(java.util.Map<String, Object> transitGatewayId) {
        this.transitGatewayId = transitGatewayId;
        return this;
    }
}