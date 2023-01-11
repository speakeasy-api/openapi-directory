package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteCommentContentOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public Comment comment;
    public DeleteCommentContentOutput withComment(Comment comment) {
        this.comment = comment;
        return this;
    }
}