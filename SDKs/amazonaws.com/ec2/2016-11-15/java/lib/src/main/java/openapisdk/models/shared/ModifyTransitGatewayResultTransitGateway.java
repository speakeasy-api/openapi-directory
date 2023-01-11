package openapisdk.models.shared;



/**
 * ModifyTransitGatewayResultTransitGateway
 * Describes a transit gateway.
**/
public class ModifyTransitGatewayResultTransitGateway {
    public java.util.Map<String, Object> creationTime;
    public ModifyTransitGatewayResultTransitGateway withCreationTime(java.util.Map<String, Object> creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    public java.util.Map<String, Object> description;
    public ModifyTransitGatewayResultTransitGateway withDescription(java.util.Map<String, Object> description) {
        this.description = description;
        return this;
    }
    public ModifyTransitGatewayResultTransitGatewayOptions options;
    public ModifyTransitGatewayResultTransitGateway withOptions(ModifyTransitGatewayResultTransitGatewayOptions options) {
        this.options = options;
        return this;
    }
    public java.util.Map<String, Object> ownerId;
    public ModifyTransitGatewayResultTransitGateway withOwnerId(java.util.Map<String, Object> ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    public java.util.Map<String, Object> state;
    public ModifyTransitGatewayResultTransitGateway withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public ModifyTransitGatewayResultTransitGateway withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayArn;
    public ModifyTransitGatewayResultTransitGateway withTransitGatewayArn(java.util.Map<String, Object> transitGatewayArn) {
        this.transitGatewayArn = transitGatewayArn;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayId;
    public ModifyTransitGatewayResultTransitGateway withTransitGatewayId(java.util.Map<String, Object> transitGatewayId) {
        this.transitGatewayId = transitGatewayId;
        return this;
    }
}