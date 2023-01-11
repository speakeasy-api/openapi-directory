package openapisdk.models.shared;



/**
 * CreateTransitGatewayResultTransitGateway
 * Information about the transit gateway.
**/
public class CreateTransitGatewayResultTransitGateway {
    public java.util.Map<String, Object> creationTime;
    public CreateTransitGatewayResultTransitGateway withCreationTime(java.util.Map<String, Object> creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    public java.util.Map<String, Object> description;
    public CreateTransitGatewayResultTransitGateway withDescription(java.util.Map<String, Object> description) {
        this.description = description;
        return this;
    }
    public CreateTransitGatewayResultTransitGatewayOptions options;
    public CreateTransitGatewayResultTransitGateway withOptions(CreateTransitGatewayResultTransitGatewayOptions options) {
        this.options = options;
        return this;
    }
    public java.util.Map<String, Object> ownerId;
    public CreateTransitGatewayResultTransitGateway withOwnerId(java.util.Map<String, Object> ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    public java.util.Map<String, Object> state;
    public CreateTransitGatewayResultTransitGateway withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public CreateTransitGatewayResultTransitGateway withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayArn;
    public CreateTransitGatewayResultTransitGateway withTransitGatewayArn(java.util.Map<String, Object> transitGatewayArn) {
        this.transitGatewayArn = transitGatewayArn;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayId;
    public CreateTransitGatewayResultTransitGateway withTransitGatewayId(java.util.Map<String, Object> transitGatewayId) {
        this.transitGatewayId = transitGatewayId;
        return this;
    }
}