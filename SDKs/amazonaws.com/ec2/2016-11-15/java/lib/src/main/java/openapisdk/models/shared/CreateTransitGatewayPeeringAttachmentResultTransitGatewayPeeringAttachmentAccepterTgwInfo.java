package openapisdk.models.shared;



/**
 * CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo
 * Information about the accepter transit gateway.
**/
public class CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo {
    public java.util.Map<String, Object> ownerId;
    public CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo withOwnerId(java.util.Map<String, Object> ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    public java.util.Map<String, Object> region;
    public CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo withRegion(java.util.Map<String, Object> region) {
        this.region = region;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayId;
    public CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo withTransitGatewayId(java.util.Map<String, Object> transitGatewayId) {
        this.transitGatewayId = transitGatewayId;
        return this;
    }
}