package openapisdk.models.shared;



/**
 * DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo
 * Information about the requester transit gateway.
**/
public class DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo {
    public java.util.Map<String, Object> ownerId;
    public DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo withOwnerId(java.util.Map<String, Object> ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    public java.util.Map<String, Object> region;
    public DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo withRegion(java.util.Map<String, Object> region) {
        this.region = region;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayId;
    public DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo withTransitGatewayId(java.util.Map<String, Object> transitGatewayId) {
        this.transitGatewayId = transitGatewayId;
        return this;
    }
}