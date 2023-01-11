package openapisdk.models.shared;



/**
 * RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment
 * The transit gateway peering attachment.
**/
public class RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment {
    public RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo accepterTgwInfo;
    public RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment withAccepterTgwInfo(RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo accepterTgwInfo) {
        this.accepterTgwInfo = accepterTgwInfo;
        return this;
    }
    public java.util.Map<String, Object> creationTime;
    public RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment withCreationTime(java.util.Map<String, Object> creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    public RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo requesterTgwInfo;
    public RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment withRequesterTgwInfo(RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo requesterTgwInfo) {
        this.requesterTgwInfo = requesterTgwInfo;
        return this;
    }
    public java.util.Map<String, Object> state;
    public RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus status;
    public RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment withStatus(RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus status) {
        this.status = status;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayAttachmentId;
    public RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment withTransitGatewayAttachmentId(java.util.Map<String, Object> transitGatewayAttachmentId) {
        this.transitGatewayAttachmentId = transitGatewayAttachmentId;
        return this;
    }
}