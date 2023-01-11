package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * NotificationChannel
 * The Amazon Simple Notification Service (Amazon SNS) topic to which Amazon Textract publishes the completion status of an asynchronous document operation, such as <a>StartDocumentTextDetection</a>. 
**/
public class NotificationChannel {
    @JsonProperty("RoleArn")
    public String roleArn;
    public NotificationChannel withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonProperty("SNSTopicArn")
    public String snsTopicArn;
    public NotificationChannel withSnsTopicArn(String snsTopicArn) {
        this.snsTopicArn = snsTopicArn;
        return this;
    }
}