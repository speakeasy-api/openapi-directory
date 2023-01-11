package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MessageReactionEntity
 * List Message Reactions
**/
public class MessageReactionEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emoji")
    public String emoji;
    public MessageReactionEntity withEmoji(String emoji) {
        this.emoji = emoji;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public MessageReactionEntity withId(Integer id) {
        this.id = id;
        return this;
    }
}