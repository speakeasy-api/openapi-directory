package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FileCommentReactionEntity
 * Create File Comment Reaction
**/
public class FileCommentReactionEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emoji")
    public String emoji;
    public FileCommentReactionEntity withEmoji(String emoji) {
        this.emoji = emoji;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public FileCommentReactionEntity withId(Integer id) {
        this.id = id;
        return this;
    }
}