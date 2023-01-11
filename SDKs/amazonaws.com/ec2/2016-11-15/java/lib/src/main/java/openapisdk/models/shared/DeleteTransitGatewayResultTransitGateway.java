package openapisdk.models.shared;



/**
 * DeleteTransitGatewayResultTransitGateway
 * Information about the deleted transit gateway.
**/
public class DeleteTransitGatewayResultTransitGateway {
    public java.util.Map<String, Object> creationTime;
    public DeleteTransitGatewayResultTransitGateway withCreationTime(java.util.Map<String, Object> creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    public java.util.Map<String, Object> description;
    public DeleteTransitGatewayResultTransitGateway withDescription(java.util.Map<String, Object> description) {
        this.description = description;
        return this;
    }
    public DeleteTransitGatewayResultTransitGatewayOptions options;
    public DeleteTransitGatewayResultTransitGateway withOptions(DeleteTransitGatewayResultTransitGatewayOptions options) {
        this.options = options;
        return this;
    }
    public java.util.Map<String, Object> ownerId;
    public DeleteTransitGatewayResultTransitGateway withOwnerId(java.util.Map<String, Object> ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    public java.util.Map<String, Object> state;
    public DeleteTransitGatewayResultTransitGateway withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public DeleteTransitGatewayResultTransitGateway withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayArn;
    public DeleteTransitGatewayResultTransitGateway withTransitGatewayArn(java.util.Map<String, Object> transitGatewayArn) {
        this.transitGatewayArn = transitGatewayArn;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayId;
    public DeleteTransitGatewayResultTransitGateway withTransitGatewayId(java.util.Map<String, Object> transitGatewayId) {
        this.transitGatewayId = transitGatewayId;
        return this;
    }
}