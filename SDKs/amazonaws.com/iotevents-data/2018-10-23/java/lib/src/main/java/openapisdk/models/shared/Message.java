package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Message
 * Information about a message.
**/
public class Message {
    @JsonProperty("inputName")
    public String inputName;
    public Message withInputName(String inputName) {
        this.inputName = inputName;
        return this;
    }
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
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestamp")
    public TimestampValue timestamp;
    public Message withTimestamp(TimestampValue timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}