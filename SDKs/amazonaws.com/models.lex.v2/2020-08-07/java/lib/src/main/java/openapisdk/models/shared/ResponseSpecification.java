package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResponseSpecification
 * Specifies a list of message groups that Amazon Lex uses to respond the user input.
**/
public class ResponseSpecification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowInterrupt")
    public Boolean allowInterrupt;
    public ResponseSpecification withAllowInterrupt(Boolean allowInterrupt) {
        this.allowInterrupt = allowInterrupt;
        return this;
    }
    @JsonProperty("messageGroups")
    public MessageGroup[] messageGroups;
    public ResponseSpecification withMessageGroups(MessageGroup[] messageGroups) {
        this.messageGroups = messageGroups;
        return this;
    }
}