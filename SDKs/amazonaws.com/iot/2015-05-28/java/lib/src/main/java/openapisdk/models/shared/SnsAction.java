package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SnsAction
 * Describes an action to publish to an Amazon SNS topic.
**/
public class SnsAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messageFormat")
    public MessageFormatEnum messageFormat;
    public SnsAction withMessageFormat(MessageFormatEnum messageFormat) {
        this.messageFormat = messageFormat;
        return this;
    }
    @JsonProperty("roleArn")
    public String roleArn;
    public SnsAction withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonProperty("targetArn")
    public String targetArn;
    public SnsAction withTargetArn(String targetArn) {
        this.targetArn = targetArn;
        return this;
    }
}