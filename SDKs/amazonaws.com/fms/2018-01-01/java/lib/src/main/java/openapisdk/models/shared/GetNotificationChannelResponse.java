package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetNotificationChannelResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SnsRoleName")
    public String snsRoleName;
    public GetNotificationChannelResponse withSnsRoleName(String snsRoleName) {
        this.snsRoleName = snsRoleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SnsTopicArn")
    public String snsTopicArn;
    public GetNotificationChannelResponse withSnsTopicArn(String snsTopicArn) {
        this.snsTopicArn = snsTopicArn;
        return this;
    }
}