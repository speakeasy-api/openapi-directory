package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StillWaitingResponseSpecification
 * Defines the messages that Amazon Lex sends to a user to remind them that the bot is waiting for a response.
**/
public class StillWaitingResponseSpecification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowInterrupt")
    public Boolean allowInterrupt;
    public StillWaitingResponseSpecification withAllowInterrupt(Boolean allowInterrupt) {
        this.allowInterrupt = allowInterrupt;
        return this;
    }
    @JsonProperty("frequencyInSeconds")
    public Long frequencyInSeconds;
    public StillWaitingResponseSpecification withFrequencyInSeconds(Long frequencyInSeconds) {
        this.frequencyInSeconds = frequencyInSeconds;
        return this;
    }
    @JsonProperty("messageGroups")
    public MessageGroup[] messageGroups;
    public StillWaitingResponseSpecification withMessageGroups(MessageGroup[] messageGroups) {
        this.messageGroups = messageGroups;
        return this;
    }
    @JsonProperty("timeoutInSeconds")
    public Long timeoutInSeconds;
    public StillWaitingResponseSpecification withTimeoutInSeconds(Long timeoutInSeconds) {
        this.timeoutInSeconds = timeoutInSeconds;
        return this;
    }
}