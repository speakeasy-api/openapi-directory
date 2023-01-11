package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SnsConfiguration
 * Contains information about the SNS topic to which you want to send your alerts and the IAM role that has access to that topic.
**/
public class SnsConfiguration {
    @JsonProperty("RoleArn")
    public String roleArn;
    public SnsConfiguration withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonProperty("SnsTopicArn")
    public String snsTopicArn;
    public SnsConfiguration withSnsTopicArn(String snsTopicArn) {
        this.snsTopicArn = snsTopicArn;
        return this;
    }
}