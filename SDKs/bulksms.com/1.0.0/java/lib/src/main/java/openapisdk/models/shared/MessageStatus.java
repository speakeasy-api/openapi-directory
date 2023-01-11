package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MessageStatus
 * The status of the message
**/
public class MessageStatus {
    @JsonProperty("id")
    public String id;
    public MessageStatus withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subtype")
    public MessageStatusSubtypeEnum subtype;
    public MessageStatus withSubtype(MessageStatusSubtypeEnum subtype) {
        this.subtype = subtype;
        return this;
    }
    @JsonProperty("type")
    public MessageStatusTypeEnum type;
    public MessageStatus withType(MessageStatusTypeEnum type) {
        this.type = type;
        return this;
    }
}