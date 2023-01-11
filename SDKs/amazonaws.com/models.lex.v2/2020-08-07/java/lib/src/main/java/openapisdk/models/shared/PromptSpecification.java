package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PromptSpecification
 * Specifies a list of message groups that Amazon Lex sends to a user to elicit a response.
**/
public class PromptSpecification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowInterrupt")
    public Boolean allowInterrupt;
    public PromptSpecification withAllowInterrupt(Boolean allowInterrupt) {
        this.allowInterrupt = allowInterrupt;
        return this;
    }
    @JsonProperty("maxRetries")
    public Long maxRetries;
    public PromptSpecification withMaxRetries(Long maxRetries) {
        this.maxRetries = maxRetries;
        return this;
    }
    @JsonProperty("messageGroups")
    public MessageGroup[] messageGroups;
    public PromptSpecification withMessageGroups(MessageGroup[] messageGroups) {
        this.messageGroups = messageGroups;
        return this;
    }
}