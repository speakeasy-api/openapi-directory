package openapisdk.models.shared;



/**
 * CreateVpcEndpointConnectionNotificationResultConnectionNotification
 * Information about the notification.
**/
public class CreateVpcEndpointConnectionNotificationResultConnectionNotification {
    public java.util.Map<String, Object> connectionEvents;
    public CreateVpcEndpointConnectionNotificationResultConnectionNotification withConnectionEvents(java.util.Map<String, Object> connectionEvents) {
        this.connectionEvents = connectionEvents;
        return this;
    }
    public java.util.Map<String, Object> connectionNotificationArn;
    public CreateVpcEndpointConnectionNotificationResultConnectionNotification withConnectionNotificationArn(java.util.Map<String, Object> connectionNotificationArn) {
        this.connectionNotificationArn = connectionNotificationArn;
        return this;
    }
    public java.util.Map<String, Object> connectionNotificationId;
    public CreateVpcEndpointConnectionNotificationResultConnectionNotification withConnectionNotificationId(java.util.Map<String, Object> connectionNotificationId) {
        this.connectionNotificationId = connectionNotificationId;
        return this;
    }
    public java.util.Map<String, Object> connectionNotificationState;
    public CreateVpcEndpointConnectionNotificationResultConnectionNotification withConnectionNotificationState(java.util.Map<String, Object> connectionNotificationState) {
        this.connectionNotificationState = connectionNotificationState;
        return this;
    }
    public java.util.Map<String, Object> connectionNotificationType;
    public CreateVpcEndpointConnectionNotificationResultConnectionNotification withConnectionNotificationType(java.util.Map<String, Object> connectionNotificationType) {
        this.connectionNotificationType = connectionNotificationType;
        return this;
    }
    public java.util.Map<String, Object> serviceId;
    public CreateVpcEndpointConnectionNotificationResultConnectionNotification withServiceId(java.util.Map<String, Object> serviceId) {
        this.serviceId = serviceId;
        return this;
    }
    public java.util.Map<String, Object> vpcEndpointId;
    public CreateVpcEndpointConnectionNotificationResultConnectionNotification withVpcEndpointId(java.util.Map<String, Object> vpcEndpointId) {
        this.vpcEndpointId = vpcEndpointId;
        return this;
    }
}