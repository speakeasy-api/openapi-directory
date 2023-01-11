package openapisdk.models.shared;



/**
 * NotificationConfiguration
 * Describes a notification topic and its status. Notification topics are used for publishing ElastiCache events to subscribers using Amazon Simple Notification Service (SNS).
**/
public class NotificationConfiguration {
    public String topicArn;
    public NotificationConfiguration withTopicArn(String topicArn) {
        this.topicArn = topicArn;
        return this;
    }
    public String topicStatus;
    public NotificationConfiguration withTopicStatus(String topicStatus) {
        this.topicStatus = topicStatus;
        return this;
    }
}