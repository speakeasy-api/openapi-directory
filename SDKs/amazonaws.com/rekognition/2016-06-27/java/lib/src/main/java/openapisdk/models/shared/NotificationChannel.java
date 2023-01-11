package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * NotificationChannel
 * The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the completion status of a video analysis operation. For more information, see <a>api-video</a>. Note that the Amazon SNS topic must have a topic name that begins with <i>AmazonRekognition</i> if you are using the AmazonRekognitionServiceRole permissions policy to access the topic. For more information, see <a href="https://docs.aws.amazon.com/rekognition/latest/dg/api-video-roles.html#api-video-roles-all-topics">Giving access to multiple Amazon SNS topics</a>.
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