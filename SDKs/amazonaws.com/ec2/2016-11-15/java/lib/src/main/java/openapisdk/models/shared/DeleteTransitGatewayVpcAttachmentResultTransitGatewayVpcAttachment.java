package openapisdk.models.shared;



/**
 * DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment
 * Information about the deleted VPC attachment.
**/
public class DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment {
    public java.util.Map<String, Object> creationTime;
    public DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment withCreationTime(java.util.Map<String, Object> creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    public DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions options;
    public DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment withOptions(DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions options) {
        this.options = options;
        return this;
    }
    public java.util.Map<String, Object> state;
    public DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> subnetIds;
    public DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment withSubnetIds(java.util.Map<String, Object> subnetIds) {
        this.subnetIds = subnetIds;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayAttachmentId;
    public DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment withTransitGatewayAttachmentId(java.util.Map<String, Object> transitGatewayAttachmentId) {
        this.transitGatewayAttachmentId = transitGatewayAttachmentId;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayId;
    public DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment withTransitGatewayId(java.util.Map<String, Object> transitGatewayId) {
        this.transitGatewayId = transitGatewayId;
        return this;
    }
    public java.util.Map<String, Object> vpcId;
    public DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment withVpcId(java.util.Map<String, Object> vpcId) {
        this.vpcId = vpcId;
        return this;
    }
    public java.util.Map<String, Object> vpcOwnerId;
    public DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment withVpcOwnerId(java.util.Map<String, Object> vpcOwnerId) {
        this.vpcOwnerId = vpcOwnerId;
        return this;
    }
}