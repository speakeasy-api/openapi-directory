package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MessageGroup
 * Provides one or more messages that Amazon Lex should send to the user.
**/
public class MessageGroup {
    @JsonProperty("message")
    public Message message;
    public MessageGroup withMessage(Message message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("variations")
    public Message[] variations;
    public MessageGroup withVariations(Message[] variations) {
        this.variations = variations;
        return this;
    }
}