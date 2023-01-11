package openapisdk.models.shared;



public class CreateVpcEndpointConnectionNotificationResult {
    public java.util.Map<String, Object> clientToken;
    public CreateVpcEndpointConnectionNotificationResult withClientToken(java.util.Map<String, Object> clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    public CreateVpcEndpointConnectionNotificationResultConnectionNotification connectionNotification;
    public CreateVpcEndpointConnectionNotificationResult withConnectionNotification(CreateVpcEndpointConnectionNotificationResultConnectionNotification connectionNotification) {
        this.connectionNotification = connectionNotification;
        return this;
    }
}