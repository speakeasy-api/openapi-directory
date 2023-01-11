package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateCommentInput {
    @JsonProperty("commentId")
    public String commentId;
    public UpdateCommentInput withCommentId(String commentId) {
        this.commentId = commentId;
        return this;
    }
    @JsonProperty("content")
    public String content;
    public UpdateCommentInput withContent(String content) {
        this.content = content;
        return this;
    }
}