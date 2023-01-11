package openapisdk.models.shared;



/**
 * DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment
 * The transit gateway peering attachment.
**/
public class DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment {
    public DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo accepterTgwInfo;
    public DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment withAccepterTgwInfo(DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo accepterTgwInfo) {
        this.accepterTgwInfo = accepterTgwInfo;
        return this;
    }
    public java.util.Map<String, Object> creationTime;
    public DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment withCreationTime(java.util.Map<String, Object> creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    public DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo requesterTgwInfo;
    public DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment withRequesterTgwInfo(DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo requesterTgwInfo) {
        this.requesterTgwInfo = requesterTgwInfo;
        return this;
    }
    public java.util.Map<String, Object> state;
    public DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus status;
    public DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment withStatus(DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus status) {
        this.status = status;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayAttachmentId;
    public DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment withTransitGatewayAttachmentId(java.util.Map<String, Object> transitGatewayAttachmentId) {
        this.transitGatewayAttachmentId = transitGatewayAttachmentId;
        return this;
    }
}