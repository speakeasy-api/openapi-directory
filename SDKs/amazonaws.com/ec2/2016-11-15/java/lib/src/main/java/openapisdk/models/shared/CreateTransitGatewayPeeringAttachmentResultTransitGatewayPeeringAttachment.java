package openapisdk.models.shared;



/**
 * CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment
 * The transit gateway peering attachment.
**/
public class CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment {
    public CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo accepterTgwInfo;
    public CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment withAccepterTgwInfo(CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo accepterTgwInfo) {
        this.accepterTgwInfo = accepterTgwInfo;
        return this;
    }
    public java.util.Map<String, Object> creationTime;
    public CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment withCreationTime(java.util.Map<String, Object> creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    public CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo requesterTgwInfo;
    public CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment withRequesterTgwInfo(CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo requesterTgwInfo) {
        this.requesterTgwInfo = requesterTgwInfo;
        return this;
    }
    public java.util.Map<String, Object> state;
    public CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus status;
    public CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment withStatus(CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus status) {
        this.status = status;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayAttachmentId;
    public CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment withTransitGatewayAttachmentId(java.util.Map<String, Object> transitGatewayAttachmentId) {
        this.transitGatewayAttachmentId = transitGatewayAttachmentId;
        return this;
    }
}