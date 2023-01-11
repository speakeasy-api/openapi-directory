package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FileCommentEntity
 * List File Comments by path
**/
public class FileCommentEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;
    public FileCommentEntity withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public FileCommentEntity withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reactions")
    public FileCommentReactionEntity reactions;
    public FileCommentEntity withReactions(FileCommentReactionEntity reactions) {
        this.reactions = reactions;
        return this;
    }
}