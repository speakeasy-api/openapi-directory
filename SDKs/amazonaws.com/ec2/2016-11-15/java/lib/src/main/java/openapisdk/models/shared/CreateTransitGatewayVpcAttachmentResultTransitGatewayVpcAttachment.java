package openapisdk.models.shared;



/**
 * CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment
 * Information about the VPC attachment.
**/
public class CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment {
    public java.util.Map<String, Object> creationTime;
    public CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment withCreationTime(java.util.Map<String, Object> creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    public CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions options;
    public CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment withOptions(CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions options) {
        this.options = options;
        return this;
    }
    public java.util.Map<String, Object> state;
    public CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> subnetIds;
    public CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment withSubnetIds(java.util.Map<String, Object> subnetIds) {
        this.subnetIds = subnetIds;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayAttachmentId;
    public CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment withTransitGatewayAttachmentId(java.util.Map<String, Object> transitGatewayAttachmentId) {
        this.transitGatewayAttachmentId = transitGatewayAttachmentId;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayId;
    public CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment withTransitGatewayId(java.util.Map<String, Object> transitGatewayId) {
        this.transitGatewayId = transitGatewayId;
        return this;
    }
    public java.util.Map<String, Object> vpcId;
    public CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment withVpcId(java.util.Map<String, Object> vpcId) {
        this.vpcId = vpcId;
        return this;
    }
    public java.util.Map<String, Object> vpcOwnerId;
    public CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment withVpcOwnerId(java.util.Map<String, Object> vpcOwnerId) {
        this.vpcOwnerId = vpcOwnerId;
        return this;
    }
}