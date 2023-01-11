package openapisdk.models.shared;



/**
 * CreateInternetGatewayResultInternetGateway
 * Information about the internet gateway.
**/
public class CreateInternetGatewayResultInternetGateway {
    public java.util.Map<String, Object> attachments;
    public CreateInternetGatewayResultInternetGateway withAttachments(java.util.Map<String, Object> attachments) {
        this.attachments = attachments;
        return this;
    }
    public java.util.Map<String, Object> internetGatewayId;
    public CreateInternetGatewayResultInternetGateway withInternetGatewayId(java.util.Map<String, Object> internetGatewayId) {
        this.internetGatewayId = internetGatewayId;
        return this;
    }
    public java.util.Map<String, Object> ownerId;
    public CreateInternetGatewayResultInternetGateway withOwnerId(java.util.Map<String, Object> ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public CreateInternetGatewayResultInternetGateway withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
}