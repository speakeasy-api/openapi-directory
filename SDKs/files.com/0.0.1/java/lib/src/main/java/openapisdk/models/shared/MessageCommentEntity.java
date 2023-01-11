package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MessageCommentEntity
 * List Message Comments
**/
public class MessageCommentEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;
    public MessageCommentEntity withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public MessageCommentEntity withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reactions")
    public MessageCommentReactionEntity reactions;
    public MessageCommentEntity withReactions(MessageCommentReactionEntity reactions) {
        this.reactions = reactions;
        return this;
    }
}