package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Message
 * Information about a message.
**/
public class Message {
    @JsonProperty("messageId")
    public String messageId;
    public Message withMessageId(String messageId) {
        this.messageId = messageId;
        return this;
    }
    @JsonProperty("payload")
    public String payload;
    public Message withPayload(String payload) {
        this.payload = payload;
        return this;
    }
}