package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SnsTopicPublishAction
 * Information required to publish the Amazon SNS message.
**/
public class SnsTopicPublishAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payload")
    public Payload payload;
    public SnsTopicPublishAction withPayload(Payload payload) {
        this.payload = payload;
        return this;
    }
    @JsonProperty("targetArn")
    public String targetArn;
    public SnsTopicPublishAction withTargetArn(String targetArn) {
        this.targetArn = targetArn;
        return this;
    }
}