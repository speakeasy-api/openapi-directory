package openapisdk.models.shared;



/**
 * AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo
 * Information about the requester transit gateway.
**/
public class AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo {
    public java.util.Map<String, Object> ownerId;
    public AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo withOwnerId(java.util.Map<String, Object> ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    public java.util.Map<String, Object> region;
    public AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo withRegion(java.util.Map<String, Object> region) {
        this.region = region;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayId;
    public AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo withTransitGatewayId(java.util.Map<String, Object> transitGatewayId) {
        this.transitGatewayId = transitGatewayId;
        return this;
    }
}