package openapisdk.models.shared;



/**
 * CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo
 * Information about the requester transit gateway.
**/
public class CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo {
    public java.util.Map<String, Object> ownerId;
    public CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo withOwnerId(java.util.Map<String, Object> ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    public java.util.Map<String, Object> region;
    public CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo withRegion(java.util.Map<String, Object> region) {
        this.region = region;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayId;
    public CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo withTransitGatewayId(java.util.Map<String, Object> transitGatewayId) {
        this.transitGatewayId = transitGatewayId;
        return this;
    }
}