package openapisdk.models.shared;



/**
 * CreateEgressOnlyInternetGatewayResultEgressOnlyInternetGateway
 * Information about the egress-only internet gateway.
**/
public class CreateEgressOnlyInternetGatewayResultEgressOnlyInternetGateway {
    public java.util.Map<String, Object> attachments;
    public CreateEgressOnlyInternetGatewayResultEgressOnlyInternetGateway withAttachments(java.util.Map<String, Object> attachments) {
        this.attachments = attachments;
        return this;
    }
    public java.util.Map<String, Object> egressOnlyInternetGatewayId;
    public CreateEgressOnlyInternetGatewayResultEgressOnlyInternetGateway withEgressOnlyInternetGatewayId(java.util.Map<String, Object> egressOnlyInternetGatewayId) {
        this.egressOnlyInternetGatewayId = egressOnlyInternetGatewayId;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public CreateEgressOnlyInternetGatewayResultEgressOnlyInternetGateway withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
}