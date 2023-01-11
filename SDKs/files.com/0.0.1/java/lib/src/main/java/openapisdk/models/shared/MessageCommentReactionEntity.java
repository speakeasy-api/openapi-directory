package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MessageCommentReactionEntity
 * List Message Comment Reactions
**/
public class MessageCommentReactionEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emoji")
    public String emoji;
    public MessageCommentReactionEntity withEmoji(String emoji) {
        this.emoji = emoji;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public MessageCommentReactionEntity withId(Integer id) {
        this.id = id;
        return this;
    }
}