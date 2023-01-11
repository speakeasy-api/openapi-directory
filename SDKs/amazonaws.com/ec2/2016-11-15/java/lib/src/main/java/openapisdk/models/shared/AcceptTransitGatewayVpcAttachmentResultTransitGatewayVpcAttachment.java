package openapisdk.models.shared;



/**
 * AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment
 * The VPC attachment.
**/
public class AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment {
    public java.util.Map<String, Object> creationTime;
    public AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment withCreationTime(java.util.Map<String, Object> creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    public AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions options;
    public AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment withOptions(AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions options) {
        this.options = options;
        return this;
    }
    public java.util.Map<String, Object> state;
    public AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> subnetIds;
    public AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment withSubnetIds(java.util.Map<String, Object> subnetIds) {
        this.subnetIds = subnetIds;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayAttachmentId;
    public AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment withTransitGatewayAttachmentId(java.util.Map<String, Object> transitGatewayAttachmentId) {
        this.transitGatewayAttachmentId = transitGatewayAttachmentId;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayId;
    public AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment withTransitGatewayId(java.util.Map<String, Object> transitGatewayId) {
        this.transitGatewayId = transitGatewayId;
        return this;
    }
    public java.util.Map<String, Object> vpcId;
    public AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment withVpcId(java.util.Map<String, Object> vpcId) {
        this.vpcId = vpcId;
        return this;
    }
    public java.util.Map<String, Object> vpcOwnerId;
    public AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment withVpcOwnerId(java.util.Map<String, Object> vpcOwnerId) {
        this.vpcOwnerId = vpcOwnerId;
        return this;
    }
}