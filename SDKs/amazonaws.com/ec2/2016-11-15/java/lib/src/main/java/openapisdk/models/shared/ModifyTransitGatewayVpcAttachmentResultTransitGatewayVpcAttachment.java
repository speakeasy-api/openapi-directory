package openapisdk.models.shared;



/**
 * ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment
 * Information about the modified attachment.
**/
public class ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment {
    public java.util.Map<String, Object> creationTime;
    public ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment withCreationTime(java.util.Map<String, Object> creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    public ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions options;
    public ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment withOptions(ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions options) {
        this.options = options;
        return this;
    }
    public java.util.Map<String, Object> state;
    public ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> subnetIds;
    public ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment withSubnetIds(java.util.Map<String, Object> subnetIds) {
        this.subnetIds = subnetIds;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayAttachmentId;
    public ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment withTransitGatewayAttachmentId(java.util.Map<String, Object> transitGatewayAttachmentId) {
        this.transitGatewayAttachmentId = transitGatewayAttachmentId;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayId;
    public ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment withTransitGatewayId(java.util.Map<String, Object> transitGatewayId) {
        this.transitGatewayId = transitGatewayId;
        return this;
    }
    public java.util.Map<String, Object> vpcId;
    public ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment withVpcId(java.util.Map<String, Object> vpcId) {
        this.vpcId = vpcId;
        return this;
    }
    public java.util.Map<String, Object> vpcOwnerId;
    public ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment withVpcOwnerId(java.util.Map<String, Object> vpcOwnerId) {
        this.vpcOwnerId = vpcOwnerId;
        return this;
    }
}