package openapisdk.models.shared;



/**
 * AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment
 * The transit gateway peering attachment.
**/
public class AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment {
    public AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo accepterTgwInfo;
    public AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment withAccepterTgwInfo(AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo accepterTgwInfo) {
        this.accepterTgwInfo = accepterTgwInfo;
        return this;
    }
    public java.util.Map<String, Object> creationTime;
    public AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment withCreationTime(java.util.Map<String, Object> creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    public AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo requesterTgwInfo;
    public AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment withRequesterTgwInfo(AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo requesterTgwInfo) {
        this.requesterTgwInfo = requesterTgwInfo;
        return this;
    }
    public java.util.Map<String, Object> state;
    public AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus status;
    public AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment withStatus(AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus status) {
        this.status = status;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayAttachmentId;
    public AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment withTransitGatewayAttachmentId(java.util.Map<String, Object> transitGatewayAttachmentId) {
        this.transitGatewayAttachmentId = transitGatewayAttachmentId;
        return this;
    }
}