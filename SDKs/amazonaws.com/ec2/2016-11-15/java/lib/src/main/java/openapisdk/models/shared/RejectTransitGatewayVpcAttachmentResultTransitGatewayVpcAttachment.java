package openapisdk.models.shared;



/**
 * RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment
 * Information about the attachment.
**/
public class RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment {
    public java.util.Map<String, Object> creationTime;
    public RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment withCreationTime(java.util.Map<String, Object> creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    public RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions options;
    public RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment withOptions(RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions options) {
        this.options = options;
        return this;
    }
    public java.util.Map<String, Object> state;
    public RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> subnetIds;
    public RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment withSubnetIds(java.util.Map<String, Object> subnetIds) {
        this.subnetIds = subnetIds;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayAttachmentId;
    public RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment withTransitGatewayAttachmentId(java.util.Map<String, Object> transitGatewayAttachmentId) {
        this.transitGatewayAttachmentId = transitGatewayAttachmentId;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayId;
    public RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment withTransitGatewayId(java.util.Map<String, Object> transitGatewayId) {
        this.transitGatewayId = transitGatewayId;
        return this;
    }
    public java.util.Map<String, Object> vpcId;
    public RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment withVpcId(java.util.Map<String, Object> vpcId) {
        this.vpcId = vpcId;
        return this;
    }
    public java.util.Map<String, Object> vpcOwnerId;
    public RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment withVpcOwnerId(java.util.Map<String, Object> vpcOwnerId) {
        this.vpcOwnerId = vpcOwnerId;
        return this;
    }
}