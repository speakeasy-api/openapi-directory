package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutNotificationChannelRequest {
    @JsonProperty("SnsRoleName")
    public String snsRoleName;
    public PutNotificationChannelRequest withSnsRoleName(String snsRoleName) {
        this.snsRoleName = snsRoleName;
        return this;
    }
    @JsonProperty("SnsTopicArn")
    public String snsTopicArn;
    public PutNotificationChannelRequest withSnsTopicArn(String snsTopicArn) {
        this.snsTopicArn = snsTopicArn;
        return this;
    }
}