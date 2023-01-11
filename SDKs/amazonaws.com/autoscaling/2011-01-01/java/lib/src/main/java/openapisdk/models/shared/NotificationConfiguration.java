package openapisdk.models.shared;



/**
 * NotificationConfiguration
 * Describes a notification.
**/
public class NotificationConfiguration {
    public String autoScalingGroupName;
    public NotificationConfiguration withAutoScalingGroupName(String autoScalingGroupName) {
        this.autoScalingGroupName = autoScalingGroupName;
        return this;
    }
    public String notificationType;
    public NotificationConfiguration withNotificationType(String notificationType) {
        this.notificationType = notificationType;
        return this;
    }
    public String topicARN;
    public NotificationConfiguration withTopicArn(String topicARN) {
        this.topicARN = topicARN;
        return this;
    }
}