package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteCommentContentInput {
    @JsonProperty("commentId")
    public String commentId;
    public DeleteCommentContentInput withCommentId(String commentId) {
        this.commentId = commentId;
        return this;
    }
}